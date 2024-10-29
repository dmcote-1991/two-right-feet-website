import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: alias '@' to '/src/ for easier imports
    },
  },
  server: {
    open: true, // Automatically open the browser
  },
});
