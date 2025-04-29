import React from "react";
import { useTheme } from "@context";
import { LogoLinks } from "@components";

export const Profile = () => {
  const { theme } = useTheme();

  // AI generate a better dark mode - ran out of tokens :(
  // generate the shirt colour change and swap the faces
  const profileTheme = theme === "dark" ? "/profile-dark.jpg" : "./profile.jpg";

  return (
    <div className="profile">
      <LogoLinks />
      <div className="frame">
        <img src={profileTheme} alt="profile picture" />
      </div>
    </div>
  );
};
