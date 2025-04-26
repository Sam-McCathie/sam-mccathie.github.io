import React, { useState } from "react";
import { Role } from "./components";
import { roles } from "@data";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {roles.map((role, index) => (
        <Role {...role} />
      ))}
    </div>
  );
};
