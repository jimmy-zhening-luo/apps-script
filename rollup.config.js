import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"];

export default {
  input: "./src/main.ts",
  output: {
    file: "./build/main.js",
    format: "cjs",
  },
  plugins: [
    () => ({
      name: "no-treeshake",
      resolveId(id, importer) {
        return !importer
          ? {
              id,
              moduleSideEffects: "no-treeshake",
            }
          : null;
      },
    }),
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: "runtime",
    }),
  ],
};
