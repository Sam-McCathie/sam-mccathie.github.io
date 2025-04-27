import { NavArrowSVG, WebsiteSVG } from "@svgs";
import { Role as IRole } from "data/roles";
import React, { FC } from "react";

interface RoleProps extends IRole {
  isActice: boolean;
  changeDescription: () => void;
}

export const RoleDesktop: FC<RoleProps> = ({
  companyName,
  role,
  companyLogoPath,
  isActice,
  changeDescription,
}) => {
  return (
    <div className={`role container`}>
      <div className="overview">
        <img src={companyLogoPath} alt={`${companyName} logo`} />
        <div className="details">
          <div className="title">
            <h4>{companyName}</h4>
          </div>
          <p className="role">{role}</p>
        </div>
        <button
          className="toggle-arrow"
          disabled={isActice}
          onClick={changeDescription}
        >
          <NavArrowSVG />
        </button>
      </div>
    </div>
  );
};
