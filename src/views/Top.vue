<template>
  <div class="top-view__wrapper">
    <h1>Your Music Spotlight</h1>
    <CategoryToggle
      @category-changed="handleCategoryChange"
      @timerange-changed="handleTimeRangeChange"
    />
    <TopList :listItems="topItems" />
    <Profile />
  </div>
</template>
<script>
import { MakeSpotifyGETRequest } from "../scripts/spotify";
import { ConvertArtists, ConvertTracks } from "../scripts/converter";
import TopList from "../components/TopList.vue";
import CategoryToggle from "../components/CategoryToggle.vue";
import Profile from "../components/Profile.vue"
export default {
  name: "Top",
  data() {
    return {
      category: "tracks",
      timeRange: "medium_term",
      topItems: [],
    };
  },
  components: {
    TopList,
    CategoryToggle,
    Profile
  },
  methods: {
    getData() {
      let url = `https://api.spotify.com/v1/me/top/${this.category}?time_range=${this.timeRange}`;
      MakeSpotifyGETRequest(url)
        .then((results) => {
          return this.category === "artists"
            ? ConvertArtists(results.items)
            : ConvertTracks(results.items);
        })
        .then((items) => (this.topItems = items))
        .catch((err) => console.log(err));
    },
    handleCategoryChange(selection) {
      this.category = selection;
    },
    handleTimeRangeChange(selection) {
      this.timeRange = selection;
    },
  },
  watch: {
    category() {
      this.getData();
    },
    timeRange() {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
</style>