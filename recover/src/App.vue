<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/hello">HelloWorld</router-link>
    <router-link to="/food">food</router-link> -->
      <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
  
</template>

<script>


export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  mounted(){
    console.log(this.$route.params);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


  
  
}
</style>
