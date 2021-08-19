<template>
  <div class="profile__wrapper">
    <Snackbar :message="loginMessage" :imageURL="imageURL" />
  </div>
</template>
<script>
import Snackbar from "./Snackbar.vue";
import { MakeSpotifyGETRequest } from "../scripts/spotify.js";
export default {
  name: "Profile",
  data() {
    return {
      profile: null,
    };
  },
  components: {
    Snackbar,
  },
  computed: {
    loginMessage() {
      if (!this.profile) {
        return "";
      }
      if (this.$route.query.newToken) {
        return this.$t("logged_in_as", { name: this.profile.display_name });
      }
      return this.$t("welcome_back", { name: this.profile.display_name });
    },
    imageURL() {
      if (this.profile?.images[0].url) {
        return this.profile.images[0].url;
      }
      return "";
    },
  },
  methods: {
    loadProfile() {
      MakeSpotifyGETRequest("https://api.spotify.com/v1/me").then((profile) => {
        this.profile = profile;
      });
    },
  },
  mounted() {
    this.loadProfile();
  },
};
</script>

<style lang="scss" scoped>
.profile__circle {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  border: solid black;

  &.__placeholder {
    display: flex;
    justify-content: center;
    align-items: center;

    .profile__circle-letter {
      font-size: 40pt;
      font-weight: bold;
    }
  }
}
</style>