<template lang='jade'>
  .wrap(:class='{"wrap--sm": $route.name === "Portfolio"}')
    .logo
      img.apostrof(src='./assets/img/Apostrof.svg')
      .letters
        img.herman(src='./assets/img/herman.svg')
        img.narubalie(src='./assets/img/narubalie.svg')
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
