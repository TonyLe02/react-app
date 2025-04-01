/* eslint-disable */
import React from "react";
import Image from "next/image";

// Image
import KartAI from "../images/KartAI.png";

const Bachelorproject = () => {
  return (
    <section id="projects" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          Bachelor Project: Enhancing GeoGPT with KartAi
        </h2>
        <h2 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          (Jan 2025 - 2025)
        </h2>
        <div className="text-base md:text-lg">
            <p className="mb-4">
            For my bachelor&apos;s thesis, in collaboration with Kartverket and
            Kristiansand Kommune, I developed GeoGPT, an AI chatbot capable of
            processing thousands of datasets from Geonorge.no and interacting
            with maps. The application integrates language models and vector
            databases to improve geospatial data retrieval, ensuring precision
            and accessibility for users of all expertise levels. Our MVP has
            been successfully deployed for beta testing, showcasing the
            potential of AI in advancing geospatial information systems.
            </p>
        </div>

        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full h-auto object-cover rounded-lg">
              <Image
                src={KartAI.src}
                alt="Project Image 2"
                className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>

        <p className="text-xl md:text-3xl text-green-500 font-bold mt-4">
          Skills Learned:
        </p>
        <ul className="mt-2">
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> UI/UX Design
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Next.js & TypeScript
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> PostgreSQL with
            Pgvector
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Python/LLM Data
            Processing
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Docker
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Bachelorproject;
