export default {
  name: 'logotype',
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
        {
          title: 'Narubalie',
          routeName: '/'
        }
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
