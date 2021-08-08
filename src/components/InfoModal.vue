<template>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="movie-info-wrap">
            <header class="movie-info-header">
              <h6 class="movie-header-title">Movie view</h6>
              <b-icon-x class="close-icon" @click="closeModal" />
            </header>
            <div class="movie-info-content">
              <div class="col-sm-4">
                <div class="movie-poster-wrap">
                  <div class="movie-poster" :style="posterStyle"></div>
                </div>
              </div>
              <div class="col-sm-8">
                <h6 class="movie-title">{{ movieTitle }}</h6>
                <div class="movie-rating">
                  <vue3-star-ratings
                    v-model="imdbRating"
                    :number-of-stars="10"
                    disable-click
                    :show-control="false"
                  />
                  <h3 class="movie-rating-count">{{ imdbRatingStr }}</h3>
                </div>
                <p class="movie-description">{{ movie?.Plot }}</p>
                <div class="badges mt-3 mb-4">
                  <h5>
                    <span class="badge bg-success mx-1">{{ movie?.Year }}</span>
                  </h5>
                  <h5>
                    <span class="badge bg-success mx-1">{{
                      movie.Runtime
                    }}</span>
                  </h5>
                  <h5>
                    <span class="badge bg-success mx-1">{{ movie.Genre }}</span>
                  </h5>
                  <h5>
                    <span class="badge bg-success mx-1">{{
                      movie.Language
                    }}</span>
                  </h5>
                </div>
                <table class="table small">
                  <tbody>
                    <tr>
                      <th>Production</th>
                      <td>{{ movie.Production }}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{{ movie.Country }}</td>
                    </tr>
                    <tr>
                      <th>Director</th>
                      <td>{{ movie.Director }}</td>
                    </tr>
                    <tr>
                      <th>Writer</th>
                      <td>{{ movie.Writer }}</td>
                    </tr>
                    <tr>
                      <th>Awards</th>
                      <td>{{ movie.Awards }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imdbRating: Number(this.movie.imdbRating),
      defaultPosterBg:
        "linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)",
    };
  },
  watch: {
    movie(movieItem) {
      this.imdbRating = Number(movieItem?.imdbRating);
    },
  },
  computed: {
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    movieTitle() {
      return this.movie ? this.movie.Title : "";
    },
    imdbRatingStr() {
      return `${this.imdbRating}/10`;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeInfoModal");
    },
  },
};
</script>

<style scoped>
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #ffffff;
}

.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.modal-body {
  padding: 0;
}

.movie-info-content {
  padding: 1rem;
  background-color: #ffffff;
  display: flex;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}

.movie-title {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
  padding-left: 25px;
  font-family: "Arial Black", serif;
}

.movie-rating {
  display: flex;
}

.movie-rating > .vue3-star-ratings__wrapper {
  display: inline-block;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  padding-left: 25px;
}

.movie-rating-count {
  display: inline-block;
  padding: 10px;
  font-family: "Courier New", sans-serif;
  font-style: italic;
}

.movie-description {
  padding: 0 25px;
  font-size: 1.25rem;
  font-weight: 300;
}

.badges {
  padding: 0 25px;
  display: flex;
}

.table {
  margin: 0 25px;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}
</style>
