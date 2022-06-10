<template>
  <section class="the-youtube-block" id="TheYoutubeBlock">
    <BaseH2 text="Spectrum " heading2="Emission Music" />
    <div v-if="error">
      {{ error }}
    </div>
    <div :class="{ tabletYoutube: tabletSize, pcYoutube: pcSize }" v-else>
      <div
        v-for="video in videos"
        :key="video.id"
        class="youtube-video-container"
      >
        <div class="frame">
          <!-- <iframe
            width="330"
            height="220"
            :src="video.videoLink"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
          <iframe
            :src="video.videoLink"
            title="YouTube video player"
            frameborder="0"
        
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";
import axios from "axios";
export default {
  components: { BaseH2 },
  data() {
    return {
      videos: [],
      error: null,
      tabletSize: false,
      pcSize: false,
      windowWidth: null,
    };
  },
  // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 750 && this.windowWidth < 1050) {
        this.tabletSize = true;
        this.pcSize = false;
        return;
      }

      if (this.windowWidth >= 1050) {
        this.pcSize = true;
        this.tabletSize = false;
        return;
      } else {
        this.tabletSize = false;
        this.pcSize = false;
        return;
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/home-page?populate=%2A"
        "http://localhost:1337/home-page"
      );
      this.videos = response.data.musicvideo;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
 