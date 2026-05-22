/* eslint-disable */
// src/components/Contact.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

type Channel = {
  label: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  copy?: string;
};

const CHANNELS: Channel[] = [
  {
    label: "Email",
    handle: "lee.tony2002@gmail.com",
    href: "mailto:lee.tony2002@gmail.com",
    icon: <FaEnvelope size={18} />,
    copy: "Best for serious stuff.",
  },
  {
    label: "LinkedIn",
    handle: "/in/tonynl02",
    href: "https://www.linkedin.com/in/tonynl02",
    icon: <FaLinkedin size={18} />,
    copy: "I check it.",
  },
  {
    label: "GitHub",
    handle: "@TonyLe02",
    href: "https://github.com/TonyLe02",
    icon: <FaGithub size={18} />,
    copy: "All my code lives here.",
  },
  {
    label: "Instagram",
    handle: "@tonyle02",
    href: "https://www.instagram.com/tonyle02",
    icon: <FaInstagram size={18} />,
    copy: "Off-the-clock stuff.",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="relative anchor-offset px-4 py-20 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45 mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">
            Let&apos;s talk.
          </h2>
          <p className="text-white/65 max-w-md mx-auto">
            Email&apos;s fastest. I&apos;m also on the usual places.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/85 group-hover:text-white">
                  {c.icon}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium text-white">
                    {c.label}
                  </span>
                  <span className="text-xs text-white/55 truncate font-mono">
                    {c.handle}
                  </span>
                </div>
                <span className="ml-auto text-white/30 group-hover:text-white/70 transition-colors text-sm">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
