<template lang='jade'>
  .app#app
    //- main-nav
    top-nav
    router-view
</template>

<script>
export default {
  name: 'app',
  components: {
    // HeaderBlock: resolve => require(['./components/Modules/Header/index.vue'], resolve),
    // MainNav: resolve => require(['./components/Modules/MainNav/index.vue'], resolve),
    TopNav: resolve => require(['./components/Modules/Nav/index.vue'], resolve)
  }
}
</script>

<style lang='stylus'>
  @require './assets/styles/reset.styl'

  .app
    box-sizing border-box
    font-family 'Roboto', monospace
    display flex
    flex-wrap wrap
    background-color #181818
    overflow-y hidden

  a
    color black
</style>
