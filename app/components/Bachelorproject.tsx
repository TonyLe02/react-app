import React from "react";
import Image from "next/image";

// Image
import KartAI from "../images/KartAI.png";

const Bachelorproject = () => {
  return (
    <section id="projects" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          Bachelor Project: Enhancing GeoGPT 3.0 with KartAI
        </h2>
        <h2 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          (Jan 2025 - 2025)
        </h2>
        <div className="text-base md:text-lg">
          <p className="mb-4">
            For my bachelor&apos;s thesis, I developed GeoGPT, an AI chatbot
            that reads thousands of datasets from Geonorge.no and interacts with
            maps. The application leverages language models and vector databases
            to enhance geospatial data retrieval, making it more precise and
            user-friendly regardless of the user&apos;s expertise. Our MVP has
            been deployed for beta testing, demonstrating the practical
            application of AI in geospatial information systems.
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
        <ul>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> User Interface Design
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Frontend Development:
            Next.js, TypeScript, HTML, and CSS
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Vector Database:
            PostgreSQL with the Pgvector extension
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Data Processing:
            Python, Pandas, and Regex
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Containerization:
            Docker
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Bachelorproject;
