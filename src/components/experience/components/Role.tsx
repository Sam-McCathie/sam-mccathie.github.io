import { WebsiteSVG } from "@svgs";
import { Role as RoleProps } from "data/roles";
import React, { FC } from "react";

export const Role: FC<RoleProps> = ({
  companyName,
  companyLogoPath,
  companyWebsite,
  employmentPeriod,
  roleDescription,
}) => {
  return (
    <div className="role container">
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
      </div>
      <ul>
        {roleDescription.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  );
};
