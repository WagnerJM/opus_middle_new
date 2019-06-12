import Vue from "vue";
import Vuex from "vuex";
import http from "../axios-instance";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    isAuthenticated: true,
    loading: false,
    token: "",
    message: "",
    showListLoader: false,
    user: {},
    admin: {
      users: [],
      config: {
        sentosa: {}
      }
    },
    sentosaList: []
  },
  mutations: {
    listLoader: state => {
      state.showListLoader = !state.showListLoader;
    },
    loading: state => {
      state.loading = !state.loading;
    },
    login_success: state => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
    setToken: (state, payload) => {
      state.token = payload.token;
      state.message = payload.message;
    },
    setMessage: (state, payload) => {
      state.message = payload.message;
    },
    setUserData: (state, payload) => {
      state.user = payload.user;
    },
    setAuftrag: (state, payload) => {
      state.sentosaList = payload;
    }
  },
  actions: {
    LOGIN({ commit, dispatch }, payload) {
      commit("loading");
      http
        .post("/login", {
          username: payload.username,
          password: payload.password
        })
        .then(res => {
          commit("setToken", res.data);
          commit("login_success");
          router.push("/");
          commit("loading");
          dispatch("GET_INITIAL_DATA");
        })
        .catch(error => {
          console.log(error);
        });
    },
    LOGOUT({ commit }) {
      //logout
      commit("loading");
      http
        .post("/logout")
        .then(res => {
          commit("setMessage", res.data);
          router.push("/login");
          commit("logout");
          //TODO: remove all data from store
        })
        .catch(error => {
          console.log(error);
        });
    },
    GET_INITIAL_DATA({ commit, dispatch }) {
      //gets initial data (userData, settings)
      http
        .get("/user")
        .then(res => {
          commit("setUserData", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    PREPARE_SENTOSA_LIST({ commit, state }) {
      let tempList = [];
      commit("listLoader");
      tempList.push({ pos: 1, anr: "00000000", untersuchung: "pk" });
      tempList.push({ pos: 2, anr: "00000000", untersuchung: "nk" });
      //set pk, nk according settings
      /*
      if (state.admin.config.sentosa.auto_pk_anfang) {
        tempList.push({ pos: 1, anr: "00000000", untersuchung: "pk" });
      }
      if (state.admin.config.sentosa.auto_nk_anfang) {
        tempList.push({ pos: 2, anr: "00000000", untersuchung: "nk" });
      }
      */
      //let array = state.admin.config.sentosa.sentosa_unters;

      // für jede Untersuchung in dem Array mach ein axios call zum GET Endpoint mit ?untersuchung=sentosaUntersuchung['bezeichnung]
      //for (var i = 0; i < sentosaUntersuchungen.lenght(); i++) {}
      /*
      
      for (let i = 0; i < array.length; i++) {
        http
          .get(`/auftrag?untersuchung=${array[i]}`)
          .then(res => {
            tempList.push(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      } 
      */
      //for each http call => push to sentosaList
      commit("setAuftrag", tempList);
      //sentosaList.length()
      commit("listLoader");
    }
  },
  getters: {
    token({ token }) {
      return token;
    },
    sentosaList({ sentosaList }) {
      return sentosaList;
    }
  }
});
export default store;
