<template lang='jade'>
  .wrap(:class='{"wrap--inside": $route.name === "Portfolio"}')
    .centerblock
      img.herman(
        :src='asset'
        :class='{"herman--no-image": $route.name === "Portfolio"}'
      )
      .linksblock
        router-link.mainLinks(
            :to='link.routeName'
            v-for='link in links'
            :class='{"mainLinks--white": $route.name === "Portfolio"}'
        ) {{ link.title }}
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
