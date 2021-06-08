<template>
  <div class="flexible">
    <div class="flexible--icon">
      <vLottiePlayer
        name="workoutMonkeyAnim"
        loop
        width="100%"
        height="100%"
        :animationData="require('../../assets/animation/scrumlaunch.json')"
      />
    </div>

    <div class="flexible--text">
      <h2 class="header-1">We build flexible teams with client business goals <br />in mind</h2>
      <p class="body-1">Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p>
    </div>
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
.flexible {
  padding: 158px 20px 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 80px;
  overflow: hidden;

  &--icon {
    position: absolute;
    top: -48px;
    left: -48px;
    width: 395.2px;
    height: 387.72px;
  }

  &--text {
    text-align: left;
    width: 67.3%;
    color: #1E1F21;

    h2 {
      margin-bottom: 16px;
    }
  }
}

@media screen and (min-width: 768px) {
  .flexible {
    padding: 208px 3.9% 0;
    margin-bottom: 140px;

    &--icon {
      position: absolute;
      top: -36px;
      left: -44px;
      width: 526px;
      height: 526px;
    }

    &--text {
      text-align: left;
      width: 73.45%;
      color: #1E1F21;

      h2 {
        margin-bottom: 24px;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .flexible {
    padding: 304px 8.34% 0;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 240px;

    &--icon {
      position: absolute;
      top: -128px;
      left: -28px;
      width: auto;
      height: auto;
    }

    &--text {
      text-align: left;
      width: 59.3%;
      color: #1E1F21;

      h2 {
        margin-bottom: 40px;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 150%;
      }
    }
  }
}
</style>
