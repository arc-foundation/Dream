<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --main-dark-bg-color: #262e35;
  --sideBar-dark-bg-color: #303841;
  --navBar-dark-bg-color: #36404a;

  --main-light-bg-color: #ffffff;
  --sideBar-light-bg-color: #f5f7fb;
  --navBar-light-bg-color: #ffffff;

  --main-txt-color: #dcdfe5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-txt-color);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
