export default {
    state: () => ({
        team: [
            {
                name: 'Charlie Lambropoulos',
                position: 'Chief Executive Officer',
                position_2: 'Co-founder',
                inLink: 'https://www.linkedin.com/in/charlielambropoulos/',
                photo: 'charlie_lambropoulos.jpg'
            },
            {
                name: 'Andy Daidone',
                position: 'Co-founder',
                inLink: 'https://www.linkedin.com/in/andy-daidone/',
                photo: 'andy_daidone.jpg'
            },
            {
                name: 'Dmytro Riazanov',
                position: 'Co-founder',
                inLink: 'https://www.linkedin.com/in/dmytro-riazanov-2180a427/',
                photo: 'dmytro_riazanov.jpg'
            },
            {
                name: 'Mikhaylo Shatskiy',
                position: 'CTO',
                inLink: 'https://www.linkedin.com/in/michael-shatskiy-387990bb/',
                photo: 'mikhaylo_shatskiy.jpg'
            },
            {
                name: 'Yuliia Hlushkina',
                position: 'Vice President of Design',
                inLink: 'https://www.linkedin.com/in/yuliia-hlushkina-682627155/',
                photo: 'yuliia_hlushkina.jpg'
            },
            {
                name: 'Kaylee-Anna Jayaweera',
                position: 'VP of Product',
                inLink: 'https://www.linkedin.com/in/kaylee-anna-jayaweera/',
                photo: 'kaylee_anna_jayaweera.jpg'
            },
        ],
    }),

    mutations: {

    },

    actions: {

    },

    getters: {
        getAllTeam: state => {
            return state.team
        }
    }
}
