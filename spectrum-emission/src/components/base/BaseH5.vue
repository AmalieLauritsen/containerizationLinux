<template>
  <h5 :data-text="text" class="base-h5" :class="theme">
    {{ heading5 }}
  </h5>
</template>

<script>
export default {
  props: ["heading5", "text", "theme"],
};
</script>

<style></style>
