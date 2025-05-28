import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Rhiley/' : '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'public/pictures', dest: 'docs' }  // public/pictures → docs/pictures にコピー
          ],
          hook: 'writeBundle' // 書き出し完了後に実行
        })
      ]
    }
  },
  plugins: [react()],
}));
