/* eslint-disable */
// app/components/Academic.tsx

import React from "react";
import UiAPhoto from "../images/uia-photo.webp";

const Academic = () => {
  return (
    <section id="academic" className="bg-nero text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4 leading-snug">
          Student Mentor and Teaching Assistant at UiA
        </h2>

        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4 leading-snug">
          (Aug 2023 - 2025)
        </h2>

        <p className="text-xl mb-4">
          I've had the privilege of guiding new students through their initial
          academic experiences, helping them navigate the challenges of
          university life. My role as a Teaching Assistant has allowed me to
          delve deeper into the fascinating world of data technology, supporting
          research and learning in a vibrant academic environment.
        </p>

        <p className="mb-4">
          These experiences have not only enriched my understanding, but also
          honed my skills in communication, leadership, and collaboration,
          preparing me for a future in technology and innovation.
        </p>

        <div className="flex flex-wrap justify-center items-center mt-4">
          <img
            src={UiAPhoto.src}
            alt="UiA"
            className="rounded-lg w-full mb-4 sm:mb-0"
            aria-hidden="true"
          />
        </div>

        <p className="text-3xl text-green-500 font-bold mt-4">
          Courses Assisted:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>IS-100: The Role of Digitalization within Future Societies</li>
          <li>IS-104: Digital Interaction Design</li>
          <li>IS-114: Introduction to Co-creation in Information Systems</li>
          <li>IS-105: Data Communications and Operating Systems</li>
        </ul>

        <p className="text-3xl text-green-500 font-bold mt-4">
          Skills Learned:
        </p>
        <ul className="text-lg list-disc list-inside">
          <li>Communication</li>
          <li>Leadership</li>
          <li>Collaboration</li>
          <li>Mentorship</li>
          <li>Teaching</li>
        </ul>
      </div>
    </section>
  );
};

export default Academic;
