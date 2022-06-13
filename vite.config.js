import { defineConfig } from 'vite'
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
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        }
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "my-baseui",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      '~': resolve(__dirname, "packages")
    }
  },
})
