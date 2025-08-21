import React from "react";

// Image
import Image from "next/image";
import EasyLogo from "../images/EasyLogo.png";
import EasyPage from "../images/EasyPage.png";

const EasyEiendom = () => {
  return (
    <section id="easy-eiendom" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mb-2 md:leading-snug">
          Software Developer - Easy Eiendom AS
        </h2>

        <h3 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 mb-2 md:leading-snug">
          Part-time Developer (Aug 2025 - Present)
        </h3>
        <h4 className="text-md md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 mb-4 md:leading-snug">
          Previous: Summer Intern (Jun - Aug 2025)
        </h4>

        <div className="text-base md:text-lg">
          <p className="mb-4">
            Currently working part-time as a developer at Easy Eiendom AS, focusing on 
            fullstack development to simplify access to real estate data in Norway. 
            This role builds upon my successful summer internship experience at the company.
          </p>
          
          <p className="mb-4">
            <strong>Current Role (Part-time Developer):</strong><br />
            Contributing to both frontend and backend functionality development in a 
            collaborative, cross-functional team environment. Working on innovative 
            solutions that make real estate data more accessible and user-friendly 
            for Norwegian consumers and professionals.
          </p>
          
          <p className="mb-4">
            <strong>Summer Internship Experience:</strong><br />
            During my summer internship, I focused on design solutions, API integration, 
            and exploring AI implementation possibilities. This experience provided 
            valuable hands-on experience in a fast-paced PropTech environment and 
            led to my current part-time position.
          </p>
          
          <p className="mb-4">
            Easy Eiendom AS is a Norwegian PropTech company dedicated to democratizing 
            access to real estate information. The company develops innovative solutions 
            that bridge the gap between complex property data and user-friendly interfaces, 
            making real estate insights accessible to everyone in Norway.
          </p>
        </div>

        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src={EasyLogo.src}
                alt="Easy Eiendom AS Logo"
                className="w-full h-auto object-contain rounded-lg shadow-md max-w-xs mx-auto"
                aria-hidden="true"
                width={400}
                height={400}
              />
            </div>
            <div className="w-full md:w-2/3">
              <Image
                src={EasyPage.src}
                alt="Easy Eiendom Platform"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>

        <p className="text-xl md:text-3xl text-green-500 font-bold mt-4">
          Technologies & Skills:
        </p>
        <ul className="mt-2">
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> C# & .NET Framework
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Fullstack Development
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> API Integration
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> UI/UX Design Solutions
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> AI Implementation Exploration
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> PropTech Industry Knowledge
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Cross-functional Team Collaboration
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EasyEiendom;
