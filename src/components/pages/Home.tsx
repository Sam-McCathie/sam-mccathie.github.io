import React, { useEffect, useState } from "react";
import { useTheme } from "@context";
import {
  About,
  Header,
  Skills,
  Experience,
  ScrollUp,
  Footer,
  HamburgerMenu,
} from "@components";
import { Section } from "@types";
import { generateNavSections } from "@helpers";

/* Update location in future*/
export const Home = () => {
  const { theme } = useTheme();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    setSections(generateNavSections());
  }, []);

  return (
    <main className={theme}>
      <Header toggleHamburgerMenu={toggleHamburgerMenu} sections={sections} />
      <HamburgerMenu
        isOpen={isHamburgerOpen}
        closeMenu={toggleHamburgerMenu}
        sections={sections}
      />
      <About />
      <Skills />
      <Experience />
      <ScrollUp />
      <Footer />
    </main>
  );
};
