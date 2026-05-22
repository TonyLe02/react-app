import React from "react";
import Image from "next/image";
import NITOLANDSMOTE from "../images/nito-landsmøte.jpg";

const TAGS = ["Leadership", "Events"];

const Experience = () => {
  return (
    <section id="experience" className="anchor-offset text-white">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        NITO Studentene
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight !leading-tight max-w-2xl">
        Student union chairperson
      </h3>
      <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl">
        Joined NITO Studentene in my first week of uni. Eventually ended up as
        chairperson. Lots of events, lots of people.
      </p>

      <div className="mt-8 max-w-sm">
        <Image
          src={NITOLANDSMOTE.src}
          alt="NITO Landsmøte"
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

export default Experience;
