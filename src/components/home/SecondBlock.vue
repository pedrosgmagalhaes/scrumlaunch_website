<template>
  <div class="flexible">
    <div class="flexible--icon">
      <div class="flexible--icon--desktop">
        <vLottiePlayer
          name="scrumlaunchDesktopAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-desktop.json')"
        />
      </div>
      <div class="flexible--icon--tablet">
        <vLottiePlayer
          name="scrumlaunchTabletAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-tablet.json')"
        />
      </div>
      <div class="flexible--icon--mobile">
        <vLottiePlayer
          name="scrumlaunchMobileAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/scrumlaunch-mobile.json')"
        />
      </div>
    </div>

    <div class="flexible--text">
      <h2 class="header-1">We build flexible teams with client business goals <br />in mind</h2>
      <p class="body-1">Stop worrying about recruiting, hiring, payroll, office space, HR, perks for your design and development teams and focus on growing your business.</p>
    </div>
  </div>
</template>

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
    top: -10px;
    left: -20px;
    width: 277px;
    height: 277px;
    z-index: -1;

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
      top: -20px;
      left: 20px;
      width: 426px;
      height: 426px;

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
      left: -60px;
      width: auto;
      height: auto;

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
