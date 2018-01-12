<template>
  <div class="children">
    <router-link :to="{name: 'grandChild'}" replace>点击</router-link>
    <router-link :to="{name: 'grandChild2'}" replace>点击</router-link>
    <router-view/>
  </div>
</template>

<script>
  import GrandChild from './grandChild'
  export default {
    components: {GrandChild},
    name: 'childrenView',
    data () {
      return {
        msg: 'Hello, master!'
      }
    }
  }
</script>

<style scoped>
  div {
    color: red;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
