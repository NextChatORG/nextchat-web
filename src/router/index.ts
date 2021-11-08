import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: () => import('../pages/HomePage.vue') },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
