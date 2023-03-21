import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "./",
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/index.tsx",
      output: {
        entryFileNames: "main.js",
      }
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
});