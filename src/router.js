import Vue from "vue";
import Router from "vue-router";
import YoutubePlayer from "./views/YoutubePlayer.vue";
import SimplePlayer from "./views/SimplePlayer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "youtubeplayer",
      component: YoutubePlayer
    },
    {
      path: "/simpleplayer",
      name: "simpleplayer",
      component: SimplePlayer
    }
  ]
});
