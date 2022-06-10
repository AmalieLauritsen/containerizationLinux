<template>
  <div class="base-breadcrumbs">
    <router-link class="link" :to="{ path: '/Store' }">Store > </router-link>
    <!-- <button @click="goBack">{{ this.$route.name }}</button> -->
    <router-link class="link" :to="{ path: '#' }">{{
      product.title
    }}</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      product: {},
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/products/" +
        "http://localhost:1337/products/" +
          this.$route.params.id
      );
      this.product = response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style></style>
