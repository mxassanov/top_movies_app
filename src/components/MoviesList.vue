<template>
  <div class="container">
    <h3 class="list-title">IMDB Top 250</h3>
    <div class="row">
      <template v-if="isExist">
        <div class="col-3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover="onMouseOver(movie.Poster)"
          ></MovieItem>
        </div>
      </template>
      <template v-else>Empty list</template>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  components: { MovieItem },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
