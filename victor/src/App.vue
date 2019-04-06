<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" style="padding-right: 20px;">
            <router-link to="/binding">Binding</router-link>
          </li>
          <li class="nav-item" style="padding-right: 20px;">
            <router-link to="/component2">Component2</router-link>
          </li>
          <li class="nav-item" style="padding-right: 20px;">
            <router-link to="/monster">Go to Monster</router-link>
          </li>
          <!--<li class="nav-item dropdown">-->
          <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
          <!--Vue1 & Vue2-->
          <!--</a>-->
          <!--<div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
          <!--<router-link to="/vue1">Vue1</router-link>-->
          <!--<router-link to="/vue2">Vue2</router-link>npm-->
          <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </nav>
    <!--<nav>-->
      <!--<span class="span"><router-link to="/binding">Go to Binding</router-link></span>-->
      <!--<span class="span"><router-link to="/component2">Go to Component2</router-link></span>-->
      <!--<span class="span"><router-link to="/monster">Go to Monster</router-link></span>-->
      <!--<span class="span"><router-link to="/vue1">Vue1</router-link></span>-->
      <!--<span class="span"><router-link to="/vue2">Vue2</router-link></span>-->
    <!--</nav>-->
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
