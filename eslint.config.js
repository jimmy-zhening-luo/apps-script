import linted from "linted";

export default linted({
  js: {
    rules: {
      "no-unused-vars": 0,
    },
  },
  ts: {
    rules: {
      "@typescript-eslint/no-unused-vars": 0,
    },
  },
});
