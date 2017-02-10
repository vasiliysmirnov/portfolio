<template lang='jade'>
  .app#app
    header-block
    router-view
    footer-nav
</template>

<script>
export default {
  name: 'app',
  components: {
    HeaderBlock: resolve => require(['./components/Modules/Header/index.vue'], resolve),
    FooterNav: resolve => require(['./components/Modules/FooterNav/index.vue'], resolve)
  }
}
</script>

<style lang='stylus'>
  @require './assets/styles/reset.styl'

  .app
    box-sizing border-box
    font-family 'Roboto', monospace
    /*font-family 'Noto-Serif', monospace*/

  a
    color black
</style>
