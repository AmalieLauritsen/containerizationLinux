<template>
  <div class="product-card">
    
      <!--this link is use to an image-->
      <router-link
        class="link"
        :to="{ name: 'ProductItem', params: { id: product.id } }"
      >
        <!-- <img
          :src="product.attributes.thumbnail.data.attributes.url"
          class="product-img"
          alt="products images"
        /> -->
        <img src="@/assets/img/merch.png" alt="products images" class="product-img">
      </router-link>
      <div class="info-wrapper">
        <h5 class="card-title" style="color: #ebac00">
          {{ product.title }}
        </h5>
        <p class="card-text">
          ${{ product.price }}
          <br />
          <small>
            {{ product.descriptionShort }}
          </small>
          <br />
          <!-- <small>
            {{ product.descriptionLong }}
          </small> -->
        </p>
        <!--implementing the functionality that allows users to click Add to Cart on a product and see it added to the cart widget on the toggle-->
        <button
          @click="addToCart()"
          class="btn btn-primary btn-block"
          :disabled="itemAlreadyInCart"
        >
          {{ itemAlreadyInCart ? "Added" : "Add to Cart" }}
        </button>
      </div>
    
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ShopProduct",
  props: ["product"],

  setup(props) {
    const store = useStore();

    //The cart property references the cart property in the store
    let cart = computed(function () {
      return store.state.cart;
    });

 

    //The itemAlreadyInCart checks if the product using this component has been added to the store or not
    //The itemAlreadyInCart property is also used in the template to disable the Add to Cart button if the product has already been added.
    let itemAlreadyInCart = computed(function () {
      let inCart = false;

      cart.value.forEach((item) => {
        if (item.id == props.product.id) {
          inCart = true;
        }
      });

      return inCart;
    });
    //The addToCart function adds an item to the cart when the Add to Cart button is clicked
    //by calling the addCartItem mutation in the store and passing in the product as a payload.
    //This function first checks if the product is already in the cart. If so, an alert is displayed
    //indicating that the product has already been added. If not, the product is added to the cart.
    function addToCart() {
      if (!itemAlreadyInCart.value) {
        store.commit("addCartItem", props.product);
      } else {
        alert("Item already added to Cart");
      }
    }

    return {
      cart,
      itemAlreadyInCart,
      addToCart,
    };
  },
};
</script>
