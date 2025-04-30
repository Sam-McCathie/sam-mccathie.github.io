import {
  About,
  Experience,
  Footer,
  Header,
  ScrollUp,
  Skills,
} from "@components";
import { useTheme } from "@context";
import React from "react";

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
