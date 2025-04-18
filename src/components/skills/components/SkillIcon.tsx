import { ISkillData } from "@types";
import React, { FC } from "react";
import "./SkillIcon.css";

/* need to consider how this will work with mobile devices that don't have hover */
export const SkillIcon: FC<ISkillData> = ({ skillName, skillSVG }) => {
  return (
    <div className="skill-icon">
      <span>{skillName}</span>
      {skillSVG}
    </div>
  );
};
