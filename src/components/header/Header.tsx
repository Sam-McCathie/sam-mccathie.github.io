import React from "react";
import { ThemeToggle } from "./components";
import { NavButtons } from "./components/NavButtons";
import "./Header.css";
import { Button } from "../button";
import { HamburgerSVG } from "@svgs";

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
