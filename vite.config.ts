import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works from the GitHub Pages project subpath.
  base: './',
  plugins: [react(), tailwindcss()],
})
