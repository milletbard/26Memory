import Vue from "vue";
import App from "@/components/App.vue";
import ElementUI from "element-ui";
import store from "@/store";
import router from "@/router";

import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "bulma/css/bulma.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
