import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import {fb, db} from '../firebase-config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
    path: '/',
    redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
      {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
});
router.beforeEach((to, from, next) => {

  const currentUser = fb.auth().currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else if (currentUser) {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

export default router;