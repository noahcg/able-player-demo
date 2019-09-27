<template>
  <div id="simple-player">
    <video id="video1" data-able-player preload="auto" width="800" height="600">
      <source
        type="video/mp4"
        src="https://exhibitions.ushmm.org/storage/388/df5d493c-3dca-11e8-94fe-0a8fdb86ecba.m4v"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "simpleplayer",
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  }
};
</script>

<style>
</style>