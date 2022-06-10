<template>
  <section :class="{ tabletContactHero: tabletSize, pcContactHero: pcSize }" class="the-hero-contactpage">
    <BasePicture
      imgClass="smaller-hero"
      :imgSrc="pictureHero"
      altTxt="spectrum emission contact page"
    >
    </BasePicture>
     <BaseH1 text="Spectrum " heading1="Emission Contact" />
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
      pictureHero: ''
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
         this.pictureHero = "contact-lady";
        return;
      }

      if (this.windowWidth >= 1050) {
        this.pcSize = true;
        this.tabletSize = false;
         this.pictureHero = "contact-lady2";
        return;
      } else {
        this.tabletSize = false;
        this.pcSize = false;
        this.pictureHero = "contact-lady";
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
