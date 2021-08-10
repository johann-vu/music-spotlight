<template>
  <h1>Authorization</h1>
  <div class="callback__wrapper">
    <div class="callback__wrapper" v-if="profile != null">
      <img
        class="callback__circle"
        v-if="profile?.images.length != 0"
        :src="profile?.images[0].url"
      />
      <div class="callback__circle __placeholder" v-else>
          <span class="callback__circle-letter">{{firstChar}}</span>
      </div>
      <p>Welcome {{ profile.display_name }}!</p>
    </div>
  </div>
</template>
<script>
import { EvaluateCallback, MakeSpotifyGETRequest } from "../scripts/spotify";
export default {
  name: "Callback",
  data() {
    return {
      success: false,
      profile: null,
    };
  },
  computed: {
      firstChar() {
          if (this.profile?.display_name) {
              return this.profile.display_name.toUpperCase().charAt(0)
          }
          return ''
      }
  },
  methods: {
    getProfile() {
      MakeSpotifyGETRequest("https://api.spotify.com/v1/me")
        .then((profile) => {
          this.profile = profile;
          console.log(profile);
        })
        .catch((this.success = false));
    },
  },
  mounted() {
    var result = EvaluateCallback();
    console.log("Callback success: " + result);
    this.getProfile();
  },
};
</script>

<style scoped>
.callback__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
}

.callback__circle {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  border: solid black;
}

.__placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.callback__circle-letter {
    font-size: 40pt;
    font-weight: bold;
}
</style>