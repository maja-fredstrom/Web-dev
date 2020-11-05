import Vue from 'vue'
import VueRouter from 'vue-router'
import Subscriptions from '../views/Subscriptions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Subscribe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
