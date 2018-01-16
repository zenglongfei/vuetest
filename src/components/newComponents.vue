<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{test}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'new-components',
    props: ['message', 'test']
  }
</script>

<style scoped>

</style>
