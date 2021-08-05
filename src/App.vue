<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @change-poster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPageNum"
      :per-page="moviesPerPage"
      :total="moviesCount"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MoviesList from "./components/MoviesList";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";

export default {
  name: "App",
  components: {
    MoviesPagination,
    PosterBg,
    MoviesList,
  },
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
}
</style>
