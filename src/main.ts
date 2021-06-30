// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import App from './App.vue'
import routes from './routes'
import viteSSR from 'vite-ssr'
import { createHead } from '@vueuse/head'

export default viteSSR(App, { routes }, ({ app }) => {
  const head = createHead()
  app.use(head)
})
