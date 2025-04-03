import React from "react";
import { HamburgerSVG } from "@svgs";
import { Button } from "@components";
import { NavButtons, ThemeToggle } from "./components";
import "./Header.css";

export const Header = () => {
  // TODO: Add scrolling from clicking, h4 and nav buttons.
  return (
    <header>
      <Button
        svg={<HamburgerSVG />}
        ariaLabel="Open Menu"
        className="hamburger"
        onClick={() => alert("Menu clicked")}
      />
      <Button
        text="Sam McCathie"
        ariaLabel="Navigate to top of page"
        className="home"
        onClick={() => alert("Title clicked")}
      />
      <NavButtons />
      <ThemeToggle />
    </header>
  );
};
