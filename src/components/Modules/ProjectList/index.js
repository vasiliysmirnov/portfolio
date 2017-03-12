export default {
  name: 'projectList',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {}
}
