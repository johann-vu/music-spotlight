<template>
  <div class="error_wrapper">
    <div class="error_container">
      <h1 class="error_title">{{$t("error_title")}}</h1>
      <p class="error_descr">{{$t("error_description")}}</p>
      <router-link to="/">{{$t("error_link")}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style lang="scss" scoped>
.error_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .error_container {
    max-width: 500px;
  }
}
</style>