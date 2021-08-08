<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap d-flex flex-column justify-content-between">
      <div class="move-item-info">
        <h3 class="movie-title" v-text="movie.Title"></h3>
        <span class="movie-year" v-text="movie.Year"></span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col">
          <div class="d-grid gap-2">
            <button
              type="button"
              class="btn btn-outline-light btn-md btn-block"
              @click="emitShowInfo"
            >
              Info
            </button>
          </div>
        </div>
        <div class="col">
          <div class="d-grid gap-2">
            <button
              type="button"
              class="btn btn-outline-light btn-md"
              @click="emitRemoveEvent"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  emits: ["removeItem", "showInfo"],
  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    emitShowInfo() {
      this.$emit("showInfo", this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-out;
  height: 400px;
}

.movie-item:hover {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.03);
}

.movie-item-poster {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movie-info-wrap {
  padding: 20px 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease-out;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-size: 14px;
  color: #fff;
}

.movie-item-controls > .col {
  padding: 0 10px;
}
</style>
