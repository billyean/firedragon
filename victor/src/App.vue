<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown" style="padding-right: 20px">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Binding Demos
            </a>
            <div class="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown1">
              <router-link class="nav-link" to="/binding1">Binding Demo 1</router-link>
              <router-link class="nav-link" to="/binding2">Binding Demo 2</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" style="padding-right: 20px">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Game
            </a>
            <div class="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown2">
              <router-link class="nav-link" to="/monster">Go to Monster</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" style="padding-right: 20px">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Components Demo
            </a>
            <div class="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown3">
              <router-link class="nav-link" to="/calculator">Embedded</router-link>
            </div>
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
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!--<nav>-->
      <!--<span class="span"><router-link to="/binding">Go to Binding1</router-link></span>-->
      <!--<span class="span"><router-link to="/component2">Go to Binding2</router-link></span>-->
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
