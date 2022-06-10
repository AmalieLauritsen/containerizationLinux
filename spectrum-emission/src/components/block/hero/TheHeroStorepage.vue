<template>
  <section :class="childclass" class="the-hero-storepage">
    <BasePicture
      imgClass="hero-store-picture"
      imgSrc="se-store"
      altTxt="spectrum emission store page"
    >
    <div class="text-wrapper">
    
      <p class="slogan"> Get infected <br>
      Spread joy <br>
      Listen to <br>
      Sprectrum Emission </p>
      <BaseH1 text="Spectrum " heading1="Emission Store" />
    </div>
  
    </BasePicture>
  </section>
</template>

<script>
import BaseH1 from "@/components/base/BaseH1.vue";
import BasePicture from "@/components/base/BasePicture.vue";
export default {
  components: { BaseH1, BasePicture },
  props:['childclass'],
};
</script>

<style scoped>
.the-hero-frontpage {
  margin-top: 100px;
}
</style>
