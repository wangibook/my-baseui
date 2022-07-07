import baseConfig from './base.config';
import { defineConfig } from 'vite';
import externalGlobals from 'rollup-plugin-external-globals';

export default defineConfig({
  ...baseConfig,
  base: '/my-baseui/',
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'highlight.js': 'highlight.js'
        }),
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        globals: {
          vue: 'Vue',
          'highlight.js': 'highlight.js'
        },
      }
    }
  },
});
