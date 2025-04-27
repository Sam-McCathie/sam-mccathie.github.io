import { NavArrowSVG, WebsiteSVG } from "@svgs";
import { Role as RoleProps } from "data/roles";
import React, { FC, useState } from "react";
import { Description } from "./Description";

export const RoleMobile: FC<RoleProps> = ({
  companyName,
  role,
  companyLogoPath,
  companyWebsite,
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
          <div className="title">
            <h4>{companyName}</h4>
            <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
              <WebsiteSVG />
            </a>
          </div>
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
