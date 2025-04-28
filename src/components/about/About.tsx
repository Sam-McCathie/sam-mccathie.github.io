import React from "react";
import { Profile } from "./components/Profile";
import "./About.css";

export const About = () => {
  return (
    <div id="about">
      <div className="headline">
        <h1>1% Better Every Day</h1>
        <Profile />
      </div>
      <p>
        I’m a software engineer with expertise in React and TypeScript, skilled
        in adapting to new technologies and solving complex challenges. I excel
        at collaboration, clear communication, and delivering practical
        solutions. I am eager to contribute to innovation and grow with a
        dynamic team.
      </p>
    </div>
  );
};
