<template>
  <div id="app">
    <router-view  />
    <service-worker-update-popup />

    <div>
      <MusicPlayer></MusicPlayer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServiceWorkerUpdatePopup from "@/pwa/components/ServiceWorkerUpdatePopup.vue";
import MusicPlayer from "@/views/music/musicPlayer.vue";

@Component({
  name: "App",
  components: {
    ServiceWorkerUpdatePopup,
    MusicPlayer
  }
})
export default class extends Vue {
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    const sessiontore: string = sessionStorage.getItem("store") || "";
     if (sessionStorage.getItem("store") ) {
     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessiontore)))
     }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      console.log(this.$store.state);
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }

 
 
}
</script>

