import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    "/api": {
      target: "https://backend-2xgo.onrender.com/",
      changeOrigin: true,
    }
  }}
})
