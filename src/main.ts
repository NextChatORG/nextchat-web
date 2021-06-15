import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'

// TODO(jheysondev): the way font awesome is used here is horrible because it increases the size of the vendor too much, implement a better way to use font awesome before the first web launch
library.add(fas, fab, far)

createApp(App)
  .use(router)
  .use(createHead())
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
