import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import auth from "./modules/auth";
// import axios from "axios";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},
  actions: {},
  modules: { auth },

  plugins: [vuexLocal.plugin],
});
