<template>
  <main :class="{tabletCheckout:tabletSize,pcCheckout:pcSize}" v-show="isCheckout" class="checkout-message-wrapper"> 
    <div class="checkout-message">
        <div class="icon-wrapper">
          <fa :icon="['fas', 'times']" @click="toggleCheckout"/> 

    </div>
      <BaseH1 text="Something " heading1="is wrong"/>
      <strong> This is a fake webshop, for a fake band.  <br> </strong>
      The merchandise you see are all fake, the music isn't fake though. <br>
      It was made by Katharina from the team.   <br>
      The pictures of the two ladys are from this pexel user: <br>
      https://www.pexels.com/da-dk/@alipazani 
    </div>
    </main>

<main v-show="!isCheckout" :class="{tabletCartView:tabletSize,pcCartView:pcSize}" class="the-cart-wrapper">
  <BaseBreadcrumbs/>
<div v-if="!cart.length" class="empthy-cart-wrapper">
  <div   class="empthy-cart" >
<BaseH1 text="Your " heading1="cart is empthy"/>
<p>Would you like to return back to the store?</p>
 <router-link :to="{ name: 'Store' }">
<BaseButton>
    Yes 
</BaseButton> </router-link>
</div>
</div>
  <section class="cart-wrapper" >


    <BaseH1  v-if="cart.length" text="Your " heading1="cart"/>
      <section class="cart-grid">
        <!--CartItem component to display any item added to the cart with buttons to increase or decrease the quantity of the item in the cart or remove it completely. -->
        <CartItem
          v-for="product in cart"
          :product="product"
          :key="product.id"
        />
      </section>
    <div v-if="cart.length" class="check-out-button-wrapper">
   <BaseButton @click="toggleCheckout">
    To Checkout
</BaseButton>
  </div>
     

    </section>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import CartItem from "@/components/block/CartItem.vue";
// import TheCart from "@/components/block/TheCart.vue";
import BaseH1 from "@/components/base/BaseH1.vue"
import BaseButton from "@/components/base/BaseButton.vue"
import BaseBreadcrumbs from "@/components/base/BaseBreadcrumbs.vue"
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
    // TheCart,
    BaseBreadcrumbs, 
    BaseH1, 
    BaseButton
  },
  setup() {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });
    
      const isCheckout = ref(false);
    
    const toggleCheckout = () => {
      isCheckout.value = !isCheckout.value;
     
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
      cart,
      isCart, 
      isButtonShown,
      toggleCart, 
        tabletSize,
      pcSize, 
      checkScreen, 
      windowWidth, 
      isCheckout, 
      toggleCheckout
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
