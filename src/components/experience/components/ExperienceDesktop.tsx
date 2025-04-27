import { roles } from "@data";
import React, { useState } from "react";
import { Description } from "./Description";
import "./ExperienceDesktop.css";
import { RoleDesktop } from "./RoleDesktop";

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
