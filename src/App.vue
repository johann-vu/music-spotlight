<template>
  <router-view class="app__router-view" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import { StartListeningForDarkMode } from "./scripts/darkMode.js";
export default {
  components: {
    Footer,
  },
  mounted() {
    StartListeningForDarkMode();
  },
};
</script>

<style lang="scss">
@import "@/styles/base.scss";

body {
  margin: 0;
  padding: 0 10%;
}

.app__router-view {
  min-height: 100vh;
}
</style>
