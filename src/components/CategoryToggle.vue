<template>
  <div class="cat-toggle__wrapper">
    <div class="cat-toggle__toggle-set">
      <span
        @click="changeCategory(opt.id)"
        v-for="opt in categories"
        :key="opt.id"
        class="cat-toggle__option"
        :class="{ '--selected': selectedCategory === opt.id }"
        >{{ opt.display }}</span
      >
    </div>
    <div class="cat-toggle__divider"></div>
    <div class="cat-toggle__toggle-set">
      <span
        @click="changeTimeRange(opt.id)"
        v-for="opt in timeRanges"
        :key="opt.id"
        class="cat-toggle__option"
        :class="{ '--selected': selectedTimeRange === opt.id }"
        >{{ opt.display }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryToggle",
  data() {
    return {
      categories: [
        { id: "tracks", display: this.$t("tracks") },
        { id: "artists", display: this.$t("artists") },
      ],
      selectedCategory: "tracks",
      timeRanges: [
        { id: "short_term", display: this.$t("short_term") },
        { id: "medium_term", display: this.$t("medium_term") },
        { id: "long_term", display: this.$t("long_term") },
      ],
      selectedTimeRange: "medium_term",
    };
  },
  methods: {
    changeCategory(newSelection) {
      this.selectedCategory = newSelection;
    },
    changeTimeRange(newSelection) {
      this.selectedTimeRange = newSelection;
    },
  },
  watch: {
    selectedCategory(newCategory) {
      this.$emit("category-changed", newCategory);
    },
    selectedTimeRange(newTimeRange) {
      this.$emit("timerange-changed", newTimeRange);
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-toggle__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cat-toggle__toggle-set {
  margin-top: 10px;
  overflow-x: scroll;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &:first-of-type {
    margin-right: 20px;
  }
}

.cat-toggle__option {
  margin: 5px;
  font-weight: bold;
  opacity: 0.5;
  transition: opacity ease 0.5s;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &.--selected {
    opacity: 1;
  }
}
</style>