// app/components/About.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "../images/profile.picture.jpg";
import GithubHeatmap from "./GithubHeatmap";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 pt-36 pb-20 md:pt-44 md:pb-24 text-center"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-7 ring-1 ring-white/15">
          <Image
            src={profilePicture}
            alt="Tony Nguyen Le"
            className="object-cover w-full h-full"
            width={256}
            height={256}
            priority
            quality={100}
            unoptimized
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.24em] text-white/55 mb-4">
          Software Engineer | CTO @ Easy Eiendom · Norway
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-5 !leading-[1.05] max-w-3xl">
          Tony Nguyen Le
        </h1>

        <p className="text-base md:text-lg text-white/70 max-w-md leading-relaxed">
          Building real estate tools at{" "}
          <a
            href="https://app.easyeiendom.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            Easy Eiendom
          </a>{" "}
          — making Norwegian property data easier to use for everyone.
        </p>

        <GithubHeatmap user="TonyLe02" />
      </motion.div>
    </section>
  );
};

export default About;
