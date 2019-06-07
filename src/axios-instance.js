import Axios from "axios";
import store from "./store";

const http = Axios.create({
  baseURL: "http://localhost:5001/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

http.interceptors.request.use(
  function(config) {
    const token = store.getters["token"];
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;
