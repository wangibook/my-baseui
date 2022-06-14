import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/my-baseui/',
  build: {
    outDir: 'docs',
  },
});
