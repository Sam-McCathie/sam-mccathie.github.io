import React from "react";
import { Button } from "../../button";

export const NavButtons = () => {
  const handleScroll = (text: string) => () => {
    console.log(`${text} clicked`);
  };

  return (
    <div className="nav-buttons">
      <Button
        text="About"
        onClick={handleScroll("About")}
        ariaLabel="Scroll to About section"
      />
      <Button
        text="Skills"
        onClick={handleScroll("Skills")}
        ariaLabel="Scroll to Skills section"
      />
      <Button
        text="Experience"
        onClick={handleScroll("Experience")}
        ariaLabel="Scroll to Experience section"
      />
      <Button
        text="Projects"
        onClick={handleScroll("Projects")}
        ariaLabel="Scroll to Projects section"
      />
    </div>
  );
};
