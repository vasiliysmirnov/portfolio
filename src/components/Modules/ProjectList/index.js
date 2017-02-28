export default {
  name: 'projectList',
  data () {
    return {
      projects: [
        {
          title: 'ЦАН',
          cover: require('./assets/img/tsan-prew.png')
        },
        {
          title: 'Фабрика вывесок',
          cover: require('./assets/img/fabrica-prew.png')
        },
        {
          title: 'Гранат транзит',
          cover: require('./assets/img/tranzit-prew.png')
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
