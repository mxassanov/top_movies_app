<template>
  <div class="container" style="margin-bottom: 20px;">
    <h3 class="list-title" v-text="listTitle"></h3>
    <div class="row">
      <template v-if="isExist">
        <div class="col-3" v-for="(movie, key) in list" :key="key">
          <movie-item
            :movie="movie"
            @mouseover="onMouseOver(movie.Poster)"
            @remove-item="onRemoveItem"
            @show-info="onShowInfo"
          />
        </div>
      </template>
      <template v-else>Empty list</template>
      <my-modal
        :title="movieTitle"
        @remove-confirm="onRemoveConfirm"
        @remove-close="removeID = ''"
      />
    </div>
    <info-modal
      :movie="selectedMovieForInfo"
      v-if="infoID"
      @close-info-modal="onCloseInfoModal"
    />
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["changePoster"],
  data() {
    return {
      removeID: "",
      removeModal: null,
      movieTitle: "",
      infoModal: null,
      infoID: "",
      movieInfo: null,
    };
  },
  computed: {
    ...mapGetters("moviesStore", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    selectedMovieForInfo() {
      return this.infoID ? this.list[this.infoID] : null;
    },
  },
  created() {
    this.removeID = "";
  },
  methods: {
    ...mapActions("moviesStore", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    onRemoveItem({ id, title }) {
      this.removeModal = new Modal(document.getElementById("exampleModal"), {
        backdrop: "static",
      });
      this.removeModal.show();
      this.removeID = id;
      this.movieTitle = title;
    },
    onRemoveConfirm() {
      this.removeMovie(this.removeID);
      this.removeModal.hide();
      this.showNotify({
        msg: "Movie was removed",
        color: "bg-success",
        title: "Success!",
      });
    },
    onShowInfo(id) {
      this.infoID = id;
      this.$nextTick(() => {
        this.infoModal = new Modal(document.getElementById("modal"));
        this.infoModal.show();
      });
    },
    onCloseInfoModal() {
      this.infoID = null;
      this.infoModal.hide();
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #ffffff;
}
</style>
