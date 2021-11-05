<template>
  <div class="footer__wrapper">
    <router-link
      class="footer__icon-wrapper"
      to="/about"
    >
      <Icon name="info-icon" class="footer__icon"/>
    </router-link>
    <a
      class="footer__icon-wrapper"
      href="https://github.com/johann-vu/music-spotlight"
    >
      <Icon name="github-icon" class="footer__icon"/>
    </a>
    <div
      class="footer__icon-wrapper"
      @click="toggleDarkMode"
    >
      <Icon name="dark-mode-icon" class="footer__icon"/>
    </div>
    <div
      v-if="canLogout"
      class="footer__icon-wrapper"
      @click="logout"
    >
      <Icon name="logout-icon" class="footer__icon"/>
    </div>
  </div>
  
</template>

<script>
import { ToggleDarkMode } from "../scripts/darkMode.js";
import { RemoveToken, HasValidToken } from "../scripts/spotify.js";
import Icon from './util/Icon.vue'
export default {
  name: "Footer",
  data() {
    return {
      canLogout: false
    };
  },
  components: {
    Icon
  },
  mounted() {
    this.canLogout = HasValidToken()
  },
  methods: {
    toggleDarkMode() {
      ToggleDarkMode();
    },
    logout() {
      RemoveToken();
      this.canLogout = false
      this.$router.push("/")
    }
  },
};
</script>

<style lang="scss" scoped>
.footer__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  .footer__icon-wrapper {
    margin: 0 5px;
    .footer__icon {
      height: 32px;
      width: 32px;
      opacity: 0.6;
      transition: opacity 0.5s;
      color: var(--text-color);

      &.--light {
        display: var(--dark-mode-hidden);
      }
      &.--dark {
        display: var(--dark-mode-visible);
      }
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>