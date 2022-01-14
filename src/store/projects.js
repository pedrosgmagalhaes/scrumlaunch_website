export default {
	state: () => ({
		projects: [
			{
				url: 'HarvestCaseStudy',
				image: {full: 'harvest-preview-full.png', small: 'harvest-preview.png'},
				type: 'Web Application',
				year: '2021',
				name: 'Harvest',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'ScopeCaseStudy',
				image: {full: 'community_funded-preview-full.png', small: 'community_funded-preview.png'},
				type: 'Web Application',
				year: '2021',
				name: 'Community Funded',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'FullCourtAiCaseStudy',
				image: {full: 'full-court-preview-full.png', small: 'full-court-preview.png'},
				type: 'Mobile Application & Data Pipeline',
				year: '2021',
				name: 'Full Court AI',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'FamilyGameNightCaseStudy',
				image: {full: 'fgn-preview-full.png', small: 'fgn-preview.png'},
				type: 'Mobile Application',
				year: '2021',
				name: 'Seven: brain teasers & puzzles',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'HelmmCaseStudy',
				image: {full: 'helmm-preview-full.png', small: 'helmm-preview.png'},
				type: 'e-Commerce',
				year: '2021',
				name: 'Helmm',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'VestaCaseStudy',
				image: {full: 'vesta-preview-full.png', small: 'vesta-preview.png'},
				type: 'Web & Mobile Application',
				year: '2021',
				name: 'Vesta Home',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
		],
	}),

	mutations: {

	},

	actions: {

	},

	getters: {
		getAllProjects: state => {
			return state.projects
		},

		getMainPageProjects: state => {
			return state.projects.slice(0, 4)
		},
	}
}
