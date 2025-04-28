import React from "react";
import { HamburgerSVG } from "@svgs";
import { Button } from "@components";
import { NavButtons, ThemeToggle } from "./components";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Button
          svg={<HamburgerSVG />}
          ariaLabel="Open Menu"
          className="hamburger"
          onClick={() => alert("Menu clicked")}
        />
        <Button
          text="Sam McCathie"
          ariaLabel="Navigate to top of page"
          className="name-nav"
          onClick={() => alert("Title clicked")}
        />
        <NavButtons />
        <ThemeToggle />
      </div>
    </header>
  );
};
