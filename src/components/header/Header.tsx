import React from "react";
import { ThemeToggle } from "./components";
import { NavButtons } from "./components/NavButtons";

export const Header = () => {
  return (
    <header>
      <h4>Sam McCathie</h4>
      <NavButtons />
      <ThemeToggle />
    </header>
  );
};
