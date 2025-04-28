import React from "react";
import { roles } from "@data";
import { RoleMobile } from "./RoleMobile";
import "./ExperienceMobile.css";

export const ExperienceMobile = () => (
  <div className="roles mobile">
    {roles.map((role, index) => (
      <RoleMobile key={index} {...role} />
    ))}
  </div>
);
