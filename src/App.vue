<template lang='jade'>
  .app#app
    hello
    header-block
</template>

<script>
import Hello from './components/Hello/index.vue'
import HeaderBlock from './components/Modules/Header/index.vue'

export default {
  name: 'app',
  components: {
    Hello,
    HeaderBlock
  }
}
</script>

<style lang='stylus' scoped>
  @require './assets/styles/reset.styl'

  .app
    box-sizing border-box
    & *
      box-sizing border-box
 
</style>
