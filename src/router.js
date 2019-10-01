import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import YoutubePlayer from "./views/YoutubePlayer.vue";
import VideoPlayer from "./views/VideoPlayer.vue";
import AudioPlayer from "./views/AudioPlayer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/youtubeplayer",
      name: "youtubeplayer",
      component: YoutubePlayer
    },
    {
      path: "/videoplayer",
      name: "videoplayer",
      component: VideoPlayer
    },
    {
      path: "/audioplayer",
      name: "audioplayer",
      component: AudioPlayer
    }
  ]
});
