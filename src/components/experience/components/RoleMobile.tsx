import React, { FC, useState } from "react";
import { Role as RoleProps } from "data/roles";
import { Description } from "./Description";
import { NavArrowSVG } from "@svgs";

export const RoleMobile: FC<RoleProps> = ({
  companyName,
  role,
  companyLogoPath,
  employmentPeriod,
  roleDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRole = () => {
    setIsOpen(!isOpen);
  };

  const containerState = isOpen ? "open" : "closed";

  return (
    <div className={`role container mobile ${containerState}`}>
      <div className="overview">
        <img src={companyLogoPath} alt={`${companyName} logo`} />
        <div className="details">
          <h4>{companyName}</h4>
          <p className="role">{role}</p>
          <p className="duration">{employmentPeriod}</p>
        </div>
        <button className="toggle-arrow" onClick={toggleRole}>
          <NavArrowSVG />
        </button>
      </div>
      <Description roleDescription={roleDescription} />
      <button className="close-arrow" onClick={toggleRole}>
        <NavArrowSVG />
      </button>
    </div>
  );
};
