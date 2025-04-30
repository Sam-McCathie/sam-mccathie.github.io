import { CloseSVG } from "@svgs";
import { Button, ThemeToggle } from "@components";
import React, { FC } from "react";
import "./HamburgerMenu.css";
import { Section } from "@types";

interface HamburgerMenuProps {
  sections: Section[];
  isOpen: boolean;
  closeMenu: () => void;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  closeMenu,
  sections,
}) => {
  return (
    isOpen && (
      <div className="hamburger">
        <Button
          svg={<CloseSVG />}
          ariaLabel="Close hamburger"
          onClick={closeMenu}
        />

        <ThemeToggle />
      </div>
    )
  );
};
