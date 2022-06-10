import { createStore } from "vuex";


export default createStore({
  //state property in the above store consists of two properties: products and cart
  state: {
    products: [],
    cart: []
  },

  // Then there are three (3) Vuex mutations that manage the state properties. 
  mutations: {
    addCartItem(state, item) {
      item.quantity = 1;
      state.cart.push(item);
    },
    updateCartItem(state, updatedItem) {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == updatedItem.id) {
          return updatedItem;
        }

        return cartItem;
      });
    },
    removeCartItem(state, item) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.id != item.id;
      });
    },
  },
  modules: {},
  getters: {
    // getCurrentProduct: (state) => state.currentProduct,
    getAllProducts: (state) => state.products
  },
});