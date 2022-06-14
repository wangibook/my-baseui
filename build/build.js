import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
export default defineConfig({
  base: '/my-baseui/',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  }
});
