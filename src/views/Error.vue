<template>
  <div class="error_wrapper">
    <div class="error_container">
      <h1 class="error_title">{{$t("error_title")}}</h1>
      <p class="error_descr">{{$t("error_description")}}</p>
      <div class="error_details-container">
        <p class="error_details-headline">
          <Icon name="chevron-right" class="error_details-chevron"/>
          {{$t("error_details-headline")}}
          </p>
      </div>
      <router-link to="/">{{$t("error_link")}}</router-link>
    </div>
  </div>
</template>

<script>
import Icon from '../components/util/Icon.vue'
export default {
  name: "ErrorView",
  components: {
    Icon
  }
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
        }
      }
    }
  }
}
</style>