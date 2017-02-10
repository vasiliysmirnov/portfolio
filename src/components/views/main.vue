<template lang='jade'>
  main.main
    main-nav
    showreel
</template>
<script type="text/babel">
import MainNav from '../Modules/MainNav/index.vue'
import Showreel from '../Modules/Showreel/index.vue'

export default {
  name: 'portfolio',
  components: {
    MainNav,
    Showreel
  }
}

</script>
<style lang='stylus'></style>
