<template>
  <h2 @click="queryTest">axios请求测试</h2>
</template>

<script>
  import http from '../utils/http.js'
  // import api from '../utils/api.js'

  export default {
    name: 'axios-item',
    methods: {
      queryTest () {
        http.axiosQuery(this, {
          // url: api.right,
          // baseURL: 'https://cnodejs.org/api/v1'
          url: '/msps-fstore/ajs/highWorth/queryAssetManageList.do',
          method: 'post'
        }, (oData) => {
          console.log(oData)
        })
      }
    }
  }
</script>

<style scoped>

</style>
