<template lang='jade'>
  main.main
    hello
    branding
    site
    app
    other
    contacts
</template>
<script type="text/babel">
export default {
  name: 'Mainpage',
  components: {
    hello: resolve => require(['../Modules/hello/index.vue'], resolve),
    branding: resolve => require(['../Modules/project-branding/index.vue'], resolve),
    site: resolve => require(['../Modules/project-site/index.vue'], resolve),
    app: resolve => require(['../Modules/project-app/index.vue'], resolve),
    other: resolve => require(['../Modules/project-other/index.vue'], resolve),
    contacts: resolve => require(['../Modules/contacts/index.vue'], resolve)
  },
  computed: {}
}
</script>
<style lang='stylus'>
  .main
    display flex
    flex-direction column
    align-items center

  .wrap
    width 90vw
    margin-top 3vh
    padding 0 4% 8% 4%
</style>
