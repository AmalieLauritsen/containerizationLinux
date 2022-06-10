<template>
  <h6 :data-text="text" class="base-h6" :class="theme">
    {{ heading6 }}
  </h6>
</template>

<script>
export default {
  props: ["heading6", "text", "theme"],
};
</script>

<style></style>
