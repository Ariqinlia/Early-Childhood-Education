import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home')
    },
    {
      path: '/commu',
      name: 'communication',
      component: () => import('@/components/communication')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/components/question')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/components/details')
    },
    {
      path: '/info',
      name: 'information',
      component: () => import('@/components/information')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/components/product')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/Register.vue')
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('@/components/userCenter.vue')
    }
  ]
})
