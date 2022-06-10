<template>
  <TheHeader />
  <TheFooter />
</template>
<script>
import TheHeader from "@/components/block/TheHeader.vue";
import TheFooter from "@/components/block/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
#app {
  width: 100%;
}
</style>
