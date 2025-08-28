import { Button } from "@components";
import { scrollToTop } from "@helpers";
import { HamburgerSVG } from "@svgs";
import React, { FC } from "react";
import "./HeaderLayout.css";
import { NavButtons } from "./NavButtons";
import { ThemeToggle } from "./ThemeToggle";
import { useScroll } from "@context";

interface HeaderLayoutProps {
  onClick: () => void;
}
export const HeaderLayout: FC<HeaderLayoutProps> = ({ onClick }) => {
  const { isAtTop } = useScroll();

  return (
    <header data-scrolled={!isAtTop || null}>
      <div className="header-content">
        <Button
          svg={<HamburgerSVG />}
          ariaLabel="Open hamburger menu"
          className="hamburger"
          onClick={onClick}
        />
        <Button
          text="Sam McCathie"
          ariaLabel="Navigate to top of page"
          className="name-nav"
          onClick={scrollToTop}
        />
        <NavButtons />
        <ThemeToggle />
      </div>
    </header>
  );
};
