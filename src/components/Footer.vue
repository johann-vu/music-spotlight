<template>
  <div class="footer__wrapper">
    <a
      class="footer__icon-wrapper"
      href="https://github.com/johann-vu/music-spotlight"
    >
      <img class="footer__icon --dark" src="@/assets/github-icon-light.svg" />
      <img class="footer__icon --light" src="@/assets/github-icon-dark.svg" />
    </a>
    <div
      v-if="showDarkMode"
      class="footer__icon-wrapper"
      @click="toggleDarkMode"
    >
      <img class="footer__icon --light" src="@/assets/night-icon.svg" />
      <img class="footer__icon --dark" src="@/assets/sun-icon.svg" />
    </div>
  </div>
  
</template>

<script>
import { ToggleDarkMode } from "../scripts/darkMode.js";
import { Config } from "../config";
export default {
  name: "Footer",
  methods: {
    toggleDarkMode() {
      ToggleDarkMode();
    },
  },
  computed: {
    showDarkMode() {
      return Config.EnableDarkMode;
    },
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