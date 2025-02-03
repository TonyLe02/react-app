import React from "react";
// Image
import Image from "next/image";
import Search from "../images/SearchApp.png";
import Register from "../images/RegisterApp.png";
import Booking from "../images/BookingApp.png";

const Roombooking = () => {
  return (
    <section id="projects" className="text-white p-0 anchor-offset">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          Programming Project - Roombooking
        </h2>
        <h2 className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 mb-2 md:leading-snug">
          (Aug 2024 - 2024)
        </h2>
        <div className="text-base md:text-lg">
          <p className="mb-4">
            This system is designed for booking rooms at a small motel with a
            total of 25 rooms. The motel must have at least three different room
            types, such as single rooms, double rooms, and junior suites. Each
            room type must have a limit on the number of occupants (adults and
            children). This project requires an understanding of variables,
            functions, arrays, and other fundamental PHP concepts, as well as
            user interface design.
          </p>
          <p className="mb-4">
            Users must be able to register as either guests or administrators.
            An administrator should be able to name and describe rooms and room
            types, as well as make certain rooms unavailable for specific
            periods. A guest should be able to search for check-in and check-out
            dates and specify the number of adults and children staying. For a
            more advanced system, guests can enter preferences for whether the
            room should be on a higher or lower floor or near an elevator.
            Additionally, a loyalty program can be implemented, allowing guests
            to view their stay history, retrieve receipts, and save preferences.
          </p>
          <p className="mb-4">
            The project requires careful consideration of what guests (both
            frequent and occasional) and motel owners would appreciate in such a
            system. Prioritizing these features and implementing as many as
            possible through good programming practices is essential.
          </p>
        </div>

        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full h-auto object-cover rounded-lg shadow-md">
              <Image
                src={Register.src}
                alt="Project Image 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
                width={1920}
                height={1080}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
              <Image
                src={Search.src}
                alt="Project Image 2"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                aria-hidden="true"
                width={1920}
                height={1080}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/1 lg:w-full px-2 mb-4">
              <Image
                src={Booking.src}
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
            <span className="text-green-500 mr-2">✓</span> Server Side
            Development with PHP
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Web Development with
            HTML & TailwindCSS
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> Database Management
            with XXAMP
          </li>
          <li className="flex items-center md:text-xl">
            <span className="text-green-500 mr-2">✓</span> User Interface Design
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roombooking;
