<template>
  <div class="snackbar__wrapper">
    <div v-if="open" class="snackbar__body">
      <img v-if="imageURL" :src="imageURL" class="snackbar__image" />
      <span class="snackbar__message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  data() {
    return {
      open: true,
    };
  },
  props: {
    imageURL: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.snackbar__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  .snackbar__body {
    margin: 30px;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    border: solid var(--text-color);
    background-color: var(--bkg-color);

    .snackbar__image {
        height: 50px;
        margin-right: 10px;
    }
  }
}
</style>