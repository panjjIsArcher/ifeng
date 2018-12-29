import 'babel-polyfill'
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index"
import './style/swiper/swiper.min.css';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  store:store,
  router:router,
  render: h => h(App)
}).$mount("#app");
