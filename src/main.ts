import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'

// TODO(jheysondev): the way font awesome is used here is horrible because it increases the size of the vendor too much, implement a better way to use font awesome before the first web launch
library.add(fas, fab, far)

const head = createHead()

let i18nLocale = 'en'

for (const locale in messages) {
  if (localStorage.getItem('locale') == locale) {
    i18nLocale = localStorage.getItem('locale') || i18nLocale
  } else if (navigator.language == locale) {
    i18nLocale = navigator.language
  } else if (navigator.language.split('-')[0] == locale) {
    i18nLocale = navigator.language.split('-')[0]
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: i18nLocale,
  fallbackLocale: 'en',
  messages,
})

createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
