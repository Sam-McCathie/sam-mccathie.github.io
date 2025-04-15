import { DownloadSVG, EmailSVG, GitHubSVG, LinkedInSVG } from "@svgs";
import { Button } from "@components";
import React from "react";

export const LogoLinks = () => {
  return (
    <div className="logo-links">
      <a
        href="https://www.linkedin.com/in/sam-mccathie-nz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInSVG />
      </a>
      <a
        href="https://github.com/Sam-McCathie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSVG />
      </a>
      <Button
        svg={<LinkedInSVG />}
        ariaLabel="Open LinkedIn"
        onClick={() => alert("LinkedIn clicked")}
      />
      <Button
        svg={<GitHubSVG />}
        ariaLabel="Open GitHub"
        onClick={() => alert("GitHub clicked")}
      />
      <Button
        svg={<EmailSVG />}
        ariaLabel="Open EmailSVG"
        onClick={() => alert("Email clicked")}
      />
      <Button
        svg={<DownloadSVG />}
        ariaLabel="Open Download"
        onClick={() => alert("LinkedIn clicked")}
      />
    </div>
  );
};
