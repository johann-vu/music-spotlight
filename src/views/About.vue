<template>
  <div class="about">
    <h1>{{ $t("about_title") }}</h1>
    <p class="about-view__build-info">{{ $t("version_info", { version: version, hash: buildHash }) }}</p>
    <div class="about-view__segement">
      <h2>{{ $t("privacy_headline") }}</h2>
      <p>{{ $t("about_data_paragraph") }}</p>
      <p>{{ $t("about_permissions_paragraph") }}</p>
      <p>{{ $t("about_google_fonts_paragraph") }}</p>
    </div>
    <div class="about-view__segement">
      <h2>{{ $t("acknowledgements_headline") }}</h2>
      <ul>
        <li v-for="ack in acknowledgements" :key="ack.title">
          <a :href="ack.url">{{ ack.title }}</a> ({{ ack.license }})
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let hash = process.env.VUE_APP_BUILD_HASH
    if (hash) {
      hash = hash.substring(0, 7)
    } else {
      hash = ""
    }
    return {
      version: process.env.VUE_APP_VERSION,
      buildHash: hash,
      acknowledgements: [
        {
          title: "Tabler Icons",
          url: "https://tablericons.com",
          license: "MIT License",
        },
        {
          title: "Node-Vibrant",
          url: "https://github.com/Vibrant-Colors/node-vibrant",
          license: "MIT License",
        },
        {
          title: "Dart Sass",
          url: "https://github.com/sass/dart-sass",
          license: "MIT License",
        },
        {
          title: "Vue",
          url: "https://vuejs.org",
          license: "MIT License",
        },
        {
          title: "Vue Router",
          url: "https://router.vuejs.org",
          license: "MIT License",
        },
        {
          title: "Vue I18n",
          url: "https://kazupon.github.io/vue-i18n",
          license: "MIT License",
        },
        {
          title: "Montserrat",
          url: "https://fonts.google.com/specimen/Montserrat",
          license: "Open Font License",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-view__build-info {
  opacity: 0.6;
}
</style>