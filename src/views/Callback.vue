<template>
<div class="callback__wrapper">
    <img class="callback__circle" v-if="profile.images && profile.images.length != 0" :src="profile.images[0].url" alt="">
    <div class="callback__circle __placeholder" v-else></div>
    <p>Welcome {{ profile.display_name }}!</p>
</div>
</template>
<script>
import { EvaluateCallback, MakeSpotifyGETRequest } from '../scripts/spotify'
export default {
    name:"Callback",
    data() {
        return {
            success: false,
            profile: null
        }
    },
    methods: {
        getProfile() {
            MakeSpotifyGETRequest("https://api.spotify.com/v1/me")
            .then(profile => {
                this.profile = profile
                console.log(profile);
            })
            .catch(
                this.success = false
            )
        }
    },
    mounted() {
        var result = EvaluateCallback()
        console.log("Callback success: " + result);
        this.getProfile()
    }
}
</script>

<style scoped>
.callback__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.callback__circle {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    border: solid black;
}

.__placeholder {
    background-color: lightgray;
}
</style>