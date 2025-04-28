import React, { FC, useState } from "react";
import { Role as RoleProps } from "data/roles";
import { Description } from "./Description";
import { NavArrowSVG } from "@svgs";
import { Overview } from "./Overview";

export const RoleMobile: FC<RoleProps> = ({ roleDescription, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRole = () => {
    setIsOpen(!isOpen);
  };

  const containerState = isOpen ? "open" : "closed";

  return (
    <div
      className={`role container mobile ${containerState}`}
      onClick={toggleRole}
    >
      <Overview {...rest} />
      <Description roleDescription={roleDescription} />
      <button className="close-arrow" onClick={toggleRole}>
        <NavArrowSVG />
      </button>
    </div>
  );
};
