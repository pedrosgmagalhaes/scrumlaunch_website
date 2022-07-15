import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bbf4eab = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2739f9b4 = () => interopDefault(import('..\\pages\\campus-reel-case-study.vue' /* webpackChunkName: "pages/campus-reel-case-study" */))
const _061a5380 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _9ce3a7fe = () => interopDefault(import('..\\pages\\fgn-case-study.vue' /* webpackChunkName: "pages/fgn-case-study" */))
const _022af906 = () => interopDefault(import('..\\pages\\full-court-ai-case-study.vue' /* webpackChunkName: "pages/full-court-ai-case-study" */))
const _27024b5f = () => interopDefault(import('..\\pages\\helmm-case-study.vue' /* webpackChunkName: "pages/helmm-case-study" */))
const _2929e9da = () => interopDefault(import('..\\pages\\leadership.vue' /* webpackChunkName: "pages/leadership" */))
const _5d24fbaa = () => interopDefault(import('..\\pages\\process.vue' /* webpackChunkName: "pages/process" */))
const _fbf6d9ac = () => interopDefault(import('..\\pages\\quiz.vue' /* webpackChunkName: "pages/quiz" */))
const _136ab26d = () => interopDefault(import('..\\pages\\referral-partner.vue' /* webpackChunkName: "pages/referral-partner" */))
const _29343fc7 = () => interopDefault(import('..\\pages\\remote-developer-jobs\\index.vue' /* webpackChunkName: "pages/remote-developer-jobs/index" */))
const _9a73e14c = () => interopDefault(import('..\\pages\\scope-case-study.vue' /* webpackChunkName: "pages/scope-case-study" */))
const _4b964cda = () => interopDefault(import('..\\pages\\send-cv.vue' /* webpackChunkName: "pages/send-cv" */))
const _2c68a39a = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _58b04206 = () => interopDefault(import('..\\pages\\vesta-case-study.vue' /* webpackChunkName: "pages/vesta-case-study" */))
const _7b230c34 = () => interopDefault(import('..\\pages\\work.vue' /* webpackChunkName: "pages/work" */))
const _17e47046 = () => interopDefault(import('..\\pages\\hire-developers\\_specialization.vue' /* webpackChunkName: "pages/hire-developers/_specialization" */))
const _743cf1c3 = () => interopDefault(import('..\\pages\\remote-developer-jobs\\_vacancy_slug.vue' /* webpackChunkName: "pages/remote-developer-jobs/_vacancy_slug" */))
const _22fec2a2 = () => interopDefault(import('..\\pages\\locations\\_state_slug\\_city_slug.vue' /* webpackChunkName: "pages/locations/_state_slug/_city_slug" */))
const _19fde038 = () => interopDefault(import('..\\pages\\blog\\_.vue' /* webpackChunkName: "pages/blog/_" */))
const _1cdf494d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d20f084c = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _1bbf4eab,
    name: "blog"
  }, {
    path: "/campus-reel-case-study",
    component: _2739f9b4,
    name: "campus-reel-case-study"
  }, {
    path: "/contact-us",
    component: _061a5380,
    name: "contact-us"
  }, {
    path: "/fgn-case-study",
    component: _9ce3a7fe,
    name: "fgn-case-study"
  }, {
    path: "/full-court-ai-case-study",
    component: _022af906,
    name: "full-court-ai-case-study"
  }, {
    path: "/helmm-case-study",
    component: _27024b5f,
    name: "helmm-case-study"
  }, {
    path: "/leadership",
    component: _2929e9da,
    name: "leadership"
  }, {
    path: "/process",
    component: _5d24fbaa,
    name: "process"
  }, {
    path: "/quiz",
    component: _fbf6d9ac,
    name: "quiz"
  }, {
    path: "/referral-partner",
    component: _136ab26d,
    name: "referral-partner"
  }, {
    path: "/remote-developer-jobs",
    component: _29343fc7,
    name: "remote-developer-jobs"
  }, {
    path: "/scope-case-study",
    component: _9a73e14c,
    name: "scope-case-study"
  }, {
    path: "/send-cv",
    component: _4b964cda,
    name: "send-cv"
  }, {
    path: "/services",
    component: _2c68a39a,
    name: "services"
  }, {
    path: "/vesta-case-study",
    component: _58b04206,
    name: "vesta-case-study"
  }, {
    path: "/work",
    component: _7b230c34,
    name: "work"
  }, {
    path: "/hire-developers/:specialization?",
    component: _17e47046,
    name: "hire-developers-specialization"
  }, {
    path: "/remote-developer-jobs/:vacancy_slug?",
    component: _743cf1c3,
    name: "remote-developer-jobs-vacancy_slug"
  }, {
    path: "/locations/:state_slug?/:city_slug?",
    component: _22fec2a2,
    name: "locations-state_slug-city_slug"
  }, {
    path: "/blog/*",
    component: _19fde038,
    name: "blog-all"
  }, {
    path: "/",
    component: _1cdf494d,
    name: "index"
  }, {
    path: "/*",
    component: _d20f084c,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
