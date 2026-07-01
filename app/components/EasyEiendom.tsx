"use client";
import React from "react";
import Image from "next/image";
import EasyPage from "../images/EasyPage.png";

const TAGS = ["C# / .NET", "Python", "Vue · Nuxt", "Fullstack"];

const EasyEiendom = () => {
  return (
    <section id="easy-eiendom" className="anchor-offset text-white">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        Easy Eiendom
      </p>
      <h3 className="mt-3 font-display text-2xl md:text-4xl font-medium tracking-tight !leading-tight max-w-2xl">
        Lead Software Engineer
      </h3>
      <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl">
        Working on the platform that makes Norwegian real estate data easy to
        access. Started as an intern after one of the founders found my bachelor
        project.
      </p>

      <div className="mt-8 max-w-sm">
        <Image
          src={EasyPage.src}
          alt="Easy Eiendom product"
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

export default EasyEiendom;
