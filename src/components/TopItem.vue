<template>
  <div class="top-item__wrapper" :style="{ 'background-color': accentColour }">
    <div class="top-item__content" @click="openURL">
      <img class="top-item__image" :src="item.imageURL" />
      <div class="top-item__infos">
        <p class="top-item__title">{{ item.title }}</p>
        <span class="top-item__sub-title">{{
          item.subtitle ? item.subtitle : "-"
        }}</span>
      </div>
    </div>
    <div
      class="top-item__cover top-item__cover-one"
      :style="{ 'background-color': accentColour }"
      :class="{ '--open': open }"
    ></div>
    <div
      class="top-item__cover top-item__cover-two"
      :class="{ '--open': open }"
    ></div>
  </div>
</template>
<script>
import * as Vibrant from "../../node_modules/node-vibrant/dist/vibrant.js";
export default {
  name: "TopItem",
  data() {
    return {
      accentColour: "#FFFFFF",
      open: false,
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
            this.accentColour = hex;
          }
        });
    },
  },
  mounted() {
    this.setAccentColor().finally(() => {
      console.log("done");
      this.open = true;
    });
  },
};
</script>
<style lang="scss" scoped>
$cover-animation-duration: 0.5s;
$cover-animation-delay: 0.25s;

.top-item__wrapper {
  height: 10vh;
  min-height: 80px;
  position: relative;

  .top-item__cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width ease-in-out $cover-animation-duration;

    &.top-item__cover-one {
      transition-delay: $cover-animation-delay;
    }

    &.top-item__cover-two {
      background-color: var(--bkg-color);
    }

    &.--open {
      left: unset;
      right: 0;
      width: 0;
    }
  }
}

.top-item__content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
  height: 100%;
  background-color: var(--bkg-color);
  position: relative;
  top: 0;
  left: 0;
  transition: top ease 0.5s, left ease 0.5s, box-shadow ease 0.5s;
  overflow: hidden;

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
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      
    .top-item__title {
      font-weight: bold;
      font-size: 24pt;
      margin: 0;
    }

    .top-item__sub-title {
      margin: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .top-item__infos {
      .top-item__title {
        font-size: 16pt;
      }
    }
  }
}
</style>