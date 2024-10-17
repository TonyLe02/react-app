/* eslint-disable */
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import group from "../images/group-photo.png";
import status from "../images/status.png";

const Internship = () => {
  return (
    <section id="internship" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500  to-red-500 mb-2 md:leading-snug">
          Internship - at Swipload Technologies AS
        </h2>

        <div className="text-base md:text-lg">
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
            Swipload is a Norwegian tech company transforming logistics with a
            digital platform that optimizes heavy transport assignments. By
            connecting contractors and drivers, it reduces empty trips and
            enhances efficiency, helping businesses save costs. Their platform
            integrates CO2 calculations, enabling users to track and reduce
            emissions, making transport more eco-friendly. Swipload's solutions
            not only streamline logistics operations but also support
            sustainability efforts in the industry. With a focus on greener and
            smarter transportation, they are shaping the future of logistics.
          </p>
          <br />
          <p>
            Stay tuned for updates on my progress and experiences at Swipload
            Technologies AS. This is just the beginning of an incredible journey,
            and I am excited to share it with you all. 🚀
          </p>
        </div>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={group.src}
                alt="NITO Landsmøte"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
              />
            </div>
            <div>
              <img
                src={status.src}
                alt="NITO Stand"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <br />
        <div className="flex flex-col md:flex-row">
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/index.html"
            className="text-xs md:text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-[2px] md:p-[3px] relative mb-4 md:mb-0 md:mr-4">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500  to-red-500 rounded-lg" />
              <div className="px-4 py-2 md:px-8 md:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Intern Website
              </div>
            </button>
          </LinkPreview>
          <LinkPreview
            url="https://nthomtng.github.io/PraksisNettSide/pages/status.html"
            className="text-xs md:text-lg font-semibold text-white hover:underline hover:text-green-500 transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-[2px] md:p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500  to-red-500 rounded-lg" />
              <div className="px-4 py-2 md:px-8 md:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Learn more about my internship
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
