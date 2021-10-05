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
    let path = localStorage.getItem('github-pages-path');
    if(path) {
      localStorage.removeItem('github-pages-path');
      this.$router.push(path);
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/base.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0 10%;
}

.app__router-view {
  min-height: 100vh;
}
</style>
