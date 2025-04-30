import { Button } from "@components";
import { scrollToTop } from "@helpers";
import { CloseSVG, NavArrowSVG } from "@svgs";
import React, { FC } from "react";
import "./HamburgerMenu.css";
import { NavButtons } from "./NavButtons";
import { ThemeToggle } from "./ThemeToggle";

interface HamburgerMenuProps {
  onClick: () => void;
  isHamburgerOpen: boolean;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
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
