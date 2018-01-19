<template>
  <div class="hello">
    <ul>
      <router-link to="/" replace>首页</router-link>
      <router-link :to="{name: 'childrenView'}" replace>组件</router-link>
      <router-link :to="{name: 'learnComponent'}" replace>学习</router-link>
    </ul>
    <ul>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
