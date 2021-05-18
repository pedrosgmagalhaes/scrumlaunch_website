<template>
  <div class="contact-block">
    <p class="header-2">Looking to build something amazing? We’d love to help.</p>
    <router-link class="btn" :to="{ name: 'Home'}">contact us</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 34px;
  margin-bottom: 240px;
  position: relative;

  &--icon {
    position: absolute;
    top: -128px;
    left: -28px;
  }

  p {
    margin-right: 8px;
    width: 35.3%;
  }
}
</style>
