import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article: []
  },
  mutations: {
    setName() {
      state.name = data
    }
  },
  actions: {
  },
  modules: {
  }
})
