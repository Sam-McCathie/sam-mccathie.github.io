import { type HeadFC } from "gatsby";
import * as React from "react";
import { Button } from "../components";
import { LinkedInSVG } from "../images";
import { useTheme } from "../context";

const IndexPage = () => {
  // const { theme } = useTheme();

  const handleClick = () => {
    // console.log(theme);
  };

  return (
    <main>
      <h1>Home</h1>
      <Button
        onClick={handleClick}
        ariaLabel={"testing label"}
        svg={<LinkedInSVG className="linked-in" />}
      />

      <Button text="Test" onClick={handleClick} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
