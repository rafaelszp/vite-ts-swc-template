import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    react()
  ],
  resolve: {
    preserveSymlinks: true
  }
})
