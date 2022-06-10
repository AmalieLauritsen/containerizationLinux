<template>
  <div class="base-search-bar">
    <input type="text" id="search-input" placeholder="  Search..." />
    <BaseButton @click="searchButton()"
      >Search <i style="font-size: 15px" class="fa fa-search"></i
    ></BaseButton>
    <p id="no-search-results"></p>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
let allProducts = [];
export default {
  name: "BaseSearchBar",
  components: {
    BaseButton,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    searchButton() {
      const searchInput = document.getElementById("search-input").value;
      let re = new RegExp(`${searchInput}`, "i");
      let searchArray = [];
      let noSearchResults = document.getElementById("no-search-results");
      let searchMessage = `Sorry, there were no products matching "${searchInput}"`;
      if (allProducts.length == 0) {
        allProducts = this.$store.state.products;
        this.$emit("toggle-value");
      }

      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].title.match(re)) {
          searchArray.push(allProducts[i].title);
          this.$emit("toggle-value");
          searchMessage = "";
          noSearchResults.innerHTML = " ";
        }
      }
      if (searchMessage == "") {
        // searchArray.forEach((element) => console.log(element));
        this.$emit("toggle-value");
        this.$store.state.products = allProducts.filter((product) =>
          product.title.match(re)
        );
      } else {
        // empty product arry
        this.$store.state.products = {};
        // 'No products were found'-message
        noSearchResults.innerHTML = searchMessage;
      }
    },
    emitToggle() {},
  },
};
</script>
