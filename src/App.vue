<template>
  <div id="app">
    <router-view/>
    <new-components :message="message1" :test="message2"/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import NewComponents from './components/newComponents'

export default {
  components: {NewComponents},
  name: 'app',
  data () {
    return {
      message1: 1993,
      message2: 1027
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
