<template>
  <nav>
    <router-link to="/">Contact</router-link> |
    <router-link to="/journal">Journal</router-link> |
    <router-link to="/clavier">Clavier</router-link>

  </nav>
  <router-view/>




</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
 color: #4092ad;
}

body{
  background-color: #b6e1ef;
}
</style>
