import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const _wsuri = 'ws://101.132.106.233:3000'
export default new Vuex.Store({
  state: {
    // 数据
    data: {
      u_id: null,
      q_id: null
    }
  },
  mutations: {
    changeData(state, {data}) {
      state.data = data
    }
  },
  actions: {
    changeData({
      commit
    }, payload) {
      commit('changeData', payload)
    }
  }
})
