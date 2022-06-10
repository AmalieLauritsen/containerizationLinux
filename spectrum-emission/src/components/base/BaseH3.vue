<template>
  <h3 :data-text="text" class="base-h3" :class="theme">
    {{ heading3 }}
  </h3>
</template>

<script>
export default {
  props: ["heading3", "text", "theme"],
};
</script>

<style></style>
