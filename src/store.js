import Vue from "vue";
import Vuex from "vuex";
import discussion_store from "./store/discussion_store"
import detail_store from "./store/detail_store"
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    discussion_store:discussion_store,
    detail_store:detail_store
  }
});
