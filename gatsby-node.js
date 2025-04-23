const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@svgs": path.resolve(__dirname, "src/svgs"),
        "@components": path.resolve(__dirname, "src/components"),
        "@context": path.resolve(__dirname, "src/context"),
        "@types": path.resolve(__dirname, "src/types"),
        "@data": path.resolve(__dirname, "src/data"),
      },
    },
  });
};
