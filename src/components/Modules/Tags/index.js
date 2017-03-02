export default {
  name: 'tags',
  data () {
    return {
      year: [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
      ],
      tags: [
        'Web',
        'Art-direction',
        'Branding',
        'Re-design',
        'App',
        'UX',
        'Animations',
        'Infografics',
        'Promo'
      ]
    }
  },
  computed: {
    variablesSum () {
      return this.variableOne + this.variableTwo
    }
  }
}
