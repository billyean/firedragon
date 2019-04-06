<template>
  <div id="app">
    <nav>
      <span class="span"><router-link to="/binding">Go to Binding</router-link></span>
      <span class="span"><router-link to="/component2">Go to Component2</router-link></span>
      <span class="span"><router-link to="/monster">Go to Monster</router-link></span>
      <span class="span"><router-link to="/vue1">Vue1</router-link></span>
      <span class="span"><router-link to="/vue2">Vue2</router-link></span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  padding: 6px;
}

.span {
  width: 100px;
}
</style>
