// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'
import i18n from './lang/index'
import './mock/index'
import axios from './axios'// 通过import引入

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use({
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
