<template>
  <div class="movies-pagination d-flex justify-content-center">
    <pagination
      ref="pagination"
      v-model="currentPageNumber"
      :records="total"
      :per-page="perPage"
      :options="paginationOptions"
      @paginate="pageChanged"
    />
  </div>
</template>

<script>
import Pagination from "v-pagination-3";
import { mapActions } from "vuex";

export default {
  name: "MoviesPagination",
  components: {
    Pagination,
  },
  props: {
    currentPageNum: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPageNumber: this.currentPageNum,
      paginationOptions: {
        chunk: 5,
        theme: "bootstrap4",
        chunksNavigation: "scroll",
        edgeNavigation: true,
      },
    };
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChanged",
      flush: "post",
      deep: true,
    },
  },
  methods: {
    ...mapActions("moviesStore", ["changeCurrentPage"]),
    pageChanged(page) {
      this.$router.push({ query: { page } });
    },
    onPageQueryChanged({ page = 1 }) {
      this.$refs.pagination.setPage(Number(page));
      this.changeCurrentPage(Number(page));
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  margin-top: auto;
}
.movies-pagination::v-deep(.pagination .page-item .page-link) {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination::v-deep(.pagination .page-item.active .page-link) {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}

.movies-pagination::v-deep(.pagination .page-item.active .page-link) {
  color: #000;
}

.movies-pagination::v-deep(.VuePagination nav) {
  text-align: center;
}
</style>
