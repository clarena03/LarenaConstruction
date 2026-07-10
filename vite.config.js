import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the built files work on both the custom domain
  // and the GitHub Pages subpath (clarena03.github.io/LarenaConstruction)
  base: './',
})
