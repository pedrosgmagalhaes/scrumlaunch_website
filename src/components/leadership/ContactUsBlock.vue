<template>
  <div class="contact-block">
    <div class="contact-block--icon">
      <div class="contact-block--icon--desktop">
        <vLottiePlayer
          name="scrumlaunchLowerDesktopAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-lower-desktop.json')"
        />
      </div>
      <div class="contact-block--icon--tablet">
        <vLottiePlayer
          name="scrumlaunchLowerTabletAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-lower-tablet.json')"
        />
      </div>
      <div class="contact-block--icon--mobile">
        <vLottiePlayer
          name="scrumlaunchLowerMobileAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-lower-mobile.json')"
        />
      </div>
    </div>
    <!-- <inline-svg
      :src="require('@/assets/icons/launch-mobile.svg')"
      class="contact-block--icon icon-mobile"
    />
    <inline-svg
      :src="require('@/assets/icons/launch-desktop.svg')"
      class="contact-block--icon icon-desktop"
    /> -->
    <p class="header-2">Looking to build something amazing? We’d love to help.</p>
    <router-link class="btn" :to="{ name: 'ContactUs'}">contact us</router-link>
  </div>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";

export default {
  components: {
    vLottiePlayer: VueLottiePlayer
  },
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
    z-index: -1;
    left: 0;
    top: -300px;

    &--desktop {
      display: none;
    }

    &--tablet {
      display: none;
    }

    &--mobile {
      display: block;
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
      top: -100px;
      left: -49px;

      &--desktop {
        display: none;
      }

      &--tablet {
        display: block;
      }

      &--mobile {
        display: none;
      }
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
      top: -150px;
      left: -20px;

      &--desktop {
        display: block;
      }

      &--tablet {
        display: none;
      }

      &--mobile {
        display: none;
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
