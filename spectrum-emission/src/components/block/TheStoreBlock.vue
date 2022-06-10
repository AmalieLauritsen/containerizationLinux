<template>
  <section :class="{ tabletStoreBlock: tabletSize, pcStoreBlock: pcSize }" class="the-store-block">
    <BaseH2 :heading2="title" />

    <div class="picture-container">
      <BasePicture
        imgClass="big-phone"
        imgSrc="merch"
        altTxt="Recent product import"
      >
      </BasePicture>
    </div>

    <BaseCard newClass="yellow wide-card">
      <BaseH3 :heading3="text" theme="dark"> </BaseH3>

      <router-link :to="{ name: 'Store' }">
        <BaseButton>{{ buttonText }}</BaseButton></router-link
      >
    </BaseCard>
  </section>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";
import BaseH3 from "@/components/base/BaseH3.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BasePicture from "@/components/base/BasePicture.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import axios from "axios";
export default {
  components: { BaseH2, BaseH3, BaseButton, BasePicture, BaseCard },
  data() {
    return {
      title: "",
      text: "",
      buttonText: "",
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
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/home-page?populate[]=shop&populate[]=shop.titletext&populate[]=shop.gotostoreButton"
        "http://localhost:1337/home-page"
      );
      this.title = response.data.shop[0].titletext.title;
      this.text = response.data.shop[0].titletext.text;
      this.buttonText =
        response.data.shop[0].gotostoreButton.text;
    } catch (error) {
      this.error = error;
    }
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

<style></style>
