import { createStore } from "vuex";
import moviesStore from "./modules/movies";
import loaderStore from "./modules/loader";
import notificationStore from "./modules/notification";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
    loaderStore,
    notificationStore,
  },
});

export default store;
