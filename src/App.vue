<template lang='jade'>
  .app#app
    header-block
    main-nav
    showreel
    footer-nav
</template>

<script>
import HeaderBlock from './components/Modules/Header/index.vue'
import MainNav from './components/Modules/MainNav/index.vue'
import Showreel from './components/Modules/Showreel/index.vue'
import FooterNav from './components/Modules/FooterNav/index.vue'

export default {
  name: 'app',
  components: {
    HeaderBlock,
    MainNav,
    Showreel,
    FooterNav
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
