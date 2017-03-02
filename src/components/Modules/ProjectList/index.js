export default {
  name: 'projectList',
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
    projects () {
      return [
        {
          title: 'ЦАН',
          desc: 'Редизайн сайта Центрального Агенства Недвижимости',
          year: this.year[2],
          cover: require('./assets/img/tsan-prew.png'),
          tags: [
            this.tags[0],
            this.tags[1],
            this.tags[3],
            this.tags[5]
          ]
        },
        {
          title: 'Фабрика вывесок',
          desc: 'Редизайн сайта фабрики наружной рекламы',
          year: this.year[1],
          cover: require('./assets/img/fabrica-prew.png'),
          tags: [
            this.tags[0],
            this.tags[3],
            this.tags[5]
          ]
        },
        {
          title: 'Гранат транзит',
          desc: 'Сайт оклейки городского транспорта',
          year: this.year[1],
          cover: require('./assets/img/tranzit-prew.png'),
          tags: [
            this.tags[0],
            this.tags[3],
            this.tags[7]
          ]
        },
        {
          title: 'Cheque',
          desc: 'Приложение для учета расходов',
          year: this.year[3],
          cover: require('./assets/img/cheque-prew.png'),
          tags: [
            this.tags[4],
            this.tags[5],
            this.tags[6]
          ]
        },
        {
          title: 'Golden Ring Hotel',
          desc: 'Приложение для администрирования отеля',
          year: this.year[1],
          cover: require('./assets/img/hotel-prew.png'),
          tags: [
            this.tags[4]
          ]
        },
        {
          title: 'Коробейников',
          desc: 'Сайт-каталог продажи подержанных товаров',
          year: this.year[2],
          cover: require('./assets/img/korob-prew.png'),
          tags: [
            this.tags[1]
          ]
        },
        {
          title: 'Пироги домой',
          desc: 'Приложение для заказа пирогов онлайн',
          year: this.year[2],
          cover: require('./assets/img/pirogi-prew.png'),
          tags: [
            this.tags[1],
            this.tags[6]
          ]
        },
        {
          title: 'Гранат PR',
          desc: 'Промо-сайт для PR-услуг',
          year: this.year[2],
          cover: require('./assets/img/pr-prew.png'),
          tags: [
            this.tags[1],
            this.tags[5],
            this.tags[8]
          ]
        },
        {
          title: 'Торговые ряды',
          desc: 'Брендинг и сайт-каталог для продажи товаров',
          year: this.year[0],
          cover: require('./assets/img/ruady-prew.png'),
          tags: [
            this.tags[0],
            this.tags[2],
            this.tags[5]
          ]
        },
        {
          title: 'Сердца России',
          desc: 'Сайт для благотворительного фонда',
          year: this.year[0],
          cover: require('./assets/img/serdtca-prew.png'),
          tags: [
            this.tags[0],
            this.tags[5]
          ]
        },
        {
          title: 'Таксовичкоф',
          desc: 'Редизайн сайта городских перевозок',
          year: this.year[1],
          cover: require('./assets/img/taxo-prew.png'),
          tags: [
            this.tags[0],
            this.tags[3]
          ]
        }
      ]
    }
  }
}
