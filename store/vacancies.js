function make_slug(name, jobLocation) {
  const slug = name + '-' + jobLocation

  return `/remote-developer-jobs/${slug.replace(/\s+/g, '-').toLowerCase()}`
}

export const state = () => ({
  vacancies: [
    {
      name: 'PHP',
      jobLocation: 'Brazil',
      remote: true,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'React JS',
      jobLocation: 'Ukraine',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Django',
      jobLocation: 'Ukraine',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Java',
      jobLocation: 'Ukraine',
      remote: true,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'iOS',
      jobLocation: 'USA',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Android',
      jobLocation: 'Ukraine',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Node JS',
      jobLocation: 'Ukraine',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Laravel',
      jobLocation: 'Ukraine',
      remote: false,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Python',
      jobLocation: 'Ukraine',
      remote: false,
      open: false,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Ruby',
      jobLocation: 'Ukraine',
      remote: false,
      open: false,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
    {
      name: 'Ruby',
      jobLocation: 'Brazil',
      remote: true,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    },
  ],
})

export const getters = {
  getVacancies: (state) => (skill, location) => {
    return state.vacancies
      .filter((item) => {
        if (skill && !location) {
          return item.name === skill
        }

        if (!skill && location) {
          return item.jobLocation === location
        }

        if (skill && location) {
          return item.name === skill && item.jobLocation === location
        }

        return item.open
      })
      .map((item) => ({
        ...item,
        slug: make_slug(item.name, item.jobLocation),
      }))
  },

  getAllSkills: (state) => {
    const skills = []

    state.vacancies.map((item) => {
      if (!skills.includes(item.name)) {
        skills.push(item.name)
      }

      return item
    })

    return skills
  },

  getAllLocations: (state) => {
    const locations = []

    state.vacancies.map((item) => {
      if (!locations.includes(item.jobLocation)) {
        locations.push(item.jobLocation)
      }

      return item
    })

    return locations
  },
}

export const mutations = {
  add(state, obj) {
    state.vacancies.push({
      name: obj.name,
      jobLocation: obj.jobLocation,
      remote: true,
      open: true,
      datePosted: '11 / 11 / 2022',
      hiringOrganisation: 'ScrumLaunch',
      employmentType: 'Full Time',
      baseSalary: '$10-20 / hour',
    })
  },
}
