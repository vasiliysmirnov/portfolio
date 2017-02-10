<template lang='jade'>
  project-list
</template>
<script type="text/babel">
export default {
  name: 'portfolio',
  components: {
    projectList: resolve => require(['../Modules/ProjectList/index.vue'], resolve)
  }
}
</script>
<style lang='stylus'></style>
