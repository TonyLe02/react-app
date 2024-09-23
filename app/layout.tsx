import React from "react";
import type { Metadata } from "next";
import "./global.css";
import Header from "./components/Header";
import About from "./components/About";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <About />
        {children}
      </body>
    </html>
  );
}
