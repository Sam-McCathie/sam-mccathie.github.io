import React from "react";
import { ExperienceDesktop, ExperienceMobile } from "./components";
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
