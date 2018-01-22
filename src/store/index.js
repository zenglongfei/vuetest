import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default (
  new Vuex.Store({
    state: {
      isLoading: false
    },
    mutations: {
      showLoading (state, params) {
        this.state.isLoading = params
      }
    }
  })
)
