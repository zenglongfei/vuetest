import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router/index'

new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})
