<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Are you sure delete {{ title }}?
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click.prevent="$emit('removeClose')"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="$emit('removeClose')"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="$emit('removeConfirm')"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    title: {
      type: String,
      default: "movie",
    },
  },
  emits: ["removeConfirm", "removeClose"],
};
</script>

<style scoped></style>
