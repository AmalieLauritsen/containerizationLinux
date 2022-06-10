<template>
  <h2 :data-text="text" class="base-h2" :class="theme">
    {{ heading2 }}
  </h2>
</template>

<script>
export default {
  props: ["heading2", "text", "theme"],
};
</script>

<style></style>
