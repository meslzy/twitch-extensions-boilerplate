import {defineConfig} from "vite";

import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import zipPack from "vite-plugin-zip-pack";

import path from "path";

export default defineConfig({
  base: "./",
  publicDir: path.join(process.cwd(), "public"),
  root: path.join(process.cwd(), "source"),
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        config: path.join(process.cwd(), "source/config.html"),
        panel: path.join(process.cwd(), "source/panel.html"),
        mobile: path.join(process.cwd(), "source/mobile.html"),
        video_overlay: path.join(process.cwd(), "source/video_overlay.html"),
        video_component: path.join(process.cwd(), "source/video_component.html"),
      },
      output: {
        dir: path.join(process.cwd(), "dist"),
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
      root: process.cwd(),
    }),
    zipPack({
      inDir: path.join(process.cwd(), "dist"),
      outDir: path.join(process.cwd(), "dist"),
    }),
  ],
});
