import React, { useState } from "react";
import { Role } from "./components";
import { roles } from "@data";
import { Description } from "./components/Description";
import "./Experience.css";

export const Experience = () => {
  const [description, setDescription] = useState(roles[0].roleDescription);

  const changeDescription = (descriptionIndex: number) => () => {
    setDescription(roles[descriptionIndex].roleDescription);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="roles">
        {roles.map((role, index) => (
          <Role {...role} changeDescription={changeDescription(index)} />
        ))}
        <Description roleDescription={description} />
      </div>
    </div>
  );
};
