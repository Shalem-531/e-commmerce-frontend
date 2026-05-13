import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {

      // 🔐 Auth backend
      '/api/users': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },

      // 🛒 Ecommerce backend
      '/api': {
        target: 'http://localhost:7000',
        changeOrigin: true
      },

      // 🖼 Images
      '/images': {
        target: 'http://localhost:7000',
        changeOrigin: true
      }

    }
  }
})