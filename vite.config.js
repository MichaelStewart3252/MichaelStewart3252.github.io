import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import postcssNormalize from 'postcss-normalize'
import postcssFontMagician from 'postcss-font-magician'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    }),
    vueDevTools(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        postcssNormalize({
          forceImport: true,
          allowDuplicates: false
        }),
        postcssFontMagician({
          display: 'swap',
          foundries: 'google'
        })
      ]
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    }
  }
})