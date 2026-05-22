/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const TAGS = ["Next.js", "TypeScript", "Supabase", "Zustand"];

const WorkoutTracker = () => {
  return (
    <section className="anchor-offset text-white">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        Side project
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight !leading-tight max-w-2xl">
        Workout Tracker
      </h3>
      <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl">
        I kept losing count of my reps, so I built a rep counter with
        gamification — XP, levels, achievements. Google sync via Supabase.
      </p>

      <div className="mt-8 max-w-sm overflow-hidden rounded-lg">
        <img
          src="https://github.com/user-attachments/assets/c818d5f1-6046-4323-8c8d-8da49c3ae1b7"
          alt="Workout Tracker dashboard"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 max-w-2xl">
        {TAGS.map((t) => (
          <span
            key={t}
            className="text-[11px] uppercase tracking-wider text-white/65 border border-white/15 rounded-full px-2.5 py-1"
          >
            {t}
          </span>
        ))}
        <a
          href="https://workout-tracker-two-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-wider text-white border-b border-white/40 pb-0.5 hover:border-white"
        >
          Live →
        </a>
        <a
          href="https://github.com/TonyLe02/workout-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-wider text-white border-b border-white/40 pb-0.5 hover:border-white"
        >
          Code →
        </a>
      </div>
    </section>
  );
};

export default WorkoutTracker;
