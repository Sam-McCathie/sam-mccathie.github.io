import React from "react";
import { useTheme } from "../../context";
import { Button } from "../button";

export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <main className={theme}>
      <h1>Home</h1>
      <Button onClick={handleClick} text="Toggle Theme" />
    </main>
  );
};
