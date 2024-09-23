// app/components/About.tsx
import React from "react";
import profilePicture from "../images/profile-picture.jpg";

const About = () => {
  return (
    <section id="about" className="p-10 text-center">
      <img
        src={profilePicture.src}
        alt="Profile Picture"
        className="rounded-full w-32 h-32 mx-auto mb-4"
        aria-hidden="true"
      />
      <h1 className="block font-extrabold text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-2">
        Tony Nguyen Le
      </h1>
      <p className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-8">
        I'm an aspiring developer with a passion for data technology.
      </p>
      <p className="text-2xl mb-8 text-white">
        Currently in my 3rd year of IT & Information Systems at the University
        of Agder.
      </p>
      <p className="text-2xl mb-8 text-white">
        I enjoy building applications and am constantly learning new things to
        improve my skills.
      </p>
      <p className="text-2xl mb-8 text-white">
        I hope you enjoy scrolling through and learning more about me!
      </p>
    </section>
  );
};

export default About;
