<template>
  <section class="cart-site-wrapper">
    <section class="cart-item-wrapper">
      <ShoppingProducts :product="product" />
    </section>
    <section class="add-remove-wrapper">
      <button
        @click="changeQuantity('decrease')"
        class="base-button-yellow small-button"
        >
        -
      </button>
       
      <button
        @click="changeQuantity()"
        class="base-button-yellow small-button">
        +
      </button>   
        
      <div class="item-quantity">{{ itemQuantity }}</div>
       
      <button @click="removeItem()" class="base-button-danger">
          Remove Item
      </button>    
     
    </section>
  </section>
</template>

<script>
import ShoppingProducts from "@/components/block/ShoppingProducts.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CartItem",
  props: ["product"],
  components: {
    ShoppingProducts,
  },
  setup(props) {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });

    let itemQuantity = computed(function () {
      let get_product = cart.value.filter(
        (item) => item.id == props.product.id
      );

      return get_product[0].quantity;
    });

    // this is a function for the button "+" to increase the quantity: button "-" to decrease the quantity of the products added to cart
    function changeQuantity(action = "add") {
      if (action == "add") {
        let get_product = cart.value.filter(
          (item) => item.id == props.product.id
        );
        get_product[0].quantity += 1;
        store.commit("updateCartItem", props.product);
      } else {
        if (props.product.quantity > 1) {
          let get_product = cart.value.filter(
            (item) => item.id == props.product.id
          );
          get_product[0].quantity -= 1;
          store.commit("updateCartItem", props.product);
        } else {
          //Remove the item
          store.commit("removeCartItem", props.product);
        }
      }
    }
    
    function removeItem() {
      store.commit("removeCartItem", props.product);
    }

    return {
      cart,
      itemQuantity,
      changeQuantity,
      removeItem,
    };
  },
};
</script>
