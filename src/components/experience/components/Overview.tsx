import React, { FC } from "react";
import { Role } from "data/roles";
import { NavArrowSVG } from "@svgs";

interface OverviewProps extends Omit<Role, "roleDescription"> {
  onClick: () => void;
  isActive?: boolean;
}

export const Overview: FC<OverviewProps> = ({
  companyName,
  role,
  companyLogoPath,
  employmentPeriod,
  isActive = false,
  onClick,
}) => (
  <div className="overview">
    <img src={companyLogoPath} alt={`${companyName} logo`} />
    <div className="details">
      <h4>{companyName}</h4>
      <p className="role">{role}</p>
      <p className="duration">{employmentPeriod}</p>
    </div>
    <button className="toggle-arrow" disabled={isActive} onClick={onClick}>
      <NavArrowSVG />
    </button>
  </div>
);
