import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../views/Presentation.vue'
import Projets from '../views/Projets.vue'
import Formulaire from '../views/Formulaire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation,
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets,
    },
    {
      path: '/form',
      name:'form',
      component: Formulaire,
    }
  ]
})

export default router