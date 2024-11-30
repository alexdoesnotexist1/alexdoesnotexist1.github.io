import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-react-app/',
  build: {
    outDir: 'dist',            // The build folder that will be deployed
  },
  plugins: [react()],
})
