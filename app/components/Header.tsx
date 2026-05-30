"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Ladder animation — the sheet staggers its children, each "rung" drops in from above
const sheetVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.15, staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const rungVariants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
};

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#work" },
] as const;

const SOCIAL_ITEMS = [
  {
    label: "GitHub",
    href: "https://github.com/TonyLe02",
    icon: <FaGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tonynl02",
    icon: <FaLinkedin size={16} />,
  },
] as const;

const Mark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="9" height="9" rx="2" fill="currentColor" opacity="0.85" />
    <rect x="12" y="12" width="9" height="9" rx="2" fill="currentColor" opacity="0.55" />
  </svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 pointer-events-none">
      <div className="mx-auto w-fit pointer-events-auto">
        {/* Single floating pill — same shape always */}
        <div className="flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-xl px-1.5 py-1">
          <span
            aria-hidden="true"
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 text-white/80"
          >
            <Mark />
          </span>

          {/* Desktop nav + socials */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
            {SOCIAL_ITEMS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white/75 hover:text-white hover:bg-white/10 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </nav>

          {/* Primary CTA — always visible on desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center h-9 px-4 ml-1 rounded-full bg-white text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile sheet — ladder animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-sheet"
              variants={sheetVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{ transformOrigin: "top center" }}
              className="md:hidden mt-2 mx-auto w-48 rounded-2xl bg-zinc-950/70 backdrop-blur-2xl backdrop-saturate-150 p-2 ring-1 ring-white/10 shadow-2xl shadow-black/60"
            >
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={rungVariants}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  variants={rungVariants}
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center h-10 rounded-xl bg-white text-background text-sm font-medium"
                >
                  Contact
                </motion.a>
              </nav>
              <motion.div
                variants={rungVariants}
                className="flex items-center gap-1 mt-2 px-1"
              >
                {SOCIAL_ITEMS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
