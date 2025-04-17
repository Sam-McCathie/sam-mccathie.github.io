import { technologies } from "@data";
import React from "react";
import { SkillIcon } from "./SkillIcon";

export const SkillIcons = () => {
  return (
    <div className="skill-icons">
      {technologies.map((data) => (
        <SkillIcon skillName={data.skillName} skillSVG={data.skillSVG} />
      ))}
    </div>
  );
};
