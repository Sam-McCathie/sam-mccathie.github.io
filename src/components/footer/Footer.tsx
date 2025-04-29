import React from "react";
import { LogoLinks } from "@components";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <LogoLinks />
      <a
        href="https://github.com/Sam-McCathie/sam-mccathie.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >{`<Source Code />`}</a>
    </footer>
  );
};
