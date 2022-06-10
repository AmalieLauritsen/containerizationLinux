<template>
  <section class="some-block" id="TheSoMeBlock">
    <BaseH2 text="New " heading2="video out now" />
    <div class="frame">
      <!-- <iframe
        width="330"
        height="200"
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
  </section>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";
import axios from "axios";

export default {
  components: { BaseH2 },
  data() {
    return {
      video: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/home-page?populate=%2A"
        "http://localhost:1337/home-page"
      );
      this.video = response.data.musicvideo[0];
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
