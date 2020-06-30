<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <button class="mdc-icon-button material-icons">favorite</button>
      <router-link to="/about">About</router-link>
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">A Menu Item</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__text">Another Menu Item</span>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
