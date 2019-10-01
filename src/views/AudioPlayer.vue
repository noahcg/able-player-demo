<template>
  <section class="container">
    <div class="content">
      <h1>Audio Player</h1>
      <p>This is an example of an audio player with a source element and an .mp3 "src" attribute. This example shows the most basic features of Able Player.</p>
    </div>
    <div id="audio-player">
      <audio id="audio1" width="480" preload="auto" data-able-player>
        <source
          type="audio/mpeg"
          src="https://encyclopedia.ushmm.org/asset/7a639b01-b5dc-4506-bd9c-b56ad6fba978.mp3"
        />
      </audio>
    </div>
  </section>
</template>

<script>
export default {
  name: "audioplayer",
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
#audio-player {
  margin-top: 50px;
}
</style>