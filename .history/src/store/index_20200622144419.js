import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article: []
  },
  mutations: {
    setArticles(state,data) {
      state.articles = data
    }
  },
  actions: {
  },
  modules: {
  }
})
