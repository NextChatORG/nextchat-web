import vueI18n from '@intlify/vite-plugin-vue-i18n'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, './src') },
      { find: '~@', replacement: path.join(__dirname, './src/assets') },
    ],
  },
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
})
