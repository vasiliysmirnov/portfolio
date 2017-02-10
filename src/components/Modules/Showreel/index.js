export default {
  name: 'showreel',
  props: {
    first: {
      type: Boolean,
      default: true
    },
    second: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      src: 'https://s3-us-west-2.amazonaws.com/coverr/mp4/Forest-Lullaby.mp4'
    }
  },
  computed: {
    variablesSum () {
      return this.variableOne + this.variableTwo
    }
  },
  methods: {
    log (message) {
      console.log(message)
    }
  },
  mounted () {
    // this.log(`component ready`)
  }
}
