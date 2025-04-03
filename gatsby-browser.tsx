import "./src/styles/global.css";

// @ts-ignore
export const wrapRootElement = ({ children }) => {
  return children;
};

// wrapRootElement; <- previously I just had this line here and didn't have the export above.
// either way doesn't allow you to pass children props while wrapped in brackets
// Note - I have tried adding gatsby SSR but it still doesn't work.
