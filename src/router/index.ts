import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotosView.vue')
    },
    {
      path: '/instagram',
      beforeEnter() {
        location.href = 'http://www.instagram.com/plesk0t'
      },
      component: () => null
    }
  ]
})

export default router
