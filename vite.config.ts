import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Добавили импорт

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- Наш алиас
    },
  },
  server: {
    proxy: { '/api': 'http://localhost:3000' },
  },
})