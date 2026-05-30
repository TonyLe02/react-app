/* eslint-disable */
import React from "react";
import type { Metadata } from "next";
import "./global.css";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Discover from "./components/Discover";
import History from "./components/History";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "Tony Nguyen Le",
  description:
    "Tony Nguyen Le — software developer building real estate tools at Easy Eiendom.",
};

export default function RootLayout() {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-background text-white antialiased">
        {/* Fixed sand-gradient backdrop */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url(/hero-sand.png)" }}
          aria-hidden="true"
        />
        {/* Tinted overlay for readability */}
        <div
          className="fixed inset-0 bg-background/55 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <Header />
          <main>
            <About />
            <History />
            <Discover />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
