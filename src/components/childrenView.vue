<template>
  <div class="children">
    <router-link :to="{name: 'grandChild'}" replace>点击</router-link>
    <router-link :to="{name: 'grandChild2'}" replace>点击</router-link>
    <transition name="bounce"  mode="out-in">
      <router-view/>
    </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
