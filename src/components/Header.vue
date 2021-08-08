<template>
  <header class="header">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">MovieDB</a>
        <form class="d-flex">
          <input
            v-model.trim="searchValue"
            class="search-input form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      searchValueDebounce: "",
      timeout: null,
    };
  },
  watch: {
    searchValueDebounce: "onSearchValueChanged",
  },
  computed: {
    searchValue: {
      get() {
        return this.searchValueDebounce;
      },
      set(value) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.searchValueDebounce = value;
        }, 1000);
      },
    },
  },
  methods: {
    ...mapActions("moviesStore", [
      "searchMovies",
      "fetchMovies",
      "toggleSearchState",
    ]),

    onSearchValueChanged(value) {
      if (value.length > 2) {
        this.searchMovies(value);
        this.toggleSearchState(true);
      }
      if (!value) {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}
.navbar {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
.search-input {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}
.search-input:focus {
  box-shadow: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
}
</style>
