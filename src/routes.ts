import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: () => import('@/pages/HomePage.vue') },
  { name: 'SignIn', path: '/signin', component: () => import('@/pages/SignInPage.vue') },
]

export default routes
