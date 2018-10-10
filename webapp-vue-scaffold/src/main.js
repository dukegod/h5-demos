// import "lib-flexible";

import Vue from "vue";
import App from "./App.vue";

import MintUI from "mint-ui";

import resolution from "./utils/resolution";

import "mint-ui/lib/style.css";
resolution();
Vue.use(MintUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
