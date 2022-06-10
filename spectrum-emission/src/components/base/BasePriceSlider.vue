<template>
  <div class="price-slider">
    <BaseH4 heading4="Price" />
    <div class="slider">
      <div class="price-values">
        <p>Min: $0</p>
        <p id="show-max-value">Max: ${{ priceValue }}</p>
      </div>
      <input
        id="max-value"
        type="range"
        min="0"
        max="100"
        :step="priceRangeStep"
        @change="maxPriceValue()"
        v-model="priceValue"
      />
    </div>
  </div>
</template>

<script>
import BaseH4 from "@/components/base/BaseH4.vue";
let allProducts = [];
export default {
  name: "BasePriceSlider",
  components: {
    BaseH4,
  },
  data() {
    return {
      // value: [0],
      priceRangeStep: 5,
      priceValue: 100,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    maxPriceValue() {
      const maxValue = document.getElementById("max-value");
      // var showMaxValue = document.getElementById("show-max-value");
      // showMaxValue.innerHTML = `Max: ${maxValue.value}`; // showMaxValue.innerHTML = "Max: " + maxValue.value;
      let priceArray = [];
      // let priceMessage = "Sorry, there are no products under this price.";
      if (allProducts.length == 0) {
        allProducts = this.$store.state.products;
      }
      for (let i = 0; i < allProducts.length; i++) {
        // maxValue.showMaxValue = function () {
        //   showMaxValue.innerHTML = this.value;
        // };
        if (allProducts[i].price <= maxValue.value) {
          priceArray.push(allProducts[i].title);
          // priceMessage = "";
        }
      }
      // if (priceMessage == "") {
      //   priceArray.forEach((element) => console.log(element));
      // } else {
      //   console.log(priceMessage);
      // }
      this.$store.state.products = allProducts.filter(
        (product) => product.price <= maxValue.value
      );
    },
    // setSteps() {
    //   console.log(this.loanValue);
    // }
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
