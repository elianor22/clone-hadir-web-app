import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@layouts', replacement: path.resolve(__dirname, './src/layouts') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@interfaces', replacement: path.resolve(__dirname, './src/interfaces') },
    ],
  },
})
