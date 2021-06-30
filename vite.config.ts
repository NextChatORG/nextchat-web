import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin' 
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, './src') },
      { find: '~@', replacement: path.join(__dirname, './src/assets') },
    ],
  },
  plugins: [viteSSR(), vue()]
})
