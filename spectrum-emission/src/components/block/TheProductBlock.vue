<template>
 <div  :class="{tabletProductItem:tabletSize,pcProductItem:pcSize}" class="single-product-wrapper">
  <BaseBreadcrumbs />
  <section  class="products-block">
    <BaseH2 theme="color" :heading2="product.title" />
    <div class="product-item">
      <!-- <img
        class="img-product"
        :src="product.attributes.thumbnail.data.attributes.url"
        alt="Product item image"
      /> -->
      <img src="@/assets/img/merch.png" alt="products images" class="product-img">
      <div class="description-wrapper">
        <p>
          <strong>Description: </strong> <br />
          {{ product.descriptionShort }}
        </p>
      </div>
    </div>
    <div class="price-button-wrapper">
      <p>Price: {{ product.price }}$</p>
      <div class="button-wrapper">
        <!--add to cart button-->
        <button
          @click="addToCart(product)"
          class="base-button-yellow"
          :disabled="itemAlreadyInCart(product)"
        >
          {{ itemAlreadyInCart(product) ? "Added" : "Add to Cart" }}
        </button>
      </div>
    </div>
    <div class="details">
      <h3 class="base-h3">Details:</h3>
      <p>{{ product.descriptionLong }}</p>
    </div>
  
  </section>
 </div>
  <!--TheCart component is used to display items that have been added to the cart and their respective quantities,-->
</template>

<script>
import { ref } from "@vue/reactivity";
import BaseBreadcrumbs from "@/components/base/BaseBreadcrumbs.vue";
import BaseH2 from "@/components/base/BaseH2.vue";
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "TheProductBlock",
  components: {
    BaseBreadcrumbs,
    BaseH2,
  },
  setup() {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });

    function itemAlreadyInCart(product) {
      let inCart = false;

      cart.value.forEach((item) => {
        if (item.id == product.id) {
          inCart = true;
        }
      });

      return inCart;
    }

    function addToCart(request) {
      if (!itemAlreadyInCart.value) {
        const product = JSON.parse(JSON.stringify(request));
        store.commit("addCartItem", product);
      } else {
        alert("Item already added to Cart");
      }
    }

    const tabletSize = ref(null);
    const pcSize = ref(null);
    const windowWidth = ref(null);
    const checkScreen = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value >= 750 && windowWidth.value <= 1050) {
        tabletSize.value = true;
        pcSize.value = false;
      } else if (windowWidth.value >= 1050) {
        pcSize.value = true;
        tabletSize.value = false;
      } else {
        tabletSize.value = false;
        pcSize.value = false;
      }
    };

    return {
      cart,
      itemAlreadyInCart,
      addToCart,
      tabletSize,
      pcSize,
      checkScreen,
      windowWidth,
    };
  },

  data() {
    return {
      // tømt objekt der viser på siden før den nå at KALDE data fra api'en
      product: {

      },
      error: null,
    };
  },
  async mounted() {
    window.scrollTo({ top: 100, left: 100, behavior: "auto" });
    try {
      const response = await axios.get(
        // "https://still-scrubland-97284.herokuapp.com/api/products/" +
        "http://localhost:1337/products/" +
          this.$route.params.id
          // "?populate=%2A"
      );

      this.product = response.data;
    } catch (error) {
      this.error = error;
    }
  },

  // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style></style>
