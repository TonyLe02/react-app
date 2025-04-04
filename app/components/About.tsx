// app/components/About.tsx
import React from "react";

// Image
import Image from "next/image";
import profilePicture from "../images/profile.picture.jpg";

// UI Components
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      id="about"
    >
      <div className="relative z-20">
        <Image
          src={profilePicture.src}
          alt="Profile Picture"
          className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4"
          aria-hidden="true"
          width={1920}
          height={1080}
        />
      </div>
      <h1 className="block font-extrabold text-3xl md:text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2">
        Tony Nguyen Le
      </h1>
      <p className="text-lg md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-8">
        I&apos;m an aspiring developer with a passion for data technology.
      </p>
      <p className="text-6xl md:text-8xl font-extrabold mb-8">🚀</p>

      <ShootingStars />
      <StarsBackground />
    </section>
  );
};

export default About;
