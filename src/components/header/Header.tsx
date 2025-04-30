import { Section } from "@types";
import React, { useEffect, useState } from "react";
import { HamburgerMenu, HeaderLayout } from "./components";
import "./Header.css";
import { generateNavSections } from "./helpers";

export const Header = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    setSections(generateNavSections());
  }, []);

  const props = {
    isHamburgerOpen,
    sections,
    onClick: toggleHamburgerMenu,
  };

  return (
    <>
      <HeaderLayout {...props} />
      <HamburgerMenu {...props} />
    </>
  );
};
