export const state = () => ({
  articles: [],
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  setArticles({ commit }, articles) {
    commit('SET_ARTICLES', articles)
  },
}

export const getters = {
  getAllArticles: (state) => {
    return state.articles
  },

  getFirstArticle: (state) => {
    return state.articles[0] !== undefined ? state.articles[0] : false
  },

  getRestArticles: (state) => {
    return state.articles.slice(1, state.articles.length)
  },
}
