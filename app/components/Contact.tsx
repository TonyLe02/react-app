/* eslint-disable */
// src/components/Contact.tsx
import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="text-white text-center p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-red-500 mb-4">
          Contact Information
        </h2>
        <p className="text-xl mb-4">
          I'm always open to new opportunities and collaborations.
        </p>
        <p className="text-xl mb-4">
          Feel free to get in touch with me through the following channels:
        </p>
        <ul className="flex justify-center p-0 m-0 list-none">
          <li className="mx-2">
            <a
              href="mailto:lee.tony2002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                size={30}
                className="transition-transform transform hover:scale-110 hover:brightness-75"
              />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.linkedin.com/in/tonynl02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="transition-transform transform hover:scale-110 hover:brightness-75"
              />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://github.com/TonyLe02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="transition-transform transform hover:scale-110 hover:brightness-75"
              />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.instagram.com/tonyle02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="transition-transform transform hover:scale-110 hover:brightness-75"
              />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.facebook.com/tonyle300602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="transition-transform transform hover:scale-110 hover:brightness-75"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
