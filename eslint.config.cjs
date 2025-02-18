const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat();

module.exports = [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
