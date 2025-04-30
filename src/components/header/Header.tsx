import React, { useEffect, useState } from "react";
import { HamburgerMenu, HeaderLayout } from "./components";
import "./Header.css";

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    // handles case where user opens the hamburger, resizes above 768px then under 768px
    // - Prevents the hamburger opening on its own.
    const handleResize = () => {
      if (window.innerWidth > 768 && isHamburgerOpen) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHamburgerOpen]);

  return (
    <>
      <HeaderLayout onClick={toggleHamburgerMenu} />
      <HamburgerMenu
        isHamburgerOpen={isHamburgerOpen}
        onClick={toggleHamburgerMenu}
      />
    </>
  );
};
