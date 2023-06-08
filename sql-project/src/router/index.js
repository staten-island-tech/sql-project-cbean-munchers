import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signUp from '../components/SignUp.vue'
import signIn from '../components/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signin',
      component: signIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
    }
  ]
})

export default router
