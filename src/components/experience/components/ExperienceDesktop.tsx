import React, { useState } from "react";
import { roles } from "@data";
import { Description } from "./Description";
import { RoleDesktop } from "./RoleDesktop";
import "./ExperienceDesktop.css";

export const ExperienceDesktop = () => {
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(0);

  const changeDescription = (descriptionIndex: number) => () => {
    setActiveDescriptionIndex(descriptionIndex);
  };

  const description = roles[activeDescriptionIndex].roleDescription;
  return (
    <div className="experience-desktop">
      <div className="roles">
        {roles.map((role, index) => (
          <RoleDesktop
            {...role}
            isActice={activeDescriptionIndex === index}
            changeDescription={changeDescription(index)}
          />
        ))}
      </div>

      <Description roleDescription={description} className="container" />
    </div>
  );
};
