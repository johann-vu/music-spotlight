<template>
  <div class="cat-toggle__wrapper">
    <span
      @click="changeSelection(opt.id)"
      v-for="opt in options"
      :key="opt.id"
      class="cat-toggle__option"
      :class="{'--selected': selected === opt.id}"
      >{{ opt.display }}</span
    >
  </div>
</template>

<script>
export default {
  name: "CategoryToggle",
  data() {
    return {
      options: [
        { id: "tracks", display: this.$t("tracks") },
        { id: "artists", display: this.$t("artists") },
      ],
      selected: "tracks",
    };
  },
  methods: {
    changeSelection(newSelection) {
      this.selected = newSelection;
    },
  },
  watch: {
    selected(newCategory) {
      this.$emit("category-changed", newCategory);
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-toggle__option {
  margin: 5px;
  font-weight: bold;
  opacity: 0.5;
  transition: opacity ease 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &.--selected {
    border-bottom: solid 3px var(--text-color);  
    opacity: 1;
  }
}
</style>