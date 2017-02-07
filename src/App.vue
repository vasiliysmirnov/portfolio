<template lang='jade'>
  .app#app
    header-block
    main-nav
</template>

<script>
import HeaderBlock from './components/Modules/Header/index.vue'
import MainNav from './components/Modules/MainNav/index.vue'

export default {
  name: 'app',
  components: {
    HeaderBlock,
    MainNav
  }
}
</script>

<style lang='stylus' scoped>
  @require './assets/styles/reset.styl'

  .app
    box-sizing border-box
    font-family 'Roboto', monospace
    /*font-family 'Noto-Serif', monospace*/
    a
      color red
</style>
