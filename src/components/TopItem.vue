<template>
  <div class="top-item__wrapper">
    <div class="top-item__content" @click="openURL">
      <img class="top-item__image" :src="item.imageURL" />
      <div class="top-item__infos">
        <p class="top-item__title">{{ item.title }}</p>
        <span class="top-item__sub-title">{{
          item.subtitle ? item.subtitle : "-"
        }}</span>
      </div>
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
    },
  },
};
</script>
<style lang="scss" scoped>
.top-item__wrapper {
  height: 10vh;
  background-color: blue;
}

.top-item__content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
  height: 100%;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  transition: top ease 0.5s, left ease 0.5s, box-shadow ease 0.5s;

  &:hover {
    cursor: pointer;
    top: -10px;
    left: -10px;
    -webkit-box-shadow: 10px 10px 15px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 10px 10px 15px 2px rgba(0, 0, 0, 0.2);
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