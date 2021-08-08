<template>
  <div>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 999">
      <div
        ref="toast"
        id="liveToast"
        class="toast hide"
        :class="color"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">{{ title }}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          <h4>{{ message }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "bootstrap";
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  data() {
    return {
      title: "",
      message: "",
      color: "",
    };
  },
  computed: {
    ...mapGetters(["messagePool"]),
  },
  watch: {
    messagePool: "showNotification",
  },
  methods: {
    async showNotification({ title = "", msg = "", color = "bg-primary" }) {
      this.title = title;
      this.message = msg;
      this.color = color;
      await this.$nextTick(() => {
        this.initToast();
      });
    },
    initToast() {
      const toast = new Toast(this.$refs.toast);
      toast.show();
    },
  },
};
</script>

<style scoped></style>
