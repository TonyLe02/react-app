import React from "react";
import { LinkPreview } from "./ui/link-preview";

const Internship = () => {
  return (
    <section id="internship" className="text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 mb-4 leading-snug">
          Internship - at Swipload Technologies AS
        </h2>

        <p>
          This year marks the beginning of an exciting chapter in my career
          journey as I start my internship at Swipload Technologies AS. Being
          one of the few students selected to join their innovative team is both
          an honor and a thrilling opportunity.
        </p>
        <br />
        <p>
          During this internship, I will be diving deep into the world of data
          technology, working on real-world projects that challenge and enhance
          my skills. From data analysis to software development, I am eager to
          contribute to the team and learn from experienced professionals in the
          field.
        </p>
        <br />
        <p>
          Stay tuned for updates on my progress and experiences at Swipload
          Technologies AS. This is just the beginning of an incredible journey,
          and I am excited to share it with you all. 🚀
        </p>
        <br />
        <div className="flex flex-row">
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/index.html"
            className="text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-[3px] relative mr-4">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Intern Website - Click Here
              </div>
            </button>
          </LinkPreview>
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/pages/status.html"
            className="text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Learn more about my internship - Click here
              </div>
            </button>
          </LinkPreview>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Internship;
