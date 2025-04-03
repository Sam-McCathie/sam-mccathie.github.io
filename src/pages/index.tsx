import React from "react";
import { type HeadFC } from "gatsby";
import { ThemeProvider } from "@context";
import { Home } from "./components";

const IndexPage = () => {
  /* For some reason, I cannot pass the provider in gatsby-browser, it should work but it doesn't :(
   * Will revist this later.
   */

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
