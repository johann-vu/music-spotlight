<template>
  <div class="home">
    <div class="home__start">
      <span class="home__title">Your<br />Music<br />Spotlight</span>
      <a class="home__auth-link">Let's go!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>

.home__start {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.home__auth-link {
  font-size: 16pt;
  font-weight: bold;
}
.home__auth-link:hover {
  cursor: pointer;
  text-decoration: underline black;
}

.home__title {
  font-weight: bold;
  font-size: 72pt;
  line-height: 100%;
}
</style>