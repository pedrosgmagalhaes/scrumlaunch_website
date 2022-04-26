function make_slug(item) {
    let remote = item.remote ? '-remote' : ''
    let slug = item.skill + '-' + item.location + remote
    item['slug'] = '/vacancy/' + slug.replace(/\s+/g, '-').toLowerCase()
    return item
}

export default {
    state: () => ({
        vacancies: [
            {
                skill: 'PHP Developer',
                location: 'Brazil',
                remote: true,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'React JS Developer',
                location: 'Ukraine',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Django Developer',
                location: 'Ukraine',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Java Developer',
                location: 'Ukraine',
                remote: true,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'iOS Developer',
                location: 'USA',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Android Developer',
                location: 'Ukraine',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Node JS Developer',
                location: 'Ukraine',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Laravel Developer',
                location: 'Ukraine',
                remote: false,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Python Developer',
                location: 'Ukraine',
                remote: false,
                open: false,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Ruby Developer',
                location: 'Ukraine',
                remote: false,
                open: false,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
            },
            {
                skill: 'Ruby Developer',
                location: 'Brazil',
                remote: true,
                open: true,
                details: [
                    {
                        section_name: 'Requirements',
                        section_list: [
                            '2+ years of commercial experience;',
                            'Proficient knowledge of the Kotlin/Java ;',
                            'Deep understanding of OOP, design patterns, SOLID;',
                            'Good understanding of MVP, MVVM, Clean Architecture',
                            'Understanding of the full mobile life cycle (Activity, Fragment, CustomView);',
                            'Dagger;',
                            'RxJava, Coroutines;',
                            'Android Jetpack;',
                            'Retrofit/OkHttp;',
                            'Google/Firebase services;',
                            'Google maps',
                            'Solid knowledge of git.',
                            'Intermediate English level.',
                        ]
                    },
                    {
                        section_name: 'We offer',
                        section_list: [
                            'Opportunity to grow as an expert;',
                            'Regular results-based salary review;',
                            'Flexible working conditions;',
                            '24 days of paid vacation (working days);',
                            '10 sick days;',
                            'Friendly and open-minded team;',
                            'English classes.',
                        ]
                    },
                ],
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
                if ( item.skill == skill && location == '' ) {
                    return make_slug(item)
                }
                else if ( skill == '' && item.location == location ) {
                    return make_slug(item)
                }
                else if ( item.skill == skill && item.location == location ) {
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
                if ( skills.indexOf(item.skill) === -1 ) {
                    skills.push(item.skill)
                }
            })

            return skills
        },

        getAllLocations: state => {

            let locations = []

            state.vacancies.map((item) => {
                if ( locations.indexOf(item.location) === -1 ) {
                    locations.push(item.location)
                }
            })

            return locations
        },

    }
}
