import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: path.resolve(__dirname, '../public'),
  base: '/paris-hotels-mobile/',
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
});
