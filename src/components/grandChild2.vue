<template>
  <div>
    <a @click="showComponent" name="addPerson">添加成员组件</a>
    <a @click="showMessage">modal测试</a>
    <component :is="show"/>
  </div>
</template>

<script>
  import addPerson from './addPersonItem'
  import modal from '../plugins/modalPlugin'

  export default {
    name: 'grand-child2',
    data () {
      return {
        show: ''
      }
    },
    components: {
      addPerson,
      modal
    },
    methods: {
      showComponent (e) {
        this.show = e.target.getAttribute('name')
      },
      showMessage () {
        this.$Modal()
      }
    }
  }
</script>

<style scoped>
  div {
  font-size: 16px;
  margin-top: 20px;
}
</style>
