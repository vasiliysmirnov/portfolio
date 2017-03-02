<template lang='jade'>
  .tagblock
    .tag(v-for='tag in project.tags') {{tag}}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
