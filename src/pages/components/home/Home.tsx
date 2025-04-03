import React from "react";
import { useTheme } from "@context";
import { Header } from "@components";

// TODO: Move this to a components folder under pages
export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <main className={theme}>
      <Header />
      <h1>Home</h1>
    </main>
  );
};
