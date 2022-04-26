import { createStore } from 'vuex'

import projects from './projects'
import team from './team'
import articles from './articles'
import vacancies from './vacancies'

export default createStore({

	state: {
	},

	mutations: {
	},

	actions: {
	},

	modules: {
		projects: projects,
		team: team,
		articles: articles,
		vacancies: vacancies,
	}
})
