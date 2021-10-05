<template>
  <div class="snackbar__wrapper">
    <transition name="slide">
      <div v-if="open" class="snackbar__body">
        <img v-if="imageURL" :src="imageURL" class="snackbar__image" />
        <span class="snackbar__message">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    imageURL: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    open: Boolean,
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
    margin: 30px 10vw;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    border: solid var(--text-color);
    background-color: var(--bkg-color);

    transition: all 0.8s ease;

    &.slide-enter,
    &.slide-leave-to {
      transform: translateX(30px);
      opacity: 0;
    }

    .snackbar__image {
      height: 50px;
      margin-right: 10px;
    }
  }
}
</style>