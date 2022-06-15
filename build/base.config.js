import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../packages")
    }
  },
})
