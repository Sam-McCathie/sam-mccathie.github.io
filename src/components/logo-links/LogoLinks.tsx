import { EmailSVG, GitHubSVG, LinkedInSVG } from "@svgs";
import React from "react";
import "./LogoLinks.css";

export const LogoLinks = () => {
  return (
    <div className="logo-links">
      <a
        className="hover-animate"
        href="https://www.linkedin.com/in/sam-mccathie-nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInSVG />
      </a>
      <a
        className="hover-animate"
        href="https://github.com/Sam-McCathie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSVG />
      </a>
      <a
        className="hover-animate"
        href="mailto:dev.sammccathie@gmail.com?subject=Hello%20Sam!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send an email to Sam McCathie"
      >
        <EmailSVG />
      </a>
    </div>
  );
};
