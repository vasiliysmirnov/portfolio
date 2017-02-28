<template lang='jade'>
  main.main
    showreel
</template>
<script type="text/babel">
import Showreel from '../Modules/Showreel/index.vue'

export default {
  name: 'portfolio',
  components: {
    Showreel
  }
}

</script>
<style lang='stylus'>
  .main
    width 100% 
</style>
