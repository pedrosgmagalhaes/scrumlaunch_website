export const state = () => ({
  projects: [
    // {
    // 	url: '/harvest-case-study',
    // 	image: {full: 'harvest-preview-full.png', small: 'harvest-preview.png'},
    // 	type: 'Web Application',
    // 	year: '2021',
    // 	name: 'Harvest',
    // 	tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    // },
    {
      url: '/campus-reel-case-study',
      image: {
        full: 'campus-reel-preview-full.png',
        small: 'campus-reel-preview.png',
      },
      type: 'Web Application',
      year: '2021',
      name: 'CampusReel',
      tags: ['Design', 'Frontend', 'Backend'],
    },
    {
      url: '/scope-case-study',
      image: {
        full: 'community_funded-preview-full.png',
        small: 'community_funded-preview.png',
      },
      type: 'Web Application',
      year: '2021',
      name: 'Community Funded',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/full-court-ai-case-study',
      image: {
        full: 'full-court-preview-full.png',
        small: 'full-court-preview.png',
      },
      type: 'Mobile Application & Data Pipeline',
      year: '2021',
      name: 'Full Court AI',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/fgn-case-study',
      image: { full: 'fgn-preview-full.png', small: 'fgn-preview.png' },
      type: 'Mobile Application',
      year: '2021',
      name: 'Seven: brain teasers & puzzles',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/helmm-case-study',
      image: { full: 'helmm-preview-full.png', small: 'helmm-preview.png' },
      type: 'e-Commerce',
      year: '2021',
      name: 'Helmm',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
    {
      url: '/vesta-case-study',
      image: { full: 'vesta-preview-full.png', small: 'vesta-preview.png' },
      type: 'Web & Mobile Application',
      year: '2021',
      name: 'Vesta Home',
      tags: ['Design', 'Frontend', 'Backend', 'QA', 'Support'],
    },
  ],
})

export const getters = {
  getAllProjects: (state) => {
    return state.projects
  },

  getMainPageProjects: (state) => {
    return state.projects.slice(0, 4)
  },
}
