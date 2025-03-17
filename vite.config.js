import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/MichaelStewart3252.github.io/',
  plugins: [vue()],
  server: {
    open: true // Optionally open the page automatically in your browser
  }
});