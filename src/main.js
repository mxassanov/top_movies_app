import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";

const routes = [
  {
    path: "/",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
