<template>
  <div class="categories-filter">
    <BaseH4 heading4="Categories" />
    <p id="category-all" @click="showCategory(0)">All</p>
    <div v-for="name in ProductNames" :key="name.id" class="categories-names">
      <p @click="showCategory(name.id)">{{ name.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseH4 from "@/components/base/BaseH4.vue";

let allProducts = [];
export default {
  name: "BaseCategories",
  components: {
    BaseH4,
  },
  data() {
    return {
      ProductNames: [],
      error: null,
    };
  },
  methods: {
    // this function used to filter the products by category
    showCategory(id) {
      // showing all products
      if (allProducts.length == 0) {
        allProducts = this.$store.state.products;
      }
      // if id is equal to 0 show all products
      if(id == 0){
        this.$store.state.products = allProducts;
      }else{
        // else filter the products by category 
        this.$store.state.products = allProducts.filter(function (elem) {
          for (let i = 0; i < elem.categories.length; i++) {
            if (elem.categories[i].id == id) 
            return true;
          }
          return false;
        });
      }
   
    },
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/categories?populate=%2A"
        "http://localhost:1337/categories"
      );
      this.ProductNames = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
