import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD:vue-project/src/router/index.js
=======
import HomeView from '../views/HomeView.vue'
import signUp from '../components/SignUp.vue'
import signIn from '../components/SignIn.vue'
>>>>>>> peng:sql-project/src/router/index.js

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    {
<<<<<<< HEAD:vue-project/src/router/index.js
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
=======
      path: '/SignIn',
      name: 'Signin',
      component: signIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
>>>>>>> peng:sql-project/src/router/index.js
    }
  ]
})

export default router
