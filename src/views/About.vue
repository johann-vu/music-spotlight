<template>
  <div class="about">
    <h1>{{ $t("about_title") }}</h1>
    <h2>{{ $t("privacy_headline") }}</h2>
    <p>{{ $t("about_data_paragraph") }}</p>
    <p>{{ $t("about_permissions_paragraph") }}</p>
    <h2>{{ $t("acknowledgements_headline") }}</h2>
    <ul>
      <li v-for="ack in acknowledgements" :key="ack.title">
        <a :href="ack.url">{{ ack.title }}</a> ({{ack.license}})
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        }
      ],
    };
  },
};
</script>