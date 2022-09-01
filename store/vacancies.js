function make_slug(name, jobLocation) {
  const slug = name + '-' + jobLocation

  return `/remote-developer-jobs/${slug.replace(/\s+/g, '-').toLowerCase()}`
}

const reallyExists = [
  {
    name: 'PHP',
    jobLocation: 'Brazil',
  },
  {
    name: 'ReactJS',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Django',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Java',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Android',
    jobLocation: 'Ukraine',
  },
  {
    name: 'NodeJS',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Laravel',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Python',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Ruby',
    jobLocation: 'Ukraine',
  },
  {
    name: 'Ruby',
    jobLocation: 'Brazil',
  },
]

const skills = [
  'ReactJS',
  'ReactNative',
  'NodeJS',
  'Python',
  'DevOps',
  'PHP',
  'Ruby on Rails',
  'Machine Learning Engineer',
  'Data Scientist',
  'Angular',
  'Vue',
  '.NET',
  'Solidity Developer',
  'Java',
  'Go',
  'Flutter',
  'Kotlin',
  'Swift',
  'Product Owner',
  'Project Manager',
  'UI/UX Designer',
]

const locations = [
  'Brazil',
  'Argentina',
  'Colombia',
  'Costa Rica',
  'Ukraine',
  'Poland',
  'Turkey',
  'Georgia',
  'Estonia',
  'Lithuania',
  'Latvia',
  'Kazakhstan',
  'Kyrgyzstan',
  'Uzbekistan',
  'Armenia',
  'Azerbaijan',
  'India',
  'Pakistan',
  'Sri Lanka',
  'Nigeria',
  'Kenya',
  'United States',
  'Canada',
  'Mexico',
]

const createVacancies = () => {
  return skills.map((skill) =>
    locations.map((location) => {
      const isExists = reallyExists.find(
        (item) => item.jobLocation === location && item.name === skill
      )

      return {
        name: skill,
        jobLocation: location,
        remote: true,
        open: true,
        datePosted: '12 / 06 / 2022',
        hiringOrganisation: 'ScrumLaunch',
        employmentType: 'Full Time',
        baseSalary: '$10-20 / hour',
        reallyExists: Boolean(Object.keys(isExists || {}).length),
      }
    })
  )
}

export const state = () => ({
  vacancies: createVacancies().flat(),
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
