<template>
  <div class="contact-block">
    <inline-svg
      :src="require('@/assets/icons/launch-mobile.svg')"
      class="contact-block--icon icon-mobile"
    />
    <inline-svg
      :src="require('@/assets/icons/launch-desktop.svg')"
      class="contact-block--icon icon-desktop"
    />
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
  justify-content:space-between;
  margin-right: 0px;
  margin-bottom: 80px;
  position: relative;
  padding: 0 20px;

  &--icon {
    position: absolute;
    left: 0;
    top: -300px;

    &.icon-mobile {
      display: block;
    }

    &.icon-desktop {
      display: none;
    }
  }

  p {
    margin-right: 8px;
    width: 58.9%;
    text-align: left;
  }
}

@media screen and (min-width: 768px) {
  .contact-block {
    justify-content: flex-end;
    margin-right: 0px;
    margin-bottom: 140px;
    padding: 0 30px;

    &--icon {
      position: absolute;
      top: -100px;
    }

    p {
      margin-right: 29px;
      width: 46.7%;
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 34px;
    margin-bottom: 240px;
    position: relative;
    padding: 0 8.34%;

    &--icon {
      position: absolute;
      top: -150px;

      &.icon-mobile {
        display: none;
      }

      &.icon-desktop {
        display: block;
      }
    }

    p {
      margin-right: 8px;
      width: 35.3%;
      text-align: left;
    }
  }
}
</style>
