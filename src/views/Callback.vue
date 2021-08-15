<template>
  <div class="callback__wrapper">
    <Profile
      v-if="success && profile != null"
      :username="this.profile.display_name"
      :imageURL="this.profile?.images[0].url"
    />
    <router-link v-if="success" to="/top" class="yms__button">{{ $t("continue") }}</router-link>
    <div v-if="!success">{{ $t("error_occured") }}</div>
    <router-link v-if="!success" to="/" class="yms__button">{{ $t("back") }}</router-link>
  </div>
</template>
<script>
import { EvaluateCallback, MakeSpotifyGETRequest } from "../scripts/spotify";
import Profile from "../components/Profile.vue";
export default {
  name: "Callback",
  data() {
    return {
      success: false,
      profile: null,
    };
  },
  components: { Profile },
  methods: {
    getProfile() {
      MakeSpotifyGETRequest("https://api.spotify.com/v1/me")
        .then((profile) => {
          this.profile = profile;
        })
        .catch(() => (this.success = false));
    },
    evaluateCallback() {
      var result = EvaluateCallback();
      console.log(result);
      this.success = result;
      this.getProfile();
    },
  },
  mounted() {
    this.evaluateCallback();
  },
};
</script>

<style scoped>
.callback__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>