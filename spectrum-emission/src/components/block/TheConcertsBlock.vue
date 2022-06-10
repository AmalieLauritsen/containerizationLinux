<template>
  <section class="concerts-block" id="TheConcertsBlock">
    <BaseH2 theme="dark" heading2="Up Coming Concerts" />
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="concerts-container">
      <BaseConcert />
    </div>
  </section>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";
import BaseConcert from "@/components/base/BaseConcert.vue";
export default {
  name: "TheConcertsBlock",
  components: {
    BaseH2,
    BaseConcert,
  },
};
</script>

<style></style>
