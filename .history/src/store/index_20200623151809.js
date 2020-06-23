import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides: [],
    category: [],
    recommend: []
  },
  mutations: {
    setSlides(state,data) {
      state.slides = data
    },
    setCategory(state,data) {
      state.category = data
    },
    setRecommend(state,data) {
      state.recommend = data
    },
    setFloor1(state,data) {
      state.floor1 = data
    },
    setFloor2(state,data) {
      state.floor2 = data
    },
    setFloor3(state,data) {
      state.floor3 = data
    },
    setFloorName(state,data) {
      state.floorName = data
    }
  },
  actions: {
  },
  modules: {
  }
})
