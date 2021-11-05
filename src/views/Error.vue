<template>
  <div class="error_wrapper">
    <div class="error_container">
      <h1 class="error_title">{{ $t("error_title") }}</h1>
      <p class="error_descr">{{ $t("error_description") }}</p>
      <div class="error_details-container">
        <span class="error_details-headline" @click="toggleDetails()">
          <Icon
            name="chevron-right"
            class="error_details-chevron"
            :class="detailsOpen ? '--open' : '--close'"
          />
          {{ $t("error_details-headline") }}
        </span>
        <div
          class="error_details-animation-container"
          :class="detailsOpen ? '--open' : '--close'"
        >
          <span class="error_details-content">
            {{ details }}
          </span>
        </div>
      </div>
      <p class="error_link">
        <router-link to="/">{{ $t("error_link") }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Icon from "../components/util/Icon.vue";
export default {
  name: "ErrorView",
  components: {
    Icon,
  },
  data() {
    return {
      details: this.$route.query.error,
      detailsOpen: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsOpen = !this.detailsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.error_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .error_container {
    max-width: 500px;
    .error_details-container {
      opacity: 0.5;
      .error_details-headline {
        display: flex;
        align-items: center;
        &:hover {
          cursor: pointer;
        }
        .error_details-chevron {
          height: 15px;
          transition: all 0.5s ease;

          &.--open {
            transform: rotate(90deg);
          }
        }
      }

      .error_details-animation-container {
        transition: max-height 0.7s ease-out;
        overflow: hidden;
        max-height: 0;

        &.--open {
          max-height: 25px;
        }

        span {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>