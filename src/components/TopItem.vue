<template>
  <div class="top-item__wrapper" :style="{ 'background-color': accentColour }">
    <div class="top-item__content" @click="openURL">
      <div class="top-item__image-wrapper">
        <img class="top-item__image" :src="internalItem.imageURL" />
      </div>
      <div class="top-item__infos">
        <p class="top-item__title">{{ internalItem.title }}</p>
        <span class="top-item__sub-title">{{
          internalItem.subtitle ? internalItem.subtitle : "-"
        }}</span>
      </div>
    </div>
    <div
      class="top-item__cover top-item__cover-one"
      :style="{ 'background-color': accentColour }"
      :class="{ '--open': open }"
    ></div>
    <div
      v-if="isFirst"
      class="top-item__cover top-item__cover-two --is-first"
      :class="{ '--open': open }"
    ></div>
    <div
      v-else
      :style="{ 'background-color': oldAccentColour }"
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
      oldAccentColour: "#FFFFFF",
      accentColour: "#FFFFFF",
      open: false,
      isFirst: true,
      internalItem: {
        title: "",
        subtitle: "",
        imageURL: "",
      },
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "",
          subtitle: "",
          imageURL: "",
        };
      },
    },
  },
  methods: {
    openURL() {
      window.location = this.internalItem.url;
    },
    openItem() {
      this.open = true;
      return new Promise((resolve) => setTimeout(resolve, 750));
    },
    closeItem() {
      this.open = false;
      return new Promise((resolve) => setTimeout(resolve, 750));
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
  watch: {
    item() {
      this.oldAccentColour = this.accentColour;
      this.closeItem()
        .then(() => {
          this.internalItem = this.item;
          return this.setAccentColor();
        })
        .then(() => {
          return this.openItem();
        })
        .then(() => (this.isFirst = false));
    },
  },
};
</script>
<style lang="scss" scoped>
$cover-animation-duration: 0.5s;
$cover-animation-delay: 0.25s;
$item-heigth: 10vh;
$min-item-height: 80px;

.top-item__wrapper {
  height: $item-heigth;
  min-height: $min-item-height;
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

    &.--is-first {
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

  .top-item__image-wrapper {
    height: 100%;
    min-width: $min-item-height;
    width: $item-heigth;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .top-item__image {
      flex: none;
      height: 100%;
    }
  }

  .top-item__infos {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    .top-item__title {
      font-weight: bold;
      font-size: 20pt;
      margin: 0 0 5px 0;
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