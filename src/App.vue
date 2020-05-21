<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('/user').then(() => {
        //to-do 保存到vuex里面        
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then(() => {
        //to-do 保存到vuex里面        
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/sass/reset.scss";
@import "./assets/sass/config.scss";
@import "./assets/sass/button.scss";
</style>
