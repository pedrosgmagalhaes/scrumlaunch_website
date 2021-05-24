import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Leadership from '../views/Leadership.vue'
import ContactUs from '../views/ContactUs.vue'
import Work from '../views/Work.vue'
import Process from '../views/Process.vue'
import CaseStudy from '../views/CaseStudy.vue'

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
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/case-study',
    name: 'CaseStudy',
    component: CaseStudy
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

export default router
