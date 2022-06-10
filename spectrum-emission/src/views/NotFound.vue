<template>
  <main class="not-found">
    <BaseH2 theme="light" heading2="404" />
    <img
      class="logo-header"
      alt="Spectrum Emission logo"
      src="@/assets/img/se-logo.png"
    />
    <BaseH3
      theme="light"
      heading3="Sorry, we could not find the page you were looking for"
    />
  </main>
</template>

<script>
import BaseH2 from "@/components/base/BaseH2.vue";
import BaseH3 from "@/components/base/BaseH3.vue";
export default {
  components: {
    BaseH2,
    BaseH3,
  },
};
</script>

<style></style>
