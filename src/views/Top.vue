<template>
    <h1>Top</h1>
    <ul>
        <li v-for="artist in topArtists" :key="artist.uri">{{artist.name}}</li>
    </ul>
    <ul>
        <li v-for="track in topTracks" :key="track.uri">{{track.name}}</li>
    </ul>
</template>
<script>
import { MakeSpotifyGETRequest } from '../scripts/spotify'
export default {
    name:"Top",
    data() {
        return {
            isLoading: true,
            topTracks: [],
            topArtists:[]
        }
    },
    methods: {
        getTopArtists() {
            MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/artists")
            .then(res => this.topArtists = res.items)
            .catch(err => console.log(err))
        },
        getTopTracks() {
            MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/tracks")
            .then(res => this.topTracks = res.items)
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getTopArtists()
        this.getTopTracks()
    }
}
</script>