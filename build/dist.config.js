import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
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
  }
});