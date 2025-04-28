import { technologies } from "@data";
import React from "react";
import { SkillIcon } from "./SkillIcon";
import "./SkillIcons.css";

export const SkillIcons = () => {
  return (
    <div className="skill-icons">
      {technologies.map((data, key) => (
        <SkillIcon
          key={key}
          skillName={data.skillName}
          skillSVG={data.skillSVG}
        />
      ))}
    </div>
  );
};
