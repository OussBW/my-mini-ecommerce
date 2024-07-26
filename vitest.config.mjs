import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: "v8",
        reporter: ["html", "json", "text"],
      },
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  })
);
