import { NavArrowSVG, WebsiteSVG } from "@svgs";
import { Role as IRole } from "data/roles";
import React, { FC } from "react";

interface RoleProps extends IRole {
  isOpen: boolean;
  toggleRoleExpanded: () => void;
}

export const Role: FC<RoleProps> = ({
  companyName,
  companyLogoPath,
  companyWebsite,
  employmentPeriod,
  roleDescription,
  isOpen,
  toggleRoleExpanded,
}) => {
  const containerState = isOpen ? "open" : "closed";

  return (
    <div className={`role container ${containerState}`}>
      <div className="overview">
        <img src={companyLogoPath} alt={`${companyName} logo`} />
        <div className="details">
          <div className="title">
            <h4>{companyName}</h4>
            <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
              <WebsiteSVG />
            </a>
          </div>
          <p className="duration">{employmentPeriod}</p>
        </div>
        <button className="toggle-arrow" onClick={toggleRoleExpanded}>
          <NavArrowSVG />
        </button>
      </div>
      <ul className="description">
        {roleDescription.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
      <button className="close-arrow" onClick={toggleRoleExpanded}>
        <NavArrowSVG />
      </button>
    </div>
  );
};
