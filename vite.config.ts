import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [viteSSR(), vue(), legacy()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '~', replacement: path.resolve(__dirname, './src') },
      { find: '~@', replacement: path.resolve(__dirname, './src/assets') },
    ],
  },
})
