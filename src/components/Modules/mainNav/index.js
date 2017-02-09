export default {
  name: 'main-nav',
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
      links: [
        'Blog',
        'Portfolio',
        'Hire me'
      ]
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
