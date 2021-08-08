<template>
  <div v-if="isShowLoader" class="loader-wrap">
    <div class="spinner-grow text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
</style>
