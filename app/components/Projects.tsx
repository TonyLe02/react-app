/* eslint-disable */
import React from "react";
import Grade from "../images/grade-result.png";
import NøstedApp1 from "../images/nøsted-app-1.png";
import NøstedApp2 from "../images/nøsted-app-2.png";

const Projects = () => {
  return (
    <section id="projects" className="text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4 leading-snug">
          Programming Project - 3rd Semester
        </h2>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mb-4 leading-snug">
          (Aug 2023 - 2024)
        </h2>
        <p className="mb-4">
          During my third semester at the University of Agder, I participated in
          a challenging programming project from Nøsted &. Our task was to
          create an information system for the maintenance of winches. We
          designed a model for filling out service forms that employees or
          mechanics could complete, as well as checklists that needed to be
          ticked off.
        </p>
        <p className="mb-4">
          All the form information was stored in a database using MariaDB. With
          this data, we were able to set up a service order overview. This
          allowed us to go back to the order, view the information added, and
          make changes as needed.
        </p>
        <p className="mb-4">
          The project was developed using .NET & C#, which required us to become
          familiar with these technologies. This provided us with valuable
          experience in using powerful tools for web development.
        </p>
        <p className="mb-4">
          I'm also happy to share that I got an A during this project. The
          images below provide a glimpse into the user interface of our
          application. They showcase the service form and checklist features, as
          well as the service order overview. Our goal was to create a
          user-friendly interface that made the maintenance process more
          efficient and manageable.
        </p>
        <div className="container mx-auto py-8">
          <div className="flex justify-center mb-4">
            <img
              src={Grade.src}
              alt="Grade Result"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
              <img
                src={NøstedApp1.src}
                alt="Project Image 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
              <img
                src={NøstedApp2.src}
                alt="Project Image 2"
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
            <span className="text-green-500 mr-2">✓</span> System Analysis
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Database Management
            with MariaDB
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Web Development with
            .NET & C#
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> User Interface Design
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> Project Management
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
