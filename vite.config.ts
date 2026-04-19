import { readFileSync } from "node:fs";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "node:path";
import type { Plugin } from "vite";

function emitTokensCss(): Plugin {
  return {
    name: "emit-tokens-css",
    generateBundle() {
      const source = readFileSync(
        resolve(__dirname, "src/tokens/tokens.css"),
        "utf-8"
      );
      this.emitFile({
        type: "asset",
        fileName: "tokens/tokens.css",
        source
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), libInjectCss(), emitTokensCss()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js"
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts"
  }
});
