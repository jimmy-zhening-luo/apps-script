import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const extensions = [".ts"];

export default {
  input: "./src/main.ts",
  output: {
    dir: "build",
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
