/* eslint-disable */
// app/components/Discover.tsx
import React from "react";
import { Timeline } from "./ui/timeline";
import Internship from "./Internship";
import Projects from "./Projects";
import Experience from "./Experience";
import Academic from "./Academic";
import GithubStats from "./GithubStats";
import Roombooking from "./Roombooking";
import Bachelorproject from "./Bachelorproject";

const Discover = () => {
  const timelineData = [
    {
      title: "Today",
      content: <GithubStats />,
    },
    {
      title: "January 2025",
      content: <Bachelorproject />,
    },
    {
      title: "October 2024",
      content: <Roombooking />,
    },
    {
      title: "August 2024",
      content: <Internship />,
    },
    {
      title: "August 2023",
      content: <Projects />,
    },
    {
      title: "August 2023",
      content: <Academic />,
    },
    {
      title: "March 2023",
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
