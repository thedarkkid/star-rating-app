<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Rating :grade="3" :has-counter="false"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Rating from './components/Rating';

export default {
  name: 'App',
  components: {
    Rating,
    // HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
