<template>
  <section class="container">
    <div class="content">
      <h1>YouTube Player</h1>
      <p>This is an example of a video player using a YouTube hosted video. There is no source element added to the video only a YouTube ID attribute. This example shows closed captions and an interactive transcript.</p>
    </div>
    <div id="youtube-player">
      <video
        id="video1"
        data-able-player
        preload="auto"
        width="800"
        height="600"
        data-youtube-id="RnuGFhVkIlQ"
      ></video>
    </div>
  </section>
</template>

<script>
export default {
  name: "youtubeplayer",
  mounted() {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  }
};
</script>

<style scoped>
.container {
  padding: 30px;
}
.content {
  max-width: 800px;
  width: 100%;
}
h1 {
  margin-top: 0;
  text-align: left;
}
p {
  margin: 0 0 20px 0;
  text-align: left;
}
#youtube-player {
  margin-top: 50px;
}
</style>