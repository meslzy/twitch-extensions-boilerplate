import {defineConfig} from "vite";

import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import zipPack from "vite-plugin-zip-pack";

import path from "path";

const cwd = process.cwd();

export default defineConfig({
  base: "./",
  publicDir: path.join(cwd, "public"),
  root: path.join(cwd, "source"),
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        config: path.join(cwd, "source/config.html"),
        panel: path.join(cwd, "source/panel.html"),
        mobile: path.join(cwd, "source/mobile.html"),
        video_overlay: path.join(cwd, "source/video_overlay.html"),
        video_component: path.join(cwd, "source/video_component.html"),
      },
      output: {
        dir: path.join(cwd, "dist"),
      },
    },
  },
  server: {
    port: 8080,
    strictPort: true,
  },
  plugins: [
    mkcert(),
    react(),
    tsconfigPaths({
      root: cwd,
    }),
    zipPack({
      inDir: path.join(cwd, "dist"),
      outDir: path.join(cwd, "dist"),
    }),
  ],
});
