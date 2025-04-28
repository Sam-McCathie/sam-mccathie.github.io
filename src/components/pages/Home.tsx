import React from "react";
import { useTheme } from "@context";
import { About, Header, Skills, Experience, ReturnToTop } from "@components";

/* Update location in future*/
export const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <Header />
      <About />
      <Skills />
      <Experience />
      <ReturnToTop />
    </main>
  );
};
