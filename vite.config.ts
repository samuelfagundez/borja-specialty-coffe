import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/borja-specialty-coffe/
const BASE = process.env.VITE_BASE ?? '/borja-specialty-coffe/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
