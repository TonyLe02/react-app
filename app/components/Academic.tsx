// app/components/Academic.tsx
import React from "react";
import Image from "next/image";
import UiAPhoto from "../images/uia-photo.webp";

const COURSES = ["IS-100", "IS-104", "IS-114", "IS-105"];

const Academic = () => {
  return (
    <section className="text-white">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        UiA
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight !leading-tight max-w-2xl">
        Teaching assistant
      </h3>
      <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl">
        Mentored first-year IT students through their intro courses at the
        University of Agder.
      </p>

      <div className="mt-8 max-w-sm">
        <Image
          src={UiAPhoto.src}
          alt="UiA"
          className="rounded-lg w-full h-auto"
          width={1920}
          height={1080}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2 max-w-2xl">
        {COURSES.map((c) => (
          <span
            key={c}
            className="text-[11px] uppercase tracking-wider text-white/65 border border-white/15 rounded-full px-2.5 py-1"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Academic;
