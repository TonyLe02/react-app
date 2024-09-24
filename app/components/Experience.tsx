/* eslint-disable */

import React from "react";
import NITOSTAND from "../images/nito-stand.jpg";
import NITOLANDSMOTE from "../images/nito-landsmøte.jpg";

const Experience = () => {
  return (
    <section id="experience" className="bg-nero text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-600 mb-4 leading-snug ">
          Student Organization Leader
        </h2>

        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-600 mb-4 leading-snug">
          (Mar 2022 - 2025)
        </h2>
        <p className="mb-4">
          In 2022, I began my studies in IT. On my first day, I was introduced
          to NITO Studentene, a union for engineering and technology students.
          An interesting twist: my upperclassman during the start of my studies was the
          chairperson of NITO Studentene, along with my other mentor, both of
          whom were dedicated students actively involved in organizations like
          NITO and Systematicus (the student organization for IT).
        </p>
        <p className="mb-4">
          During an introductory event, my mentor introduced me to NITO at their
          booth, and I was immediately captivated. After hearing about the
          fantastic benefits NITO provides its members—such as insurance, career
          services, networking opportunities, and free academic courses and
          social events throughout our studies—I knew I wanted to join. I
          thought, why not contribute to such a vibrant student organization
          that offers so much?
        </p>
        <p className="mb-4">
          In March 2022, I became a board member, engaging in meaningful
          activities and initiatives. Fast forward to January 2024, when I was
          appointed chairperson of NITO Studentene, a role I’ve held for almost
          a year now. It’s been an exciting and enriching experience, allowing
          me to meet many amazing people along the way. That’s truly the best
          part!
        </p>

        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={NITOLANDSMOTE.src}
                alt="NITO Landsmøte"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
              />
            </div>
            <div>
              <img
                src={NITOSTAND.src}
                alt="NITO Stand"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <p className="text-3xl text-green-500 font-bold mt-4">
          Skills Learned:
        </p>
        <ul className="text-lg list-none">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Leadership
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Teamwork
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Project Management
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Event Organization
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Communication
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Experience;
