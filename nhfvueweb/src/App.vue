<template>
  　　<div id="app">
  　　　　<img src="./assets/logo.png">
　　　　  <h2>{{msg}}</h2>
　　　　  <firstcomponent></firstcomponent>
          <router-link to="/view1">Go to view1</router-link>
          <router-link to="/view2">Go to view2</router-link>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
  　　</div>
  </template>

<script>
  import firstcomponent from './components/first-component.vue'

  export default {
　　name: 'app',
　　data () {
　　　　return {
　　　　　　msg: 'Welcome to Your Vue.js App'
　　　　}
　　},
　　components: { firstcomponent }
}
</script>

<style>
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>