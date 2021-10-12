import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/contacts/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
