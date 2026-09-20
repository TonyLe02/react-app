/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Swipload from "../images/swipload-logo.png";
import Nøsted from "../images/nøsted-logo.png";
import NITO from "../images/nito-logo.png";
import UiA from "../images/uia-logo.png";
import Easy from "../images/easy-logo.svg";

import GradEasy from "../images/gradient-easy.png";
import GradSwipload from "../images/gradient-swipload.png";
import GradNosted from "../images/gradient-nosted.png";
import GradNito from "../images/gradient-nito.png";
import GradUia from "../images/gradient-uia.png";

type Org = {
  name: string;
  label: string;
  href: string;
  logo: string;
  gradient: { src: string; width: number; height: number };
  span: string; // md column span — top row spans 2, bottom row spans 3 of a 6-col grid
  logoClass: string; // per-logo sizing (intrinsic aspect ratios vary widely)
};

const ORGS: Org[] = [
  {
    name: "Easy Eiendom",
    label: "Employer",
    href: "https://app.easyeiendom.no/",
    logo: Easy.src,
    gradient: GradEasy,
    span: "md:col-span-2",
    logoClass: "max-h-20 max-w-[40%]",
  },
  {
    name: "Swipload",
    label: "Startup",
    href: "https://www.swipload.com/",
    logo: Swipload.src,
    gradient: GradSwipload,
    span: "md:col-span-2",
    logoClass: "max-h-9 md:max-h-10 max-w-[72%]",
  },
  {
    name: "Nøsted &",
    label: "Client",
    href: "https://nosted.com/",
    logo: Nøsted.src,
    gradient: GradNosted,
    span: "md:col-span-2",
    logoClass: "max-h-8 md:max-h-9 max-w-[78%]",
  },
  {
    name: "NITO",
    label: "Member",
    href: "https://www.nito.no/om-nito/",
    logo: NITO.src,
    gradient: GradNito,
    span: "md:col-span-3",
    logoClass: "max-h-12 md:max-h-14 max-w-[55%]",
  },
  {
    name: "UiA",
    label: "University",
    href: "https://www.uia.no/",
    logo: UiA.src,
    gradient: GradUia,
    span: "md:col-span-3",
    logoClass: "max-h-16 md:max-h-20 max-w-[60%]",
  },
];

const History = () => {
  return (
    <motion.section
      className="relative px-4 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/45 mb-6 text-center">
          Worked with
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
          {ORGS.map((org, i) => (
            <motion.li
              key={org.name}
              className={org.span}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
            >
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                title={org.name}
                aria-label={`${org.name} — ${org.label}`}
                className="group relative block h-44 md:h-48 cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 transition-[box-shadow] duration-300 ease-out hover:ring-white/30"
              >
                {/* Brand gradient background */}
                <Image
                  src={org.gradient.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />

                {/* Scrim for chip + logo legibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/5 to-transparent" />

                {/* Label chip */}
                <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md ring-1 ring-white/15">
                  {org.label}
                </span>

                {/* Centered white logo */}
                <div className="absolute inset-0 flex items-center justify-center px-8">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className={`${org.logoClass} w-auto object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_1px_6px_rgba(0,0,0,0.35))]`}
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default History;
