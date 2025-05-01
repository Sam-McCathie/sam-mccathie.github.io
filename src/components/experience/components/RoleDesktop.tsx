import { Role } from "data/roles";
import React, { FC } from "react";
import { Overview } from "./Overview";

interface RoleProps extends Role {
  isActive: boolean;
  onClick: () => void;
}

export const RoleDesktop: FC<RoleProps> = (props) => (
  <div
    className={`role container hover-animate ${props.isActive ? "active" : ""}`}
    onClick={props.onClick}
  >
    <Overview {...props} />
  </div>
);
