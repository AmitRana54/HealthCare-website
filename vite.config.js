import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Explicitly configure Vite to handle SVG files
  optimizeDeps: {
    include: ['@svgr/webpack'],
  },
});
