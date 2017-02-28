import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import {createWorkarea} from 'views/Factory'

import { Auth } from 'services'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (!Auth.isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullpath }
    })
  } else {
    next()
  }
}

const logout = (to, from, next) => {
  Auth.logout()
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: createWorkarea('Dashboard'),
      beforeEnter: requireAuth
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/logout',
      beforeEnter: logout
    }, {
      path: '/register',
      name: 'Register',
      component: createWorkarea('Register'),
      beforeEnter: requireAuth
    }, {
      path: '/listItems',
      name: 'ListItems',
      component: createWorkarea('ListItems'),
      beforeEnter: requireAuth
    }, {
      path: '/createItem',
      name: 'CreateItem',
      component: createWorkarea('CreateItem'),
      beforeEnter: requireAuth
    }, {
      path: '/editItem/:id',
      name: 'EditItem',
      component: createWorkarea('EditItem'),
      beforeEnter: requireAuth
    }, {
      path: '/*',
      name: 'Not Found',
      component: createWorkarea('NotFound')
    }
  ]
})
