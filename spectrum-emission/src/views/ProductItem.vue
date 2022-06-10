<template>
  <!-- <h1>This Page is for Product Item</h1> -->
   <div v-show="isButtonShown" @click="toggleCart" class="cart-button">
      <div class="icon-wrapper">
        <fa :icon="['fa', 'cart-shopping']" />
      </div>
      {{ cartQuantity }}
      <p>Cart</p>
    </div>
<main>
  
        <TheProductBlock />

</main>
   

   <aside>
    <TheCart @close-cart="toggleCart" v-show="isCart" />
  </aside>
</template>

<script>
import { ref } from "@vue/reactivity";
import TheProductBlock from "@/components/block/TheProductBlock.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import TheCart from "@/components/block/TheCart.vue";

export default {
  name: "ProductItem",
  props: ["id"],
  components: {
    TheProductBlock,
    TheCart,
  },
  setup(props) {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });

    let itemAlreadyInCart = computed(function () {
      let inCart = false;

      cart.value.forEach((item) => {
        if (item.id == props.product.id) {
          inCart = true;
        }
      });

      return inCart;
    });

    function addToCart() {
      if (!itemAlreadyInCart.value) {
        store.commit("addCartItem", props.product);
      } else {
        alert("Item already added to Cart");
      }
    }

      let cartQuantity = computed(function () {
      return store.state.cart.length;
      
    });


       const isCart = ref(false);
    const isButtonShown = ref(true);
    const toggleCart = () => {
      isCart.value = !isCart.value;
      isButtonShown.value = !isButtonShown.value;
    };

    return {
      cart,
      itemAlreadyInCart,
      addToCart,
       isCart,
      isButtonShown,
      toggleCart,
      cartQuantity
    };
  },
    mounted() {
    window.scrollTo(0, 0);
  },

};
</script>

<style lang="scss"></style>
