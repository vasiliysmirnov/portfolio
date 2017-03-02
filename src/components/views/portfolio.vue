<template lang='jade'>
  project-list
    tags
</template>
<script type="text/babel">
export default {
  name: 'portfolio',
  components: {
    projectList: resolve => require(['../Modules/ProjectList/index.vue'], resolve),
    tags: resolve => require(['../Modules/Tags/index.vue'], resolve)
  }
}
</script>
<style lang='stylus'></style>
