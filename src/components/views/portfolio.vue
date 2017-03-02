<template lang='jade'>
  project-list(:projects='projects')
</template>
<script type="text/babel">
export default {
  name: 'portfolio',
  components: {
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
<style lang='stylus'></style>
