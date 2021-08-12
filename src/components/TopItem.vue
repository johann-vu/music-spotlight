<template>
  <div class="top-item__wrapper" :style="{'background-color': accentColour}">
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
import * as Vibrant from "../../node_modules/node-vibrant/dist/vibrant.js";
export default {
  name: "TopItem",
  data() {
    return {
      accentColour: "#FFFFFF",
      oldAccentColour: "#FFFFFF"
    };
  },
  props: {
    item: Object,
  },
  methods: {
    openURL() {
      window.location = this.item.url;
    },
    setAccentColor() {
      return Vibrant.from(this.item.imageURL)
        .getPalette()
        .then((palette) => {
          const hex = palette.Vibrant.getHex();
          if (hex) {
            this.oldAccentColour = this.accentColour;
            this.accentColour = hex;
          }
        })
    },
  },
  mounted() {
    this.setAccentColor()
  }
};
</script>
<style lang="scss" scoped>
.top-item__wrapper {
  height: 10vh;
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