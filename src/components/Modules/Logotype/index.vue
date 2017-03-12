<template lang='jade'>
  .wrap(:class='{"wrap--sm": $route.name === "Portfolio"}')
    .logo
      img.herman(src='./assets/img/herman.svg')
      .narubalie
        img(src='./assets/img/narubalie.svg')
        img.apostrof(src='./assets/img/Apostrof.svg')
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
