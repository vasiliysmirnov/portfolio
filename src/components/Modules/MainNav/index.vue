<template lang='jade'>
  .mainblock
    .centerblock
      img.herman(:src='asset')
      .linksblock
        a.mainLinks(v-for='link in links') {{ link }}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
