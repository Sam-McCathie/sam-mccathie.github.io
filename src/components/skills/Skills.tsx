import React from "react";
import { SkillIcons } from "./components/SkillIcons";
import { Carousel } from "./components/Carousel";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <h3>Technologies & Frameworks</h3>
      <SkillIcons />
      <h3>Tools & Utilities</h3>
      <Carousel />
    </div>
  );
};
