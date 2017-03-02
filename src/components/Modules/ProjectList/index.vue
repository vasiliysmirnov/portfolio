<template lang='jade'>
  .wrap
    .project-list
      .project(v-for='project in projects')
        img.cover(:src='project.cover')
        .tagblock
          .tag(v-for='tag in project.tags') {{tag}}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
