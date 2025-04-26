import { NavArrowSVG, WebsiteSVG } from "@svgs";
import { Role as RoleProps } from "data/roles";
import React, { FC, useState } from "react";

export const Role: FC<RoleProps> = ({
  companyName,
  role,
  companyLogoPath,
  companyWebsite,
  employmentPeriod,
  roleDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
          <p className="role">{role}</p>
          <p className="duration">{employmentPeriod}</p>
        </div>
        <button className="toggle-arrow" onClick={toggleOpen}>
          <NavArrowSVG />
        </button>
      </div>
      <ul className="description">
        {roleDescription.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
      <button className="close-arrow" onClick={toggleOpen}>
        <NavArrowSVG />
      </button>
    </div>
  );
};
