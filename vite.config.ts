import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Rhiley/' : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'public/pictures/*', dest: 'docs/pictures' }
      ],
      hook: 'writeBundle'
    })
  ]
}));
