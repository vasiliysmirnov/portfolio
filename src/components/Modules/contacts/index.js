export default {
    name: 'contacts',
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