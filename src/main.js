import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myServerHttp from "@/plugins/http.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 使用 axios
Vue.use(myServerHttp);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
