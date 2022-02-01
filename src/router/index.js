import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Leadership from '../views/Leadership.vue'
import ContactUs from '../views/ContactUs.vue'
import Work from '../views/Work.vue'
import Process from '../views/Process.vue'
import FamilyGameNightCaseStudy from '../views/FamilyGameNightCaseStudy.vue'
import HarvestCaseStudy from '../views/HarvestCaseStudy.vue'
import FullCourtAiCaseStudy from '../views/FullCourtAiCaseStudy.vue'
import ScopeCaseStudy from '../views/ScopeCaseStudy.vue'
import HelmmCaseStudy from '../views/HelmmCaseStudy.vue'
import VestaCaseStudy from '../views/VestaCaseStudy.vue'
import Services from '../views/Services.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import Seo from '../views/Seo.vue'
import ProgLang from '../views/ProgLang2.vue'

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
		path: '/fgn-case-study',
		name: 'FamilyGameNightCaseStudy',
		component: FamilyGameNightCaseStudy
	},
	{
		path: '/harvest-case-study',
		name: 'HarvestCaseStudy',
		component: HarvestCaseStudy
	},
	{
		path: '/full-court-ai-case-study',
		name: 'FullCourtAiCaseStudy',
		component: FullCourtAiCaseStudy
	},
	{
		path: '/scope-case-study',
		name: 'ScopeCaseStudy',
		component: ScopeCaseStudy
	},
	{
		path: '/helmm-case-study',
		name: 'HelmmCaseStudy',
		component: HelmmCaseStudy
	},
	{
		path: '/vesta-case-study',
		name: 'VestaCaseStudy',
		component: VestaCaseStudy
	},
	{
		path: '/services',
		name: 'Services',
		component: Services
	},
	{
		path: '/blog',
		name: 'ArticlesAll',
		component: Articles
	},
	{
		path: '/blog/category/:cat_id',
		name: 'Articles',
		component: Articles
	},
	{
		path: '/blog/:slug',
		name: 'Article',
		component: Article 
	},
	{
		path: '/seo/:pathMatch(.*)*',
		name: 'Seo',
		component: Seo
	},
	{
		path: '/hire-developers/:prog_lang',
		name: 'ProgLang',
		component: ProgLang
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: { name: 'Home' }
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
