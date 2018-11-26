<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      const _this = this;
      console.log(`hasValue方法调用${this.hasValue("222222222")}`)
      this.appReady(function () {
        console.log(`appReady方法调用成功`)
      })
      this.$mock({
        url: "/city",
        method: 'get',
        headers: {token2: "123456"}
      }).then(res => {
      })
      this.$axios({
        url: "/login",
        params: {username: 'lisanxing', userpwd: '123456'},
        method: 'get',
        headers: {token2: "45678"},
        auth: {token2: "123456"}
      }).then(res => {
      })

      this.$cross({
        url: "https://www.easy-mock.com/mock/5bf50d687392ed1f6bff6f1b/mock-vue/city",
        method: 'get',
        headers: {token2: "123456"}
      }).then(res => {
      })
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
