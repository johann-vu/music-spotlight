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
        { id: "tracks", display: "Tracks" },
        { id: "artists", display: "Artists" },
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

  &:hover {
    cursor: pointer;
  }

  &.--selected {
    text-decoration: underline;
    text-decoration-color: var(--text-color);
  }
}
</style>