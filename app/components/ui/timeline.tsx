"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const EASE = [0.22, 1, 0.36, 1] as const;

// Distance from the container's content-left edge to the timeline line.
const LINE_OFFSET = "1rem";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative w-full font-sans anchor-offset" id="work">
      <div className="container mx-auto pt-20 pb-12 px-6 md:px-10 max-w-5xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45 mb-4">
          Timeline
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white max-w-3xl !leading-[1.05]">
          What I&apos;ve been up to.
        </h2>
      </div>

      <div
        ref={railRef}
        className="relative max-w-5xl mx-auto pb-24 px-6 md:px-10"
      >
        {/* Faint guide line */}
        <span
          aria-hidden="true"
          className="absolute top-4 bottom-4 w-px bg-white/10"
          style={{ left: `calc(${LINE_OFFSET} + 1.5rem)` }}
        />

        {/* Scroll-tied filled line */}
        <motion.span
          aria-hidden="true"
          className="absolute top-4 bottom-4 w-px bg-white/55 origin-top"
          style={{
            left: `calc(${LINE_OFFSET} + 1.5rem)`,
            scaleY: lineScale,
          }}
        />

        <ul className="space-y-20 md:space-y-24">
          {data.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative"
              style={{ paddingLeft: `calc(${LINE_OFFSET} + 1.5rem + 2rem)` }}
            >
              {/* Dot — sits on the line at the year's row */}
              <motion.span
                aria-hidden="true"
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  top: "0.55rem",
                  left: `calc(${LINE_OFFSET} + 1.5rem)`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
              />

              {/* Year row */}
              <p className="text-sm font-semibold text-white/85 tracking-tight mb-5">
                {item.title}
              </p>

              {item.content}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
