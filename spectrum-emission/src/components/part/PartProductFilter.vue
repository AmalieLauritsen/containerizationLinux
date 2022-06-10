<template>
  <aside :class="newClass" class=" shop-filters">
    <div class="icon-wrapper">
          <fa :icon="['fas', 'arrow-left']" @click="$emit('closeFilter')"/> 

    </div>
    <BaseSearchBar  />
    <BaseCategories />
    <BasePriceSlider />
  </aside>
</template>

<script>
import BaseSearchBar from "@/components/base/BaseSearchBar.vue";
import BaseCategories from "@/components/base/BaseCategories.vue";
import BasePriceSlider from "@/components/base/BasePriceSlider.vue";

export default {
  name: "PartProductFilter",
  components: {
    BaseSearchBar,
    BaseCategories,
    BasePriceSlider,
  },
  props:[ 'newClass']
};
</script>

<style></style>
