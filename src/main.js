// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import Vuex from 'vuex'

import '../static/css/icon.css'
import Dialog from './plugins/dialog.js'

Vue.use(Vuex)
Vue.use(Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: {App},
  store,
  render: h => h(App)
})
