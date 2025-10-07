import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite conexiones externas
    port: 8080,
    allowedHosts: [
      'lexical-web-lexicalweb.n3v9pm.easypanel.host',  // Tu dominio de Easypanel
      '.easypanel.host',  // Permite todos los subdominios de Easypanel
      'localhost',
    ]
  }
})