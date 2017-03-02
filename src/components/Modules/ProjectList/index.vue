<template lang='jade'>
  .wrap
    .project-list
      .project(v-for='project in projects')
        img.cover(:src='project.cover')
        tags
</template>
<script type="text/babel" src='./index.js'>
  export default {
    name: 'tags-years',
    components: {
      tags: resolve => require(['../Modules/Tags/index.vue'], resolve)
    }
  }
</script>
<style lang='stylus' scoped src='./index.styl'></style>
