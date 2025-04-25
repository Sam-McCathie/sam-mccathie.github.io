import React from "react";
import { Role } from "./components";
import { roles } from "@data";

export const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {roles.map((role) => (
        <Role {...role} />
      ))}
    </div>
  );
};
