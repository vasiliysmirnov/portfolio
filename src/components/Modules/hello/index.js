export default {
    name: 'hello',
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