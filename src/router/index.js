import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Leadership from '../views/Leadership.vue'
import ContactUs from '../views/ContactUs.vue'
import Process from '../views/Process.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leadership',
    name: 'Leadership',
    component: Leadership
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/process',
    name: 'Process',
    component: Process
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
