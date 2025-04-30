import { scrollToTop } from "@helpers";
import { HamburgerSVG } from "@svgs";
import { Section } from "@types";
import { Button } from "@components";
import React, { FC } from "react";
import { NavButtons } from "./NavButtons";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderLayoutProps {
  sections: Section[];
  isHamburgerOpen: boolean;
  onClick: () => void;
}
export const HeaderLayout: FC<HeaderLayoutProps> = ({
  isHamburgerOpen /* could use this in future to show hide header while hamburger is open? */,
  sections,
  onClick,
}) => {
  return (
    <header>
      <div className="header-content">
        <Button
          svg={<HamburgerSVG />}
          ariaLabel="Open Menu"
          className="hamburger"
          onClick={onClick}
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
