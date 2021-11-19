import { createStore } from 'vuex'

import projects from './projects'
import team from './team'

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
	}
})
