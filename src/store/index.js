import Vue from "vue";
import Vuex from "vuex";
import http from "../axios-instance";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    isAuthenticated: true,
    loading: false,
    token: "",
    admin: {
      users: [],
      config: {
        sentosa: {}
      }
    }
  },
  mutations: {
    loading: state => {
      state.loading = !state.loading;
    },
    login_success: state => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
    }
  },
  actions: {},
  getters: {
    token({ token }) {
      return token;
    }
  }
});
export default store;
