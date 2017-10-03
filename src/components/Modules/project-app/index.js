export default {
    name: 'app',
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            active: false
        }
    },
    computed: {}
}