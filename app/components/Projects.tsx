/* eslint-disable */
import React from "react";
import Image from "next/image";
import NøstedApp1 from "../images/nøsted-app-1.png";

const TAGS = [".NET / C#", "MariaDB", "Scrum"];

const Projects = () => {
  return (
    <section id="projects" className="anchor-offset text-white">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        Nøsted &amp;
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight !leading-tight max-w-2xl">
        Winch service tracker
      </h3>
      <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl">
        Group project for Nøsted &amp;. A maintenance system for industrial
        winches with service forms, checklists, and an order overview.
      </p>

      <div className="mt-8 max-w-sm">
        <Image
          src={NøstedApp1.src}
          alt="Nøsted app"
          className="rounded-lg w-full h-auto"
          width={1920}
          height={1080}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2 max-w-2xl">
        {TAGS.map((t) => (
          <span
            key={t}
            className="text-[11px] uppercase tracking-wider text-white/65 border border-white/15 rounded-full px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
