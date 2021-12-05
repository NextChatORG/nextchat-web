import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: () => import('@/pages/HomePage.vue') },
]

export default routes
