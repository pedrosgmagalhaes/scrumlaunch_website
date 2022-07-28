import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13c73e28 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _757345d8 = () => interopDefault(import('../pages/campus-reel-case-study.vue' /* webpackChunkName: "pages/campus-reel-case-study" */))
const _d5f8dd9c = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _095d40b3 = () => interopDefault(import('../pages/fgn-case-study.vue' /* webpackChunkName: "pages/fgn-case-study" */))
const _ef955190 = () => interopDefault(import('../pages/full-court-ai-case-study.vue' /* webpackChunkName: "pages/full-court-ai-case-study" */))
const _714208de = () => interopDefault(import('../pages/helmm-case-study.vue' /* webpackChunkName: "pages/helmm-case-study" */))
const _8fd9b0e8 = () => interopDefault(import('../pages/leadership.vue' /* webpackChunkName: "pages/leadership" */))
const _19a1eb38 = () => interopDefault(import('../pages/process.vue' /* webpackChunkName: "pages/process" */))
const _5d5b0348 = () => interopDefault(import('../pages/quiz.vue' /* webpackChunkName: "pages/quiz" */))
const _98713ac2 = () => interopDefault(import('../pages/referral-partner.vue' /* webpackChunkName: "pages/referral-partner" */))
const _f4d589a8 = () => interopDefault(import('../pages/remote-developer-jobs/index.vue' /* webpackChunkName: "pages/remote-developer-jobs/index" */))
const _5322bf8c = () => interopDefault(import('../pages/scope-case-study.vue' /* webpackChunkName: "pages/scope-case-study" */))
const _d29c6dbe = () => interopDefault(import('../pages/send-cv.vue' /* webpackChunkName: "pages/send-cv" */))
const _86269f36 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _74048f2f = () => interopDefault(import('../pages/vesta-case-study.vue' /* webpackChunkName: "pages/vesta-case-study" */))
const _11bc6518 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _53afae74 = () => interopDefault(import('../pages/hire-developers/_specialization.vue' /* webpackChunkName: "pages/hire-developers/_specialization" */))
const _0872b828 = () => interopDefault(import('../pages/remote-developer-jobs/_vacancy_slug.vue' /* webpackChunkName: "pages/remote-developer-jobs/_vacancy_slug" */))
const _3a16a68f = () => interopDefault(import('../pages/locations/_state_slug/_city_slug.vue' /* webpackChunkName: "pages/locations/_state_slug/_city_slug" */))
const _7b0f8a0e = () => interopDefault(import('../pages/blog/_.vue' /* webpackChunkName: "pages/blog/_" */))
const _9162774a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1ce8a430 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

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
    component: _13c73e28,
    name: "blog"
  }, {
    path: "/campus-reel-case-study",
    component: _757345d8,
    name: "campus-reel-case-study"
  }, {
    path: "/contact-us",
    component: _d5f8dd9c,
    name: "contact-us"
  }, {
    path: "/fgn-case-study",
    component: _095d40b3,
    name: "fgn-case-study"
  }, {
    path: "/full-court-ai-case-study",
    component: _ef955190,
    name: "full-court-ai-case-study"
  }, {
    path: "/helmm-case-study",
    component: _714208de,
    name: "helmm-case-study"
  }, {
    path: "/leadership",
    component: _8fd9b0e8,
    name: "leadership"
  }, {
    path: "/process",
    component: _19a1eb38,
    name: "process"
  }, {
    path: "/quiz",
    component: _5d5b0348,
    name: "quiz"
  }, {
    path: "/referral-partner",
    component: _98713ac2,
    name: "referral-partner"
  }, {
    path: "/remote-developer-jobs",
    component: _f4d589a8,
    name: "remote-developer-jobs"
  }, {
    path: "/scope-case-study",
    component: _5322bf8c,
    name: "scope-case-study"
  }, {
    path: "/send-cv",
    component: _d29c6dbe,
    name: "send-cv"
  }, {
    path: "/services",
    component: _86269f36,
    name: "services"
  }, {
    path: "/vesta-case-study",
    component: _74048f2f,
    name: "vesta-case-study"
  }, {
    path: "/work",
    component: _11bc6518,
    name: "work"
  }, {
    path: "/hire-developers/:specialization?",
    component: _53afae74,
    name: "hire-developers-specialization"
  }, {
    path: "/remote-developer-jobs/:vacancy_slug?",
    component: _0872b828,
    name: "remote-developer-jobs-vacancy_slug"
  }, {
    path: "/locations/:state_slug?/:city_slug?",
    component: _3a16a68f,
    name: "locations-state_slug-city_slug"
  }, {
    path: "/blog/*",
    component: _7b0f8a0e,
    name: "blog-all"
  }, {
    path: "/",
    component: _9162774a,
    name: "index"
  }, {
    path: "/*",
    component: _1ce8a430,
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
