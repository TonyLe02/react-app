import React from "react";
import NITOSTAND from "../images/nito-stand.jpg";
import NITOLANDSMOTE from "../images/nito-landsmøte.jpg";

const Experience = () => {
  return (
    <section id="experience" className="bg-nero text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl mb-4">Experience</h2>
        <p className="text-xl mb-8">
          Learn more about my experience and skills:
        </p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4">
          My Role in NITO Studentene
        </h2>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4">
          (Mar 2022 - 2025)
        </h2>
        <p className="text-xl mb-4">
          As the Chairperson for NITO Studentene at Kristiansand, I've led a
          team to organize courses and events, gaining valuable experience in
          team leadership, project management, and event organization.
        </p>
        <p className="mb-4">
          This role has not only strengthened my leadership skills, but also my
          ability to work effectively in a team and manage complex projects.
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
