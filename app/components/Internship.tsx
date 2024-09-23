import React from "react";
import { LinkPreview } from "./ui/link-preview";
import Tangen from "../images/tangen-babord.jpg";

const Internship = () => {
  return (
    <section id="internship" className=" text-white p-8">
      <div className="container mx-auto">
        {/* Blog Title */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500 mb-4">
          Internship - 5th Semester
        </h2>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500 mb-4">
          (Aug 2024 - 2025)
        </h2>
        <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500 mb-4">
          Joining Swipload Technologies AS
        </p>
        <p>
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/index.html"
            className="text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intern Website - Click Here
          </LinkPreview>
        </p>

        <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500 mb-4"></p>
        <p className="mb-4">
          This Fall 2024, I am thrilled to embark on a new journey as an intern
          at Swipload Technologies AS. This opportunity marks a significant step
          in my career path where I will immerse myself in the innovative world
          of technology.
        </p>
        <p>
          At Swipload, I look forward to contributing to cutting-edge projects,
          enhancing my technical skills, and working alongside industry experts.
          This experience is not just about professional growth; it's also about
          the excitement of being part of a dynamic team that's shaping the
          future of tech.
        </p>
        <p>
          Stay tuned for updates on my adventures and learnings at Swipload
          Technologies AS!
        </p>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <img
            src={Tangen.src}
            alt="Tangen Babord"
            className="rounded-lg w-full h-auto object-cover mb-4 sm:mb-2 md:mb-4 lg:mb-6"
          />
        </div>

        {/* Internship Status */}
        <h2 className="text-3xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
          Internship Status
        </h2>

        <h2 className="text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
          August 20th, 2024
        </h2>
        <p className="mb-4">
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/pages/status.html"
            className="text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about my internship - Click here
          </LinkPreview>
        </p>
        <p>
          This week is the start of my internship at Swipload Technologies AS. I
          am excited to be part of the few students joining their team, and I
          look forward to learning a lot on the road ahead. Stay tuned for
          updates on my progress and my experiences at Swipload Technologies AS.
          We are just getting started! 🚀
        </p>
      </div>
    </section>
  );
};

export default Internship;
