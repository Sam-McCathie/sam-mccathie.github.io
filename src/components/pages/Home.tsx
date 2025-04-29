import React from "react";
import { useTheme } from "@context";
import {
  About,
  Header,
  Skills,
  Experience,
  ScrollUp,
  Footer,
} from "@components";

/* Update location in future*/
export const Home = () => {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <Header />
      <About />
      <Skills />
      <Experience />
      <ScrollUp />
      <Footer />
    </main>
  );
};
