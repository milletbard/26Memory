import Vue from "vue";
import App from "@/components/App.vue";
import ElementUI from "element-ui";
import store from "@/store";
import router from "@/router";
import locale from "element-ui/lib/locale";
import lang from "element-ui/lib/locale/lang/zh-TW";

import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "bulma/css/bulma.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
locale.use(lang);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
