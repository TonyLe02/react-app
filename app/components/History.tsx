/* eslint-disable */
import React from "react";
import Swipload from "../images/swipload-logo.png";
import Nøsted from "../images/nøsted-logo.png";
import NITO from "../images/nito-logo.png";
import UiA from "../images/uia-logo.png";
import EasyLogo from "../images/EasyLogo.png";

const History = () => {
  return (
    <section className="bg-white text-[#121212] text-center p-8 shadow-lg rounded-lg overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-4">Work History</h2>
        <ul className="container mx-auto flex items-center justify-evenly">
          <li className="w-1/6">
            <a
              href="https://easyeiendom.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={EasyLogo.src}
                alt="Easy Eiendom AS Logo"
                className="object-contain w-full h-auto mb-12 max-h-20"
              />
            </a>
          </li>
          <li className="w-1/6">
            <a
              href="https://www.swipload.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Swipload.src}
                alt="Swipload Logo"
                className="object-cover w-full h-auto mb-12"
              />
            </a>
          </li>
          <li className="w-1/6">
            <a
              href="https://nosted.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Nøsted.src}
                alt="Nøsted Logo"
                className="object-cover w-full h-auto mb-12"
              />
            </a>
          </li>
          <li className="w-1/6">
            <a
              href="https://www.nito.no/om-nito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={NITO.src}
                alt="NITO Logo"
                className="object-cover w-48 h-auto mb-12"
              />
            </a>
          </li>
          <li className="w-1/5">
            <a
              href="https://www.uia.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={UiA.src}
                alt="UiA Logo"
                className="object-cover w-full h-auto mb-12"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default History;
