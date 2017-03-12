<template lang='jade'>
  .wrap
    .project-tag Branding
      .project(
        v-for='project in projects'
        v-if='project.tag === "Branding"'
      )
        img.cover(
          :src='project.cover'
        )
        .title {{project.title}}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
