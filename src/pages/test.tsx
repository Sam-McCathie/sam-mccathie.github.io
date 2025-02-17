import * as React from "react";

import { HeadFC, Link } from "gatsby";

const TestPage = () => {
  return (
    <main>
      <h1>Test</h1>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default TestPage;

export const Head: HeadFC = () => <title>Test Page</title>;
