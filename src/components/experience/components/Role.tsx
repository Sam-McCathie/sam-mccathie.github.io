import { NavArrowSVG, WebsiteSVG } from "@svgs";
import { Role as IRole } from "data/roles";
import React, { FC, useState } from "react";
import { Description } from "./Description";

interface RoleProps extends IRole {
  isActice: boolean;
  changeDescription: () => void;
}

export const Role: FC<RoleProps> = ({
  companyName,
  role,
  companyLogoPath,
  companyWebsite,
  employmentPeriod,
  roleDescription,
  isActice,
  changeDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRole = () => {
    setIsOpen(!isOpen);
    changeDescription();
  };

  const containerState = isOpen ? "open" : "closed";

  return (
    <div className={`container ${containerState}`}>
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
        {/* TODO fix/ add disabled state*/}
        <button
          className="toggle-arrow"
          disabled={isActice}
          onClick={toggleRole}
        >
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
