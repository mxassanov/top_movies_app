import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import components from "./components";

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

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
