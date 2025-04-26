import React from "react";
import { useTheme } from "@context";
import { About, Header, Skills, Experience } from "@components";

/* Update location in future*/
export const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <Header />
      <About />
      <Experience />
      <Skills />
    </main>
  );
};
