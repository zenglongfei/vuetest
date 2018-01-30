<template>
  <div>
    <router-link :to="{name: 'axiosItem'}" replace>组件一</router-link>
    <router-link :to="{name: 'grandChild2'}" replace>组件二</router-link>
    <transition name="slide-fade"  mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'childrenView'
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
