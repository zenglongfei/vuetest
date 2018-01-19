<template>
  <div>
    <p>页面点击数：<span>{{htmlTotal}}</span><span @click.stop="clearNum">x</span></p>
    <p>按钮点击数：<span>{{total}}</span></p>
    <p>单个点击数：<children-counter @emitClick="numberClick"/><children-counter @emitClick="numberClick"/></p>
  </div>
</template>

<script>
  import ChildrenCounter from './childrenCounter'

  export default {
    components: {ChildrenCounter},
    name: 'number-counter',
    props: ['htmlTotal'],
    data () {
      return {
        total: 0
      }
    },
    methods: {
      numberClick () {
        this.total += 1
      },
      clearNum (e) {
        localStorage.total = 0
        this.$emit('emitAppClick')
      }
    }
  }
</script>

<style scoped>
  div {
    text-align: left;
  }
  span {
    padding: 0 5px;
    margin: 0 5px;
    border: 1px solid red;
  }
</style>
