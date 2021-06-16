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

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
})

createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
