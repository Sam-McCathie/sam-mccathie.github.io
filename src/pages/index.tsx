import { type HeadFC } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
