import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx', // Adjust paths as needed
      refresh: true,
    }),
    react(),
  ],
  server: {
    origin: 'http://localhost:5173',
    cors: true,
  },
  build: {
    outDir: 'public/build',
    manifest: true,    // Ensure manifest is generated
  },
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
});
