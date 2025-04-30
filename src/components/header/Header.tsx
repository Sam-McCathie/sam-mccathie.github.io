import React, { FC } from "react";
import { HamburgerSVG } from "@svgs";
import { Button, ThemeToggle } from "@components";
import { NavButtons } from "./components";
import { scrollToTop } from "@helpers";
import "./Header.css";
import { Section } from "@types";

interface HeaderProps {
  sections: Section[];
  toggleHamburgerMenu: () => void;
}

export const Header: FC<HeaderProps> = ({ toggleHamburgerMenu, sections }) => {
  return (
    <header>
      <div className="header-content">
        <Button
          svg={<HamburgerSVG />}
          ariaLabel="Open Menu"
          className="hamburger"
          onClick={toggleHamburgerMenu}
        />
        <Button
          text="Sam McCathie"
          ariaLabel="Navigate to top of page"
          className="name-nav"
          onClick={scrollToTop}
        />
        <NavButtons sections={sections} />
        <ThemeToggle />
      </div>
    </header>
  );
};
