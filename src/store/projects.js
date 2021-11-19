export default {
	state: () => ({
		projects: [
			{
				url: 'HarvestCaseStudy',
				image: {full: 'harvest-preview-full.png', small: 'harvest-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Harvest',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'ScopeCaseStudy',
				image: {full: 'scope-preview-full.png', small: 'scope-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Scope',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'FullCourtAiCaseStudy',
				image: {full: 'full-court-preview-full.png', small: 'full-court-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Full court ai',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'FamilyGameNightCaseStudy',
				image: {full: 'fgn-preview-full.png', small: 'fgn-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Family game night',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'HelmmCaseStudy',
				image: {full: 'helmm-preview-full.png', small: 'helmm-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Helmm',
				tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
			},
			{
				url: 'VestaCaseStudy',
				image: {full: 'vesta-preview-full.png', small: 'vesta-preview.png'},
				type: 'Mobile app',
				year: '2021',
				name: 'Vesta',
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
		}
	}
}
