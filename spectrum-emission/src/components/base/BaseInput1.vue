<template>
  <input
    v-model="inputValue"
    :class="inputclass"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :id="id"
  />
</template>

<script>
export default {
  props: ["name", "placeholder", "type", "inputclass", "modelValue", "id"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
