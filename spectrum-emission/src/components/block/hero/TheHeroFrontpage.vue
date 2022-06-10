<template>
  <section :class="{ tabletFrontHero: tabletSize, pcFrontHero: pcSize }"  class="the-hero-frontpage">
    <BasePicture
      imgClass="hero-picture"
      imgSrc="se-woman"
      altTxt="spectrum emission front page"
    >
      <BaseH1 text="Spectrum " heading1="Emission" />
    </BasePicture>
  </section>
</template>

<script>
import BaseH1 from "@/components/base/BaseH1.vue";
import BasePicture from "@/components/base/BasePicture.vue";
export default {
  components: { BaseH1, BasePicture },
    data() {
    return {
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
};
</script>

<style scoped>
.the-hero-frontpage {
  margin-top: 100px;
}
</style>
