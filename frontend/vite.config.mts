import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy all /api requests to the backend
    },
  }
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   root: path.join(__dirname, 'src'),
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true, 
//   },
//   server: {
//     open: true, // Automatically open the browser
//     proxy: {
//       '/api': 'http://localhost:5000', // Proxy all /api requests to the backend}
//     },
//   },
// });
