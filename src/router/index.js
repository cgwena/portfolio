import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404,
    }
  ]
})

export default router