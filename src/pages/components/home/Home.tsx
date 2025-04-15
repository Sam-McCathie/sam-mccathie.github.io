import React from "react";
import { useTheme } from "@context";
import { About, Header } from "@components";
import "./Home.css";

// TODO: Move this to a components folder under pages
export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <main className={theme}>
      <Header />
      <About />
    </main>
  );
};
