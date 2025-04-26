import React, { useState } from "react";
import { Role } from "./components";
import { roles } from "@data";
import { Description } from "./components/Description";
import "./Experience.css";

export const Experience = () => {
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(0);

  const changeDescription = (descriptionIndex: number) => () => {
    setActiveDescriptionIndex(descriptionIndex);
  };

  const description = roles[activeDescriptionIndex].roleDescription;

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="roles">
        <div className="role">
          {roles.map((role, index) => (
            <Role
              {...role}
              isActice={activeDescriptionIndex === index}
              changeDescription={changeDescription(index)}
            />
          ))}
        </div>
        <Description roleDescription={description} />
      </div>
    </div>
  );
};
