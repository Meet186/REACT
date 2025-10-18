import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    historyApiFallback: true,  // 👈 This ensures SPA routing works during dev
  },
  preview: {
    historyApiFallback: true,  // 👈 For `vite preview`
  }
})
