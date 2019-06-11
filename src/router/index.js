import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import DeviceView from "../views/DeviceView.vue";
import SentosaHome from "../views/app/sentosa/Home.vue";
import SentosaList from "../views/app/sentosa/List.vue";

import Login from "../views/auth/Login.vue";
import Logout from "../views/auth/Logout.vue";

import Admin from "../views/admin/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
        {
          path: "/logout",
          name: "logout",
          component: Logout,
          beforeEnter(to, from, next) {
            if (store.state.isAuthenticated) {
              next();
            } else {
              next("/login");
            }
          }
        },

    {
      path: "/",
      name: "deviceView",
      component: DeviceView,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },

    {
      path: "/sentosa",
      name: "sentosaHome",
      component: SentosaHome,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },

    {
      path: "/sentosa/list",
      name: "sentosaList",
      component: SentosaList,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    }
  ]
});
