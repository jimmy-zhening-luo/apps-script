import linted from "linted";

export default linted({
  js: {
    rules: {
      "no-undef": 0,
      "no-unused-vars": 0,
    },
  },
  ts: {
    rules: {
      "@typescript-eslint/no-unused-vars": 0,
    },
  },
});
