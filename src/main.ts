import App from '@/App.vue'
import viteSSR from 'vite-ssr'
import routes from '@/routes'
import { createHead, Head } from '@vueuse/head'
import LandingLayout from '@/layouts/landing.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default viteSSR(App, { routes }, ({ app }) => {
  // Head
  const head = createHead()
  app.use(head)
  app.component(Head.name, Head)

  // Layouts
  app.component('LandingLayout', LandingLayout)

  // Font FontAwesome
  library.add(faEye, faEyeSlash)
  app.component('fa-icon', FontAwesomeIcon)

  return { head }
})