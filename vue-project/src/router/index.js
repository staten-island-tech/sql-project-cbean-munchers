import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/SignUpPage',
      name: 'SignUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/SignInPage',
      name: 'SignInPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignInPage.vue')
    }
  ]
})

export default router
