import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, './src') },
      { find: '~@', replacement: path.join(__dirname, './src/assets') },
    ],
  },
  plugins: [vue()],
})
