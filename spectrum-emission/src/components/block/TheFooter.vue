<template>
  <footer :class="{tabletFooter:tabletSize,pcFooter:pcSize}">
    <!--This data from api will throw an error if not found else if the data from api will found then it shows up-->
    <div v-if="error">
      {{ error }}
    </div>
    <div class="contact-block" v-else>
      <BaseH2 theme="dark" :heading2="titles" />
      <TheContactPart />
    </div>
  </footer>
</template>

<script>
import TheContactPart from "@/components/part/TheContactPart.vue";
import BaseH2 from "@/components/base/BaseH2.vue";
import axios from "axios";
export default {
  components: { TheContactPart, BaseH2 },
  data() {
    return {
      titles: {},
      error: null,
      tabletSize:false,
      pcSize:false,
      windowWidth: null,
    };
  },
    // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods:{
      checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 750 && this.windowWidth < 1050)  {
        this.tabletSize = true;
        this.pcSize = false;
        return;
      }
      
      if (this.windowWidth >= 1050) {
        this.pcSize = true;
        this.tabletSize = false;
        return;
      } else{
         this.tabletSize = false;
          this.pcSize = false;
          return;
      }
      
    },
  },

  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/footer?populate[]=titletext&populate[]=contactinformation&populate[]=contactinformation.contact&populate[]=contactinformation.adress&populate[]=somenavbar&populate[]=spectrumemission"
        "http://localhost:1337/footer"
      );
      this.titles = response.data.titletext.title;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
