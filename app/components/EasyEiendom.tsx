"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EasyLogo from "../images/EasyLogo.png";
import EasyPage from "../images/EasyPage.png";

const EasyEiendom = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    "C# & .NET",
    "Python",
    "Vue.js & Nuxt.js",
    "Fullstack Development",
    "API Integration",
    "UI/UX Design Solutions",
    "AI Implementation Exploration",
  ];

  return (
    <motion.section
      ref={ref}
      id="easy-eiendom"
      className="text-white p-0 anchor-offset"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2 md:leading-snug"
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Software Developer - Easy Eiendom AS
          </motion.span>
        </motion.h2>

        <motion.h3
          className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2 md:leading-snug"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          (Aug 2025 - Present)
        </motion.h3>

        <div className="text-base md:text-lg">
          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I&apos;m working as a software developer at Easy Eiendom AS, where I
            focus on fullstack development to make real estate data more
            accessible across Norway. This opportunity grew from my successful
            summer internship with the company.
          </motion.p>

          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.strong className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500">
              What I&apos;m doing now:
            </motion.strong>
            <br />I work on both frontend and backend development in a
            collaborative team environment. We&apos;re building innovative
            solutions that make complex real estate data easy to understand and
            use for both everyday consumers and industry professionals.
          </motion.p>

          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.strong className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500">
              How it all started: (Jun - Aug 2025):
            </motion.strong>
            <br />
            While working on my bachelor&apos;s degree, one of the founders, CFO
            found my project on LinkedIn and saw it was highly relevant to their
            work. That connection quickly led to an internship opportunity at
            Easy Eiendom. I jumped in, tackling design solutions, API
            integrations, and exploring AI enhancements for the platform. The
            fast-paced PropTech environment was a fantastic learning experience
            and set the stage for my current role.
          </motion.p>

          <motion.p
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Easy Eiendom AS is revolutionizing how Norwegians access real estate
            information. We&apos;re breaking down barriers between complex
            property data and user-friendly experiences, making real estate
            insights available to everyone - whether you&apos;re buying your
            first home or you&apos;re a seasoned industry professional.
          </motion.p>
        </div>

        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={EasyLogo.src}
                  alt="Easy Eiendom AS Logo"
                  className="w-full h-auto object-contain rounded-lg max-w-xs mx-auto"
                  aria-hidden="true"
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={EasyPage.src}
                  alt="Easy Eiendom Platform"
                  className="w-full h-auto object-cover rounded-lg"
                  aria-hidden="true"
                  width={1920}
                  height={1080}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-xl md:text-3xl text-green-500 font-bold mt-4"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Technologies & Skills:
        </motion.p>

        <ul className="mt-2">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              className="flex items-center md:text-xl"
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
            >
              <span className="text-green-500 mr-2">✓</span>
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default EasyEiendom;
