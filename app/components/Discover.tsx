/* eslint-disable */
// app/components/Discover.tsx
import React from "react";
import { Timeline } from "./ui/timeline";
import Internship from "./Internship";
import Projects from "./Projects";
import Experience from "./Experience";
import { title } from "process";

const Discover = () => {
  const timelineData = [
    {
      title: "August 2024",
      content: <Internship />,
    },
    {
      title: "August 2023",
      content: <Projects />,
    },
    {
      title: "March 2022",
      content: <Experience />,
    },
  ];

  return (
    <div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Discover;
