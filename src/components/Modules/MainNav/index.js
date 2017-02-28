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
        // {
        //   title: 'Blog',
        //   routeName: 'Main'
        // },
        {
          title: 'Portfolio',
          routeName: 'Portfolio'
        },
        {
          title: 'Hire me',
          routeName: 'Hire'
        }
      ],
      asset: require('./assets/img/herman.png')
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
