<template>
  <span @click="counterClick">{{counter}}</span>
</template>

<script>
  export default {
    name: 'children-counter',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      counterClick () {
        this.counter += 1
        this.$emit('emitClick')
      }
    }
  }
</script>

<style scoped>
  span {
    padding: 0 5px;
    margin: 0 5px;
    border: 1px solid red;
  }
</style>
