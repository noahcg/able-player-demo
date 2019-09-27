<template>
  <div id="app">
    <header class="navbar">
      <span class="site-name">Able Player Demo</span>
      <div class="links">
        <nav class="nav-links">
          <div class="nav-item">
            <router-link class="nav-link" to="/">YouTube Player</router-link>
          </div>
          <div class="nav-item">
            <router-link class="nav-link" to="/simpleplayer">Simple Player</router-link>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  z-index: 20;
  right: 0;
  height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  margin-bottom: 2em;
}
.navbar .site-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;
  text-align: left;
  display: block;
}
.navbar .links {
  padding-left: 1.5rem;
  box-sizing: border-box;
  background-color: #fff;
  white-space: nowrap;
  font-size: 0.9rem;
  position: absolute;
  right: 1.5rem;
  top: 0.7rem;
  display: flex;
}
.navbar .links .nav-links {
  display: inline-block;
  flex: 1;
}
.nav-links .nav-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;

  &:first-child {
    margin-left: 0;
  }
}
a {
  color: #3eaf7c;
  text-decoration: none;
}
.nav-links a {
  line-height: 1.4rem;
  color: inherit;
}
.navbar a {
  display: inline-block;
}
.nav-links a.router-link-active,
.nav-links a:hover {
  color: #3eaf7c;
}
.nav-links a.router-link-active,
.nav-links a:hover {
  color: #2c3e50;
}
.nav-item > a:not(.external).router-link-active,
.nav-item > a:not(.external):hover {
  margin-bottom: -2px;
  border-bottom: 2px solid #46bd87;
}
</style>
