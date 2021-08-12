<template>
  <div class="top-view__wrapper">
    <h1>Top Artists and Tracks</h1>
    <CategoryToggle @category-changed="handleCategoryChange" />
    <TopList :listItems="visibleItems" />
  </div>
</template>
<script>
import { MakeSpotifyGETRequest } from "../scripts/spotify";
import { ConvertArtists, ConvertTracks } from "../scripts/converter";
import TopList from "../components/TopList.vue";
import CategoryToggle from "../components/CategoryToggle.vue";
export default {
  name: "Top",
  data() {
    return {
      visible: "tracks",
      topTracks: [],
      topArtists: [],
    };
  },
  computed: {
    visibleItems() {
      return this.visible === "tracks" ? this.topTracks : this.topArtists;
    },
  },
  components: {
    TopList,
    CategoryToggle,
  },
  methods: {
    getTopArtists() {
      MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/artists")
        .then((res) => (this.topArtists = ConvertArtists(res.items)))
        .catch((err) => console.log(err));
    },
    getTopTracks() {
      MakeSpotifyGETRequest("https://api.spotify.com/v1/me/top/tracks")
        .then((res) => (this.topTracks = ConvertTracks(res.items)))
        .catch((err) => console.log(err));
    },
    handleCategoryChange(selection) {
      this.visible = selection;
    },
  },
  mounted() {
    this.getTopArtists();
    this.getTopTracks();
  },
};
</script>

<style scoped>
.top-view__wrapper {
    min-height: 100vh;
}
</style>