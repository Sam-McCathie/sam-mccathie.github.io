import React from "react";
import { ExperienceMobile } from "./components/ExperienceMobile";
import { ExperienceDesktop } from "./components/ExperienceDesktop";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <ExperienceMobile />
      <ExperienceDesktop />
    </div>
  );
};
