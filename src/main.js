import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlashMessage from "@smartweb/vue-flash-message";
Vue.use(FlashMessage);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
