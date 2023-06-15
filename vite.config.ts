import { defineConfig } from "vite";

import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
  },
  plugins: [
    mkcert(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      input: {
        config: "config.html",
        mobile: "mobile.html",
        panel: "panel.html",
      },
      output: {
        dir: "dist",
      },
    },
  },
});
