import App from './App.vue'
import viteSSR from 'vite-ssr'
import routes from './routes'
import { createHead, Head } from '@vueuse/head'

export default viteSSR(App, { routes }, ({ app }) => {
  const head = createHead()
  app.use(head)
  app.component(Head.name, Head)

  return { head }
})
