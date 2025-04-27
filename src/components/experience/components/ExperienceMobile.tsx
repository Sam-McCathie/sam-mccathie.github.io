import React from "react";
import { roles } from "@data";
import { RoleMobile } from "./RoleMobile";
import "./ExperienceMobile.css";

export const ExperienceMobile = () => {
  return (
    <div className="roles mobile">
      {roles.map((role) => (
        <RoleMobile {...role} />
      ))}
    </div>
  );
};
