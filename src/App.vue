<template lang='jade'>
  .app#app
    img(src='./assets/images/logo.png')
    hello
</template>

<script>
import Hello from './components/Hello/index.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang='stylus' scoped>
  .app
    box-sizing border-box
    & *
      box-sizing border-box
</style>
