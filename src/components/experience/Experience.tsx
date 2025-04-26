import React, { useState } from "react";
import { Role } from "./components";
import { roles } from "@data";
import "./Experience.css";

const roleIndexes = roles.map((_, index) => index);

export const Experience = () => {
  const [expandedRoleIndex, setExpandedRoleIndex] = useState<number | null>(
    null
  );

  const toggleRoleExpanded = (index: number) => () => {
    setExpandedRoleIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      {roles.map((role, index) => (
        <Role
          {...role}
          isOpen={expandedRoleIndex === index}
          toggleRoleExpanded={toggleRoleExpanded(index)}
        />
      ))}
    </div>
  );
};
