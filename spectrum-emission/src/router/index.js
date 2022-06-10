import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      breadCrumb: "Home", //crumb
    },
  },
  {
    path: "/Tickets",
    name: "/Home",
  },
  {
    path: "/Films",
    name: "/Home",
  },
  {
    path: "/Contact",
    name: "/contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/Store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShoppingView.vue"),
    // meta: {
    //   breadCrumb: "Store", //crumb
    // },
  },
  {
    path: "/CartItem",
    name: "CartItem",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/block/CartItem.vue"
      ),
    // meta: {
    //   breadCrumb: "Store", //crumb
    // },
  },
  {
    path: "/ProductItem/:id",
    name: "ProductItem",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ProductItem.vue"
        // meta: {
        //   breadCrumb: "ProductItem", //crumb},
      ),
  },
  {
    path: "/ShoppingCart",
    name: "ShoppingCart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShoppingCart.vue"),
  },
  {
    path: "/part/PartProductFilter",
    name: "PartProductFilter",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/part/PartProductFilter.vue"
      ),
  },

  // catchall 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        top: +100,
        el: to.hash,
        // behavior: "smooth",
      };
    }
  },
});

export default router;
