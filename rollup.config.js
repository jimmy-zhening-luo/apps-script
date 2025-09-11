import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"],
preventTreeShakingPlugin = () => (
  {
    name: "no-treeshaking",
    resolveId(id, importer) {
      if (!importer)
        return {
          id,
          moduleSideEffects: "no-treeshake",
        };

      return null;
    },
  }
);

export default {
  input: "./src/index.ts",
  output: {
    dir: "build",
    format: "cjs",
  },
  plugins: [
    preventTreeShakingPlugin(),
    nodeResolve(
      {
        extensions,
        mainFields: ["jsnext:main", "main"],
      },
    ),
    babel(
      {
        extensions,
        babelHelpers: "runtime",
      },
    ),
  ],
};
