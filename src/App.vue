<template>
  <div id="app">
    <navbar />
    <notification />
    <loader />
    <poster-bg :poster="posterBg" />
    <movies-list :list="moviesList" @change-poster="onChangePoster" />
    <movies-pagination
      :current-page="currentPageNum"
      :per-page="moviesPerPage"
      :total="moviesCount"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      posterBg: "",
    };
  },
  computed: {
    ...mapGetters("moviesStore", [
      "moviesList",
      "currentPageNum",
      "moviesPerPage",
      "moviesCount",
    ]),
  },
  methods: {
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
