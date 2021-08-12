<template>
  <div class="footer__wrapper">
    <a
      class="footer__icon-wrapper"
      href="https://github.com/johann-vu/music-spotlight"
    >
      <img class="footer__icon" src="@/assets/GitHub-Mark-64px.png" />
    </a>
  </div>
</template>

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
    }
  }
}
</style>