import { WebsiteSVG } from "@svgs";
import { Role as RoleProps } from "data/roles";
import React, { FC } from "react";

export const Role: FC<RoleProps> = ({
  companyName,
  companyLogoPath,
  employmentPeriod,
  roleDescription,
}) => {
  return (
    <div className="role">
      <div className="overview">
        <img src={companyLogoPath} alt={`${companyName} logo`} />
        <div className="details">
          <div className="title">
            <h3>{companyName}</h3>
            <a>
              <WebsiteSVG />
            </a>
          </div>
          <p>{employmentPeriod}</p>
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
