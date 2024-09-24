/* eslint-disable */
"use client";
import { useEffect, useState } from "react";
import faviIcon from "../favicon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Cover } from "./ui/cover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Back to top button */
  useEffect(() => {
    // Show or hide the button based on scroll position
    const handleScroll = () => {
      const myBtn = document.getElementById("myBtn");
      if (window.scrollY > 300) {
        myBtn?.classList.remove("hidden");
      } else {
        myBtn?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow border-gray-200 absolute top-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img
              src={faviIcon.src}
              alt="LeWorks Logo"
              className="h-6 mr-2 sm:h-9"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
              LeWorks
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {["About", "Contact", "Internship", "Projects", "Experience"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 text-gray-900 hover:text-orange-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Back to top button */}
      <button
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
        className="hidden fixed bottom-8 right-8 z-50 cursor-pointer p-3 rounded-full text-lg bg-[#121212] border-2 border-yellow-500 hover:border-yellow-600 items-center space-x-2"
      >
        <Cover>
          <FontAwesomeIcon icon={faRocket} className="text-yellow-500" />
        </Cover>
      </button>
    </>
  );
};

export default Header;
