import { Button } from "@components";
import { CloseSVG, NavArrowSVG } from "@svgs";
import React, { FC } from "react";
import "./HamburgerMenu.css";
import { HeaderChildProps } from "./header-child-props";
import { NavButtons } from "./NavButtons";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToTop } from "@helpers";

export const HamburgerMenu: FC<HeaderChildProps> = ({
  isHamburgerOpen,
  onClick: closeHamburger,
}) => {
  const active = isHamburgerOpen ? "active" : "";

  const handleScrollToTop = () => {
    scrollToTop();
    closeHamburger();
  };

  return (
    <>
      <div
        className={`background-opacity ${active}`}
        onClick={closeHamburger}
      ></div>
      <div className={`hamburger-menu ${active}`}>
        <div className="controls">
          <ThemeToggle />
          <Button
            svg={<CloseSVG />}
            ariaLabel="Close hamburger"
            onClick={closeHamburger}
          />
        </div>
        <NavButtons customFunction={closeHamburger} />
        <Button
          className="back-to-top"
          svg={<NavArrowSVG />}
          ariaLabel="Back to top"
          onClick={handleScrollToTop}
        />
      </div>
    </>
  );
};
