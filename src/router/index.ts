import { createRouter, createWebHistory } from 'vue-router'
import PhotosViewVue from '../views/PhotosView.vue'
import AboutViewVue from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosViewVue
    }
  ]
})

export default router
