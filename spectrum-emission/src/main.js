import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab, far);

// BOOSTRAP (breadcrumbs)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import { Breadcrumb } from "bootstrap-vue/es/components";
// Vue.use(Breadcrumb);
// Vue.config.productionTip = false
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
