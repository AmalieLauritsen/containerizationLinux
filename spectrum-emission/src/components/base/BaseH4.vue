<template>
  <h4 :data-text="text" class="base-h4" :class="theme">
    {{ heading4 }}
  </h4>
</template>

<script>
export default {
  props: ["heading4", "text", "theme"],
};
</script>

<style></style>
