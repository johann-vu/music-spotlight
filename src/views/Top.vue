<template>
    <h1>Top</h1>
    <select v-model="visible">
        <option value="tracks">Tracks</option>
        <option value="artists">Artists</option>
    </select>
    <TopList :listItems="visibleItems" />
</template>
<script>
import { MakeSpotifyGETRequest } from '../scripts/spotify'
import { ConvertArtists, ConvertTracks } from "../scripts/converter";
import TopList from '../components/TopList.vue';
export default {
    name:"Top",
    data() {
        return {
            visible: 'tracks',
            topTracks: [],
            topArtists:[]
        }
    },
    computed: {
        visibleItems() {
            return this.visible === 'tracks' ? this.topTracks : this.topArtists;
        }
    },
    components: {
        TopList
    },
    methods: {
        getTopArtists() {
            MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/artists")
            .then(res => this.topArtists = ConvertArtists(res.items))
            .catch(err => console.log(err))
        },
        getTopTracks() {
            MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/tracks")
            .then(res => this.topTracks = ConvertTracks(res.items))
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getTopArtists()
        this.getTopTracks()
    }
}
</script>