/* eslint-disable */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Swipload from "../images/swipload-logo.png";
import Nøsted from "../images/nøsted-logo.png";
import NITO from "../images/nito-logo.png";
import UiA from "../images/uia-logo.png";
import EasyLogo from "../images/EasyLogo.png";

type Org = {
  name: string;
  href: string;
  logo: { src: string };
};

const ORGS: Org[] = [
  { name: "Easy Eiendom", href: "https://app.easyeiendom.no/", logo: EasyLogo },
  { name: "Swipload", href: "https://www.swipload.com/", logo: Swipload },
  { name: "Nøsted &", href: "https://nosted.com/", logo: Nøsted },
  { name: "NITO", href: "https://www.nito.no/om-nito/", logo: NITO },
  { name: "UiA", href: "https://www.uia.no/", logo: UiA },
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

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-w-3xl mx-auto">
          {ORGS.map((org, i) => (
            <motion.li
              key={org.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
            >
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                title={org.name}
                className="flex flex-col items-center justify-center gap-2 h-24 px-3 rounded-xl bg-white"
              >
                <img
                  src={org.logo.src}
                  alt={org.name}
                  className="max-h-8 max-w-[80%] w-auto object-contain"
                />
                <span className="text-[10px] uppercase tracking-wider text-black/55 font-medium">
                  {org.name}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default History;
