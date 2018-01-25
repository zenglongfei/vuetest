<template>
  <div id="app" @click="appClick">
    <loading-component v-show="(isLoading || isLoadingHtml)"/>
    <!--<img src="./assets/logo.png">-->
    <h2>MyTest</h2>
    <audio-component/>
    <time-component :chMsg="msg"><span>这是匿名插槽内容</span><span slot="specificName">这是具名插槽</span></time-component>
    <number-counter @emitAppClick="zeroNum" :htmlTotal="total"/>
    <router-view/>
  </div>
</template>

<script>
import TimeComponent from './components/timeComponent'
import NumberCounter from './components/numberCounter'
import AudioComponent from './components/audioComponent'
import LoadingComponent from './components/loadingComponent'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    LoadingComponent,
    AudioComponent,
    NumberCounter,
    TimeComponent
  },
  watch: {
    total () {
      console.log('total:' + this.total)
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      isLoadingHtml: state => state.isLoadingHtml
    })
  },
  data () {
    return {
      total: Number(localStorage.getItem('total')),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    appClick () {
      this.total = Number(localStorage.getItem('total'))
      this.total += 1
      localStorage.setItem('total', this.total)
    },
    zeroNum () {
      this.total = 0
    }
  }
}
</script>

<style>
body, h2 {
  margin: 0;
}
h2 {
  padding: 12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 18px;
  height: 100vh;
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
