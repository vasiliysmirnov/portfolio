export default {
    name: 'branding',
    props: {},
    data() {
        return {
            notNextTick: true,
            swiperOption: {
                direction : 'horizontal',
                grabCursor : true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                scrollbar:'.swiper-scrollbar',
                mousewheelControl : true,
                observeParents:true,
                debugger: true,
                onTransitionStart(swiper){
                    console.log(swiper)
                },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
        projects () {
            return this.$store.projects
        }
    }
}