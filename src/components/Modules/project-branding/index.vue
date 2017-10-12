<template lang='jade'>
  swiper(:options='swiperOption', ref='mySwiper')
    swiper-slide(v-for='project in projects' v-if='project.tag === "Branding"') slide1
      this.$store.project.tag
        .wrap
          project.title {{project.title}}
          project.desc {{project.desc}}
          img.cover(
            :src='project.cover'
          )
    swiper-slide Slide 3
    swiper-slide Slide 3
    .swiper-pagination(slot='pagination')
    .swiper-button-prev(slot='button-prev')
    .swiper-button-next(slot='button-next')
    .swiper-scrollbar(slot='scrollbar')
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
