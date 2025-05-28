import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rhiley.profile/', // ← GitHub Pages のパスを追加
  build: {
    outDir: 'docs', // ← 出力先を docs に（GitHub Pages 用）
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
