<template lang='jade'>
  main.main
    logotype
    project-list.list(
      :projects='projects'
      v-for='tag in tags'
      ) {{tag}}
</template>
<script type="text/babel">
export default {
  name: 'Mainpage',
  components: {
    logotype: resolve => require(['../Modules/Logotype/index.vue'], resolve),
    projectList: resolve => require(['../Modules/ProjectList/index.vue'], resolve)
  },
  computed: {
    projects () {
      return this.$store.state.projects
    },
    tags () {
      return this.$store.state.tags
    }
  }
}
</script>
<style lang='stylus'>
  .main
    padding-left calc(50vw - 284px)
    width 200vw
    display flex
    flex-direction row
    flex-wrap wrap
  .list
    display flex
    flex-direction row
    flex-wrap nowrap
    position: relative;
    margin-right 5vw
    height 50vh
    min-width 230px
    width 13vw
    color white
    font-size 28px
</style>
