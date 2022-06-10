<template>
  <section class="cart-slide">
  
    <div class="h-wrapper">
      <h5 class="">Your Cart 
    </h5>
    <div class="icon-wrapper">
      <fa :icon="['fas', 'arrow-left']" @click="$emit('closeCart')"/> 

    </div>
      </div>
      <p  class="no-products" v-if="cart.length == 0">Your Cart is Empty</p>
   
    <ul >
      <li
        v-for="item in cart"
        :key="item.id"
        class=""
      >
      <b>Q:</b> {{ item.quantity }}  <b> Item: </b> {{ item.title }}
      <span> <b> Price: </b> {{ item.price * item.quantity }}$</span>
      </li>
      <li
        class=""
      >
        Total Price <b>${{ totalPrice }}</b>
      </li>
    </ul>
    <!--The Cart component also consists of a Checkout button which will navigate to the full shopping cart details page shown below when clicked:-->
    <div class="checkout-btn-wrapper"
    >
      <router-link 
       to="/ShoppingCart" class="base-button-yellow"
        >Checkout</router-link
      >
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TheCart",
  setup() {
    const store = useStore();

    // reference to the cart state property in the store
    let cart = computed(function () {
      return store.state.cart;
    });

    //A totalPrice computed property is also used to evaluate the total cost of all items currently added to the shopping cart.
    let totalPrice = computed(function () {
      let total = 0;
      cart.value.forEach((element) => {
        total += element.price * element.quantity;
      });
      return total;
    });

    // let totalQuantity = computed(function(){
    //   let total = 0;
    //   cart.value.forEach((element)=> {
    //     total += element.quantity;
    //   });
    //   return total;
    // })
    

    return {
      cart,
      totalPrice,
      // totalQuantity
    };
  },
};
</script>
