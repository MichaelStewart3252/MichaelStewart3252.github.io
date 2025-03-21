import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import the path module

export default defineConfig({
  base: '/michaelstewart3252.github.io/', // Update this if your repo name is different
  plugins: [vue()],
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), 
      },
    },
  },
});