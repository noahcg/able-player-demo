<template>
  <section class="container">
    <div class="content">
      <h1>Video Player</h1>
      <p>This is an example of a video player using a source element with a .m4v "src" attribute. This example has no closed captions and no transcript.</p>
    </div>
    <div id="single-player">
      <video
        id="video1"
        data-able-player
        preload="none"
        width="800"
        height="600"
        poster="https://exhibitions.ushmm.org/storage/520/4d4c6404-4326-11e8-82b2-0a8fdb86ecba.jpeg"
      >
        <source
          type="video/mp4"
          src="https://exhibitions.ushmm.org/storage/388/df5d493c-3dca-11e8-94fe-0a8fdb86ecba.m4v"
        />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: "videoplayer",
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
#single-player {
  margin-top: 50px;
}
</style>