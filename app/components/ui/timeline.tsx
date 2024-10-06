/* eslint-disable */
"use client";

import Fornebu from "../../images/nito-fornebu.png";
import Image from 'next/image';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5); // Show 5 items initially
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height],
    { type: "spring", stiffness: 300, damping: 30 }
  );
  
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 500) {
        setVisibleItems((prev) => prev + 3); // Load 3 more items on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full bg-[#121212] dark:bg-[#121212] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="container mx-auto py-20 px-4 md:px-8 lg:px-10 max-w-7xl">
        <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 max-w-4xl !leading-relaxed">
          Discover My Tech Journey
        </h2>
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="md:w-2/3">
            <p className="text-white text-sm md:text-base max-w-sm mt-2">
              I’m Tony Nguyen Le, an aspiring developer passionate about data
              technology.
            </p>
            <p className="text-white text-sm md:text-base max-w-sm mt-4">
              As a third-year IT and Information Systems student at the
              University of Agder, I’ve spent the last 3 years learning various
              technologies and understanding the importance of digitalization in
              a future society.
            </p>
            <p className="text-white text-sm md:text-base max-w-sm mt-4">
              Here’s a glimpse into my journey as a student!
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Image
              src={Fornebu}
              alt="NITO leaders in Fornebu team building event"
              className="rounded-xl"
              placeholder="blur"
              quality={85}
            />
            <p className="mt-2 text-center text-xs text-gray-300">
              - Teambuilding with leaders of the student union called NITO at
              Quality Hotel EXPO in Fornebu (2024).
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center"
              style={{ top: windowHeight * 0.1 }} // 10% of viewport height
            >
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
                <motion.div
                  className="h-4 w-4 rounded-full bg-green-500 dark:bg-green-500 border border-neutral-700 dark:border-neutral-700 p-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-200 dark:text-neutral-200">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-200 dark:text-neutral-200">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-yellow-500 via-red-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
