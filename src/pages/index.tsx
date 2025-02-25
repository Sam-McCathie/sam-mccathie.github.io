import { type HeadFC } from "gatsby";
import * as React from "react";
import { Button } from "../components";
import { LinkedInSVG } from "../images";

const IndexPage = () => {
  const handleClick = () => {
    console.log("Skrrt");
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
