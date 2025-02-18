import "./src/styles/global.css";

// Add provider/s later
const wrapRootElement = ({ children }) => {
  return { children };
};

// Syntax required by gatsby browser api - don't export pls
wrapRootElement;
