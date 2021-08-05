import { createStore } from "vuex";
import moviesStore from "./modules/movies";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
  },
});

store.dispatch("initMoviesStore");

export default store;
