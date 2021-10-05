<template>
  <div class="welcome__start">
    <span class="welcome__title">Your<br />Music<br />Spotlight</span>
    <div class="welcome__spacer"></div>
    <router-link
      v-if="username"
      to="/top"
      class="welcome__auth-link yms__button"
      >{{ $t("welcome_back", { name: username }) }}</router-link
    >
    <a v-else class="welcome__auth-link yms__button" @click="login">{{
      $t("lets_go")
    }}</a>
  </div>
</template>

<script>
import {
  StartLogin,
  HasValidToken,
  MakeSpotifyGETRequest,
} from "../scripts/spotify";
export default {
  name: "Welcome",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      StartLogin();
    },
    tryOldToken() {
      if (HasValidToken()) {
        MakeSpotifyGETRequest("https://api.spotify.com/v1/me").then(
          (profile) => {
            this.username = profile.display_name;
          }
        );
      }
    },
  },
  mounted() {
    this.tryOldToken();
  },
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

.welcome__spacer {
  height: 10vh;
}

.welcome__title {
  font-weight: bold;
  font-size: 72pt;
  line-height: 100%;
}

@media only screen and (max-width: 600px) {
  .welcome__title {
    font-size: 50pt;
  }
}
</style>