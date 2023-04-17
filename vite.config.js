import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/MyMap/' : '/',
  build: {
    rollupOptions: {
      entryFileNames: 'mapViewDeps.js',
      chunkFileNames: 'mapViewDeps.js'
    }
  }
})
