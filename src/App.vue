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
      this.axios.get('/user').then((res={}) => {
        // console.log(res)
        this.$store.dispatch('saveUserName',res.username);       
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
       this.$store.dispatch('saveCartCount',res);            
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
