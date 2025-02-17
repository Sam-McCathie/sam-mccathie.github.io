import { Link, type HeadFC } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to="/test">Go home</Link>.
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
