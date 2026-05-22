/* eslint-disable */
// app/components/Footer.tsx
"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-20 py-10">
      <p className="text-xs text-white/40 text-center">
        © {new Date().getFullYear()} Tony Nguyen Le
      </p>
    </footer>
  );
};

export default Footer;
