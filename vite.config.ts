import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: true,
    host: "0.0.0.0",
  },
  preview: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
