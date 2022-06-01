function make_slug(item) {
    let slug = item.name + '-' + item.jobLocation;
    item['slug'] = '/remote-developer-jobs/' + slug.replace(/\s+/g, '-').toLowerCase()
    return item
}

export default {
    state: () => ({
        vacancies: [
            {
                name: 'PHP',
                jobLocation: 'Brazil',
                remote: true,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'React JS',
                jobLocation: 'Ukraine',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Django',
                jobLocation: 'Ukraine',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Java',
                jobLocation: 'Ukraine',
                remote: true,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'iOS',
                jobLocation: 'USA',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Android',
                jobLocation: 'Ukraine',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Node JS',
                jobLocation: 'Ukraine',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Laravel',
                jobLocation: 'Ukraine',
                remote: false,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Python',
                jobLocation: 'Ukraine',
                remote: false,
                open: false,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Ruby',
                jobLocation: 'Ukraine',
                remote: false,
                open: false,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
            {
                name: 'Ruby',
                jobLocation: 'Brazil',
                remote: true,
                open: true,
                datePosted: "11 / 11 / 2022",
                hiringOrganisation: "ScrumLaunch", 
                employmentType: "Full Time",
                baseSalary: "$10-20 / hour",
            },
        ],
    }),

    mutations: {

    },

    actions: {

    },

    getters: {

        getVacancies: state => ( skill, location ) => {
            return state.vacancies.filter((item) => {
                if ( item.name == skill && location == '' ) {
                    return make_slug(item)
                }
                else if ( skill == '' && item.jobLocation == location ) {
                    return make_slug(item)
                }
                else if ( item.name == skill && item.jobLocation == location ) {
                    return make_slug(item)
                }
                else if ( skill == '' && location == ''  ) {
                    return make_slug(item)
                }
            })
        },

        getAllSkills: state => {

            let skills = []

            state.vacancies.map((item) => {
                if ( skills.indexOf(item.name) === -1 ) {
                    skills.push(item.name)
                }
            })

            return skills
        },

        getAllLocations: state => {

            let locations = []

            state.vacancies.map((item) => {
                if ( locations.indexOf(item.jobLocation) === -1 ) {
                    locations.push(item.jobLocation)
                }
            })

            return locations
        },

    }
}
