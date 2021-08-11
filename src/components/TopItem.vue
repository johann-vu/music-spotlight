<template>
  <div class="top-item__wrapper" @click="openURL">
    <img class="top-item__image" :src="item.imageURL" />
    <div class="top-item__infos">
      <p class="top-item__title">{{ item.title }}</p>
      <span class="top-item__sub-title">{{ item.subtitle ? item.subtitle : "-" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopItem",
  props: {
    item: Object,
  },
  methods: {
      openURL() {
          window.location = this.item.url;
      }
  }
};
</script>
<style lang="scss" scoped>
.top-item__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
  height: 10vh;

  &:hover {
      cursor: pointer;
      box-sizing: border-box;
      border: solid grey;
  }

  .top-item__image {
      background-color: black;
      flex: none;
      height: 100%;
      margin-right: 16px;
  }

  .top-item__infos {
      .top-item__title {
          font-weight: bold;
          font-size: 24pt;
          margin: 0;
      }

      .top-item__sub-title {
          margin: 0;
      }
  }
}
</style>