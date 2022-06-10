<template>
  <!-- <div class="home container"> -->
 <div  :class="{tabletHeader:tabletSize,pcHeader:pcSize}" class="hero-container">
    <TheHeroStorepage  />
   </div>   
 
  <div @click="toggle" class="filter-button">
    <div class="icon-wrapper">
      <fa :icon="['fa', 'magnifying-glass-plus']" />
    </div>

    <p>Filter & search</p>
  </div>

  <div v-show="isButtonShown" @click="toggleCart" class="cart-button">
    <div class="icon-wrapper">
      <fa :icon="['fa', 'cart-shopping']" />
    </div>
    {{ cartQuantity }}
    <p>Cart</p>
  </div>
  <div :class="{tabletFilter:tabletSize,pcFilter:pcSize}" class="filter-wrapper">
    <PartProductFilter @close-filter="toggle" v-show="isFilter" />
  </div>
  <main id="main" class="wrapper-main">
    <section>
      <div
        :class="{tabletGrid:tabletSize,pcGrid:pcSize}"
        class="store-wrapper"
      >
        <!--
          The first task is to ensure that the products are loaded from the store instead of being hard-coded on the shoppingview
          The ShoppingProduct component displaying the products from api:
          -->
        <ShoppingProducts
          v-for="product in products"
          :product="product"
          :key="product.id"
        />
      </div>
    </section>
  </main>
  <!--TheCart component is used to display items that have been added to the cart and their respective quantities,-->
  <aside :class="{tabletCart:tabletSize,pcCart:pcSize}">
    <TheCart @close-cart="toggleCart" v-show="isCart" />
  </aside>

  <BasePagination />
  <!-- </div> -->
</template>

<script>
import { ref } from "@vue/reactivity";
import ShoppingProducts from "@/components/block/ShoppingProducts.vue";
import TheCart from "@/components/block/TheCart.vue";
// import ShopProducts from "@/components/block/ShopProducts.vue";
// import ShopCart from "@/components/block/ShopCart.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import TheHeroStorepage from "@/components/block/hero/TheHeroStorepage.vue";
import PartProductFilter from "@/components/part/PartProductFilter.vue";

const api =
  // "https://still-scrubland-97284.herokuapp.com/api/products?populate=%2A";
  "http://localhost:1337/products";

export default {
  name: "ShoppingView",
  components: {
    ShoppingProducts,
    TheCart,
    BasePagination,
    // ShopProducts,
    // ShopCart,
    TheHeroStorepage,
    PartProductFilter,
  },

  setup() {
    const store = useStore();

    (async () => {
      try {
        const response = await axios.get(api);
        store.state.products = response.data;
      } catch (error) {
        alert(error);
      }
    })();

    // the products variable has now been replaced with a computed property with the same name that references the store to load the products.
    let products = computed(function () {
      return store.state.products;
    });

    let cart = computed(function () {
      return store.state.cart;
    });

    let cartQuantity = computed(function () {
      return store.state.cart.length;
    });

    const isFilter = ref(false);
    const isShown = ref(true);
    const toggle = () => {
      isFilter.value = !isFilter.value;
      isShown.value = !isShown.value;
    };

    const isCart = ref(false);
    const isButtonShown = ref(true);
    const toggleCart = () => {
      isCart.value = !isCart.value;
      isButtonShown.value = !isButtonShown.value;
    };

    const tabletSize = ref(null);
    const pcSize = ref(null);
    const windowWidth = ref(null);
    const checkScreen = () => {
    
     windowWidth.value = window.innerWidth;
      if (windowWidth.value >= 750 && windowWidth.value <= 1050) {
        
        tabletSize.value = true;
        pcSize.value = false;
       
      }
        else if (windowWidth.value >= 1050) {
        pcSize.value = true;
        tabletSize.value = false;
      
      } else{
         tabletSize.value = false;
          pcSize.value = false;
      }


    };

    return {
      products,
      cart,
      isFilter,
      isShown,
      isCart,
      isButtonShown,
      toggle,
      cartQuantity,
      toggleCart,
      tabletSize,
      pcSize, 
      checkScreen, 
      windowWidth
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
    // lifecycle hook: this resize applied when checkscreen is called
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  }
  
};
</script>
