// app/components/GithubHeatmap.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// Defined green scale — built around the site's success token (#22c55e).
const LEVEL_COLOR = ["#1a1a1a", "#14532d", "#15803d", "#22c55e", "#4ade80"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Day = { date: string; count: number; level: number } | null;
type ContributionData = { login: string; total: number; weeks: Day[][] };

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GithubHeatmap({ user = "TonyLe02" }: { user?: string }) {
  const [data, setData] = useState<ContributionData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(`/api/contributions?user=${encodeURIComponent(user)}`)
      .then((r) => (r.ok ? (r.json() as Promise<ContributionData>) : Promise.reject()))
      .then((d) => {
        if (alive) setData(d);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, [user]);

  const cardBase =
    "group block w-full rounded-2xl bg-white/[0.02] ring-1 ring-white/10 hover:ring-white/15 px-5 py-5 sm:px-6 sm:py-6 transition-colors";
  const wrapper = "mt-10 w-full max-w-[720px] mx-auto";

  if (failed) {
    return (
      <div className={wrapper}>
        <a
          href={`https://github.com/${user}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-4 py-2 text-xs text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <FaGithub size={14} /> View GitHub activity
        </a>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={wrapper}>
        <div className={cardBase.replace("hover:ring-white/20", "")}>
          <div className="flex items-center justify-between mb-4">
            <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
            <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
          </div>
          <div
            className="grid gap-[3px]"
            style={{ gridTemplateColumns: "repeat(53, 1fr)", gridTemplateRows: "repeat(7, 1fr)" }}
          >
            {Array.from({ length: 53 * 7 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-[2px] bg-white/[0.06] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const { total, weeks, login } = data;

  // Place a month label on the first column that starts a new month.
  let prevMonth = -1;
  const monthLabels: (string | null)[] = weeks.map((col) => {
    const first = col.find(Boolean);
    if (!first) return null;
    const m = Number(first.date.slice(5, 7)) - 1;
    if (m !== prevMonth) {
      prevMonth = m;
      return MONTHS[m];
    }
    return null;
  });

  // Find the most recent day so we can highlight it ("today" marker).
  const latestDate = weeks
    .flat()
    .reduce<string>((max, d) => (d && d.date > max ? d.date : max), "");

  // Inner border for definition, plus a soft green glow on high-activity cells.
  const cellShadow = (level: number) => {
    const inner = "inset 0 0 0 1px rgba(255,255,255,0.06)";
    if (level >= 4) return `${inner}, 0 0 8px rgba(74,222,128,0.45)`;
    if (level === 3) return `${inner}, 0 0 6px rgba(34,197,94,0.25)`;
    return inner;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
      className={wrapper}
    >
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${total.toLocaleString("en-US")} GitHub contributions in the last year`}
        className={cardBase}
      >
        {/* Header — matches the eyebrow style used elsewhere in the site */}
        <div className="flex items-baseline justify-between mb-4">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white/55 group-hover:text-white/75 transition-colors">
            <FaGithub size={12} className="translate-y-[1px]" /> GitHub activity
          </span>
          <span className="text-xs sm:text-sm text-white/60 tabular-nums">
            <span className="text-white font-medium">
              {total.toLocaleString("en-US")}
            </span>{" "}
            <span className="text-white/50">contributions</span>
          </span>
        </div>

        {/* Month row — aligned to the grid columns via the same CSS grid */}
        <div
          className="grid mb-1.5 text-[9px] uppercase tracking-wider text-white/35"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
        >
          {monthLabels.map((lbl, i) => (
            <div key={i} className="whitespace-nowrap">
              {lbl ?? ""}
            </div>
          ))}
        </div>

        {/* Heatmap — square cells sized responsively via CSS grid + aspect-square */}
        <div
          className="grid gap-[3px]"
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, 1fr)`,
            gridTemplateRows: "repeat(7, 1fr)",
            gridAutoFlow: "column",
          }}
        >
          {weeks.flatMap((col, wi) =>
            col.map((day, di) => {
              if (!day) {
                return (
                  <div
                    key={`${wi}-${di}`}
                    className="aspect-square"
                    style={{ backgroundColor: "transparent" }}
                  />
                );
              }
              const isToday = day.date === latestDate;
              return (
                <div
                  key={`${wi}-${di}`}
                  title={`${day.count} contribution${
                    day.count === 1 ? "" : "s"
                  } on ${day.date}`}
                  className="aspect-square rounded-[3px]"
                  style={{
                    backgroundColor: LEVEL_COLOR[day.level] ?? LEVEL_COLOR[0],
                    boxShadow: isToday
                      ? "inset 0 0 0 1.5px rgba(255,255,255,0.9)"
                      : cellShadow(day.level),
                  }}
                />
              );
            })
          )}
        </div>

        {/* Footer — legend + subtle CTA */}
        <div className="mt-4 flex items-center justify-between text-[10px] text-white/40">
          <span className="group-hover:text-white/60 transition-colors">
            @{login} on GitHub
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span>Less</span>
            {LEVEL_COLOR.map((c, i) => (
              <span
                key={c}
                className="h-2.5 w-2.5 rounded-[3px]"
                style={{ backgroundColor: c, boxShadow: cellShadow(i) }}
              />
            ))}
            <span>More</span>
          </span>
        </div>
      </a>
    </motion.div>
  );
}
