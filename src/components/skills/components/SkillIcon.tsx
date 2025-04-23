import { ISkillData } from "@types";
import React, { FC } from "react";
import "./SkillIcon.css";

export const SkillIcon: FC<ISkillData> = ({ skillName, skillSVG }) => {
  return (
    <div className="skill-icon">
      <span>{skillName}</span>
      {skillSVG}
    </div>
  );
};
