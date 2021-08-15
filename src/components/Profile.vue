<template>
  <div class="profile__wrapper">
    <img class="profile__circle" v-if="imageURL" :src="imageURL" />
    <div class="profile__circle __placeholder" v-else>
      <span class="profile__circle-letter">{{ firstChar }}</span>
    </div>
    <span class="profile__username">{{ $t("logged_in_as", { name: username }) }}</span>
  </div>
</template>
<script>
export default {
  name: "Profile",
  props: {
    username: String,
    imageURL: {
      type: String,
      required: false,
    },
  },
  computed: {
    firstChar() {
      return this.username.toUpperCase().charAt(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.profile__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

  .profile__username {
    margin: 20px;
  }
}

.profile__circle {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  border: solid black;

  &.__placeholder {
    display: flex;
    justify-content: center;
    align-items: center;

    .profile__circle-letter {
      font-size: 40pt;
      font-weight: bold;
    }
  }
}
</style>