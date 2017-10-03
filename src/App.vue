<template lang='jade'>
  .app#app
    top-nav
    router-view
</template>

<script>
export default {
  name: 'app',
  components: {TopNav: resolve => require(['./components/Modules/Nav/index.vue'], resolve)}
}
</script>

<style lang='stylus'>
  @require './assets/styles/reset.styl'

  .app
    box-sizing border-box
    font-family 'Roboto', monospace
    font-size 2vh
    font-weight 100
    line-height 200%
    display flex
    flex-direction column
    flex-wrap wrap
    background-color #fff
    overflow-y hidden

  a
    color black

  .h1
    font-size 200%
    font-weight 500
    padding-top 60px

  .text
    padding-top 50px
    
</style>
