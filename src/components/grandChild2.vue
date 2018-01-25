<template>
  <div>
    <a @click="showComponent" name="dynamic">动态组件一</a>
    <a @click="showComponent" name="dynamic2">动态组件二</a>
    <transition mode="out-in" name="fade">
      <keep-alive>
        <component :is="show"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import dynamic from './dynamicComponent'
  import dynamic2 from './dynamicComponent2'

  export default {
    name: 'grand-child2',
    data () {
      return {
        show: ''
      }
    },
    components: {
      dynamic,
      dynamic2
    },
    methods: {
      showComponent (e) {
        this.show = e.target.getAttribute('name')
      }
    }
  }
</script>

<style scoped>
  div {
  font-size: 18px;
  margin-top: 20px;
}
</style>
