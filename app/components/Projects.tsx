/* eslint-disable */
import React from "react";

// Image
import Image from "next/image";
import Grade from "../images/grade-result.png";
import NøstedApp1 from "../images/nøsted-app-1.png";
import NøstedApp2 from "../images/nøsted-app-2.png";

const Projects = () => {
  return (
    <section id="projects" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          Programming Project with Nøsted &
        </h2>
        <h2 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          (Aug 2023 - 2024)
        </h2>
        <div className="text-base md:text-lg">
          <p className="mb-4">
            During my third semester at the University of Agder, I participated
            in a challenging programming project from Nøsted &. Our task was to
            create an information system for the maintenance of winches. We
            designed a model for filling out service forms that employees or
            mechanics could complete, as well as checklists that needed to be
            ticked off.
          </p>
          <p className="mb-4">
            All the form information was stored in a database using MariaDB.
            With this data, we were able to set up a service order overview.
            This allowed us to go back to the order, view the information added,
            and make changes as needed.
          </p>
          <p className="mb-4">
            The project was developed using .NET & C#, which required us to
            become familiar with these technologies. This provided us with
            valuable experience in using powerful tools for web development.
          </p>
          <p className="mb-4">
            Additionally, we embraced the Azure DevOps methodology to optimize
            our human resources across various areas of the information system.
            We conducted daily Scrum stand-ups to keep everyone aligned and
            utilized the Azure DevOps Kanban board to efficiently track our
            progress and manage tasks.
          </p>
          <p className="mb-4">
            I'm also happy to share that I got an A during this project. The
            images below provide a glimpse into the user interface of our
            application. They showcase the service form and checklist features,
            as well as the service order overview. Our goal was to create a
            user-friendly interface that made the maintenance process more
            efficient and manageable.
          </p>
        </div>
        <div className="container mx-auto py-8">
          <div className="flex justify-center mb-4">
            <Image
              src={Grade.src}
              alt="Grade Result"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
              aria-hidden="true"
              width={1920}
              height={1080}
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full h-auto object-cover rounded-lg shadow-md">
              <Image
                src={NøstedApp1.src}
                alt="Project Image 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
                width={1920}
                height={1080}
              />
            </div>
            <div className="w-full h-auto object-cover rounded-lg shadow-md">
              <Image
                src={NøstedApp2.src}
                alt="Project Image 2"
                className="w-full h-auto object-cover rounded-lg shadow-md"
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
            <span className="text-green-500 mr-2">✓</span> System Analysis
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Database Management
            with MariaDB
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Web Development with
            .NET & C#
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> User Interface Design
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Project Management
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
