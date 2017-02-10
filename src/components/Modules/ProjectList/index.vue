<template lang='jade'>
  .project-list
    .project(v-for='project in projects')
      {{ project.title }}
      img(:src='project.cover')
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
