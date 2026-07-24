// app/api/contributions/route.ts
import { NextResponse } from "next/server";

export const revalidate = 3600; // refresh at most once per hour

type Day = { date: string; count: number; level: number } | null;
type Week = Day[]; // always length 7 (nulls pad partial weeks)

interface ContributionResponse {
  login: string;
  total: number;
  weeks: Week[];
}

const LEVEL_FROM_GRAPHQL: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function weekdayUTC(date: string): number {
  // 0 = Sunday ... 6 = Saturday (matches GitHub's calendar layout)
  return new Date(`${date}T00:00:00Z`).getUTCDay();
}

/* ---- Path 1: official GraphQL API (requires a token) ---- */

interface GraphQLDay {
  contributionCount: number;
  date: string;
  contributionLevel: keyof typeof LEVEL_FROM_GRAPHQL;
  weekday: number;
}
interface GraphQLWeek {
  contributionDays: GraphQLDay[];
}
interface GraphQLCalendar {
  totalContributions: number;
  weeks: GraphQLWeek[];
}
interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: { contributionCalendar?: GraphQLCalendar };
    };
  };
}

async function fetchViaGraphQL(
  login: string
): Promise<{ total: number; weeks: Week[] } | null> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) return null;

  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { contributionCount date contributionLevel weekday } }
        }
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login } }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GraphQL responded ${res.status}`);

  const json = (await res.json()) as GraphQLResponse;
  const cal = json.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) return null;

  const weeks: Week[] = cal.weeks.map((w) => {
    const column: Week = new Array(7).fill(null);
    for (const d of w.contributionDays) {
      column[d.weekday] = {
        date: d.date,
        count: d.contributionCount,
        level: LEVEL_FROM_GRAPHQL[d.contributionLevel] ?? 0,
      };
    }
    return column;
  });

  return { total: cal.totalContributions, weeks };
}

/* ---- Path 2: scrape the public profile HTML (no token needed) ---- */

async function fetchViaScrape(
  login: string
): Promise<{ total: number; weeks: Week[] } | null> {
  // The dedicated contributions SVG endpoint still ships per-day <rect> data
  // (the profile page itself no longer renders the calendar server-side).
  const res = await fetch(
    `https://github.com/users/${encodeURIComponent(login)}/contributions`,
    {
      headers: { "user-agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)" },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`contributions endpoint responded ${res.status}`);

  const html = await res.text();
  // GitHub renders each day as a <td class="ContributionCalendar-day"
  // data-date="YYYY-MM-DD" data-level="0-4"> (no data-count on the td;
  // the count is only in a linked <tool-tip>, so we surface level only).
  const tdRegex =
    /<td\b[^>]*class="[^"]*\bContributionCalendar-day\b[^"]*"[^>]*>/g;
  const tds: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = tdRegex.exec(html)) !== null) tds.push(match[0]);
  if (tds.length === 0) return null;

  // Map td id -> per-day count from the linked <tool-tip for="...">N contribution...</tool-tip> nodes.
  const tipRegex =
    /<tool-tip\b[^>]*for="(contribution-day-component-[^"]+)"[^>]*>\s*(?:No|(\d+))\s*contribution/g;
  const countsById = new Map<string, number>();
  let tip: RegExpExecArray | null;
  while ((tip = tipRegex.exec(html)) !== null) {
    countsById.set(tip[1], tip[2] ? Number(tip[2]) : 0);
  }

  const days: { date: string; count: number; level: number }[] = [];
  for (const td of tds) {
    const date = td.match(/data-date="([^"]+)"/)?.[1];
    const level = Number(td.match(/data-level="(\d+)"/)?.[1] ?? "0");
    const id = td.match(/\bid="([^"]+)"/)?.[1];
    if (!date) continue;
    const count = id ? countsById.get(id) ?? 0 : 0;
    days.push({ date, count, level });
  }
  if (days.length === 0) return null;

  days.sort((a, b) => a.date.localeCompare(b.date));

  // Group into Sunday-starting 7-day columns, padding gaps with nulls.
  const weeks: Week[] = [];
  let current: Week = new Array(7).fill(null);
  let started = false;
  for (const d of days) {
    const wd = weekdayUTC(d.date);
    if (!started || wd === 0) {
      if (started) weeks.push(current);
      current = new Array(7).fill(null);
      started = true;
    }
    current[wd] = d;
  }
  if (started) weeks.push(current);

  // GitHub prints "N contributions in the last year" (whitespace/newlines allowed).
  const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/);
  const summedFromTooltips = days.reduce((sum, d) => sum + d.count, 0);
  const total = totalMatch
    ? Number(totalMatch[1].replace(/,/g, ""))
    : summedFromTooltips;
  return { total, weeks };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const login = (searchParams.get("user") || "TonyLe02").trim();

  let data: { total: number; weeks: Week[] } | null = null;
  try {
    data = await fetchViaGraphQL(login);
  } catch {
    data = null;
  }
  if (!data) {
    try {
      data = await fetchViaScrape(login);
    } catch {
      data = null;
    }
  }

  if (!data) {
    return NextResponse.json(
      { error: "no-data", login },
      { status: 502 }
    );
  }

  const body: ContributionResponse = {
    login,
    total: data.total,
    weeks: data.weeks,
  };
  return NextResponse.json(body, {
    headers: {
      "cache-control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
