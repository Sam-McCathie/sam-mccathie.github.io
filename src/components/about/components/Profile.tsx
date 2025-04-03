import React from "react";
import { LogoLinks } from "./LogoLinks";

export const Profile = () => {
  return (
    <div className="profile">
      <LogoLinks />
      <div className="frame">
        <img src="/profile.jpg" alt="profile picture" />
      </div>
    </div>
  );
};
