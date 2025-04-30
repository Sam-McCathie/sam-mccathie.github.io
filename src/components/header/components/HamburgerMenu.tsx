import { Button } from "@components";
import { CloseSVG } from "@svgs";
import React, { FC } from "react";
import "./HamburgerMenu.css";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderChildProps } from "./header-child-props";

export const HamburgerMenu: FC<HeaderChildProps> = ({
  isHamburgerOpen,
  onClick,
  sections,
}) => {
  return (
    isHamburgerOpen && (
      <div className="hamburger">
        <Button
          svg={<CloseSVG />}
          ariaLabel="Close hamburger"
          onClick={onClick}
        />

        <ThemeToggle />
      </div>
    )
  );
};
