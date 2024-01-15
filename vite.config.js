import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.JPEG/*.otf", "**/*.PNG"],
  plugins: [react()],
  base: "/personal-website/",
});
