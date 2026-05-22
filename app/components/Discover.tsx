/* eslint-disable */
// app/components/Discover.tsx
import React from "react";
import { Timeline } from "./ui/timeline";
import Internship from "./Internship";
import Projects from "./Projects";
import Experience from "./Experience";
import Academic from "./Academic";
import Roombooking from "./Roombooking";
import Bachelorproject from "./Bachelorproject";
import EasyEiendom from "./EasyEiendom";
import WorkoutTracker from "./WorkoutTracker";

const Discover = () => {
  const timelineData = [
    { title: "Now", content: <EasyEiendom /> },
    { title: "2026", content: <WorkoutTracker /> },
    { title: "2025", content: <Bachelorproject /> },
    { title: "2024", content: <Roombooking /> },
    { title: "2024", content: <Internship /> },
    { title: "2023", content: <Projects /> },
    { title: "2023", content: <Academic /> },
    { title: "2022", content: <Experience /> },
  ];

  return <Timeline data={timelineData} />;
};

export default Discover;
