import React from "react";
import { Button } from "../../button";

export const NavButtons = () => {
  const handleNavigation = (text: string) => () => {
    console.log(`${text} clicked`);
  };

  return (
    <div className="nav-buttons">
      <Button text="About" onClick={handleNavigation("About")} />
      <Button text="Skills" onClick={handleNavigation("Skills")} />
      <Button text="Experience" onClick={handleNavigation("Experience")} />
      <Button text="Projects" onClick={handleNavigation("Projects")} />
    </div>
  );
};
