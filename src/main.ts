import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createHead } from '@vueuse/head'

createApp(App).use(createHead()).use(router).mount('#app')
