export default {
    name: 'site',
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