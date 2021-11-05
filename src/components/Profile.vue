<template>
  <div class="profile__wrapper">
  <Snackbar :open="open" :message="loginMessage" :imageURL="imageURL" />
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
      open: false,
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
      return this.$t("logged_in_as", { name: this.profile.display_name });
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
      return MakeSpotifyGETRequest("https://api.spotify.com/v1/me").then(
        (profile) => {
          this.profile = profile;
        }
      )
      .catch((err) => {
        this.$router.push("/error?error=" + err)
        });
    },
  },
  mounted() {
    this.loadProfile().then(() => {
      this.open = true;
      setTimeout(() => (this.open = false), 3000);
    });
  },
};
</script>