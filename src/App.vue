<template>
  <div id="app">
    <video
      id="video1"
      data-able-player
      preload="auto"
      width="800"
      height="600"
      data-youtube-id="RnuGFhVkIlQ"
    ></video>
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
  margin-top: 60px;
}
</style>
