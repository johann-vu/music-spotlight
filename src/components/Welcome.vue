<template>
  <div class="welcome__start">
    <span class="welcome__title">Your<br />Music<br />Spotlight</span>
    <div class="welcome__spacer"></div>
    <a class="welcome__auth-link" @click="login">Let's go!</a>
  </div>
</template>

<script>
import { StartLogin } from "../scripts/spotify";
export default {
  name: "Welcome",
  methods: {
      login() {
          StartLogin()
      }
  }
};
</script>

<style scoped>
.welcome__start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.welcome__auth-link {
  font-size: 16pt;
  font-weight: bold;
  border: solid black;
  padding: 6px;
  transition: background-color 0.4s, color 0.4s;
}
.welcome__auth-link:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}

.welcome__spacer{
    height: 10vh;
}

.welcome__title {
  font-weight: bold;
  font-size: 72pt;
  line-height: 100%;
}
</style>