import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Contact from './views/Contact.vue'
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
      path: '/game',
      name: 'game',
      component: Game,
      meta: {
        requiresAuth: true
      }
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
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
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
