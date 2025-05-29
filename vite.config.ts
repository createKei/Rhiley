import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Rhiley/' : '/',
  build: {
    outDir: 'docs',
    assetsDir: '.', // アセットを docs/ 直下に出力
  },
  plugins: [react()],
}));
