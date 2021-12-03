export default {
	state: () => ({
		articles: [
            {
                category: 'Insights',
                image: 'https://modulo.net/files/chunks/5b3a6589a0d55630da0001ae/5b3a65d6a0d55630ce000181.jpg',
                title: 'Article name that is longer than one line',
                short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs.',
                date: 'November 14, 2021',
                slug: 'article-name-that-is-longer-than-one-line',
            },
            {
                category: 'Insights',
                image: 'https://modulo.net/files/chunks/5b3a6589a0d55630da0001ae/5b3a65d6a0d55630ce000181.jpg',
                title: 'Article name that is longer than one line',
                short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs.',
                date: 'November 14, 2021',
                slug: 'article-name-that-is-longer-than-one-line',
            },
            {
                category: 'Insights',
                image: 'https://modulo.net/files/chunks/5b3a6589a0d55630da0001ae/5b3a65d6a0d55630ce000181.jpg',
                title: 'Article name that is longer than one line',
                short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs.',
                date: 'November 14, 2021',
                slug: 'article-name-that-is-longer-than-one-line',
            },
            {
                category: 'Insights',
                image: 'https://modulo.net/files/chunks/5b3a6589a0d55630da0001ae/5b3a65d6a0d55630ce000181.jpg',
                title: 'Article name that is longer than one line',
                short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs.',
                date: 'November 14, 2021',
                slug: 'article-name-that-is-longer-than-one-line',
            },
            {
                category: 'Insights',
                image: 'https://modulo.net/files/chunks/5b3a6589a0d55630da0001ae/5b3a65d6a0d55630ce000181.jpg',
                title: 'Article name that is longer than one line',
                short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs.',
                date: 'November 14, 2021',
                slug: 'article-name-that-is-longer-than-one-line',
            },
		],
	}),

	mutations: {

	},

	actions: {

	},

	getters: {

		getAllArticles: state => {
			return state.articles
		},

        getFirstArticle: state => {
            return state.articles[0]
		},

        getRestArticles: state => {
            return state.articles.slice(1, state.articles.length)
		},
	}

}