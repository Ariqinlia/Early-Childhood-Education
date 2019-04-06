import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const _wsuri = 'ws://101.132.106.233:3000'
export default new Vuex.Store({
  state: {
    // 数据
    data: {
      wsuri: 'ws://101.132.106.233:3000', // 服务器地址
      shortid: '',
      emailPrepend: '', // 邮箱前缀
      mailaddress: '', // 邮箱地址
      attachments: [], // 邮箱附件(未解析arrayBuffer)
      attachmentsURL: [], // 邮箱附件(已解析为URL)
      allMailaddress: [], // 所有使用过的邮箱地址
      tableData: [], // 展示表格数据
      locale: 'zh',
      _10min: Date.now() + 1000 * 10 * 60 - Date.now(),
      activeIndex: '2'// 激活菜单index
    }
  },
  mutations: {
    changeData(state, {
      data
    }) {
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
