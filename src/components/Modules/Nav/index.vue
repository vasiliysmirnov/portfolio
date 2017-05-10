<template lang='jade'>
  .secondarynav
    a.links(v-for='link in links') {{ link }}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
