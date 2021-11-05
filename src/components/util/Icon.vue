<template>
  <div class="icon_wrapper">
    <img class="--dark" :src="lightIconPath" />
    <img class="--light" :src="darkIconPath" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  computed: {
    lightIconPath() {
      return `${process.env.VUE_APP_BASE_PATH}assets/${this.name}-light.svg`;
    },
    darkIconPath() {
      return `${process.env.VUE_APP_BASE_PATH}assets/${this.name}-dark.svg`;
    },
  },
  props: {
    name: String,
  },
};
</script>

<style scoped>
img {
    height: inherit;
}
.--light {
  display: var(--dark-mode-hidden);
}
.--dark {
  display: var(--dark-mode-visible);
}
</style>