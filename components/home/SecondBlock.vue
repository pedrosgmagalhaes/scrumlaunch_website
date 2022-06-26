<template>
  <div class="flexible">
    <div class="flexible--icon">
      <div class="flexible--icon--desktop">
        <lottie
          name="scrumlaunchDesktopAnim"
          loop
          :options="{
            animationData: require('../../assets/animation/scrumlaunch-desktop.json'),
          }"
        />
      </div>

      <div class="flexible--icon--tablet">
        <lottie
          name="scrumlaunchTabletAnim"
          loop
          :options="{
            animationData: require('../../assets/animation/scrumlaunch-tablet.json'),
          }"
        />
      </div>

      <div class="flexible--icon--mobile">
        <lottie
          name="scrumlaunchMobileAnim"
          loop
          :options="{
            animationData: require('../../assets/animation/scrumlaunch-mobile.json'),
          }"
        />
      </div>
    </div>

    <div class="flexible--text">
      <div class="h2_wrap">
        <h2 class="header-1">
          <AppearFromMask><span>Scale your software</span></AppearFromMask>
          <AppearFromMask><span>development team.</span></AppearFromMask>
          <AppearFromMask><span>Fast.</span></AppearFromMask>
          <!-- <div class="v1">
						<AppearFromMask><span>We build flexible</span></AppearFromMask>
						<AppearFromMask><span>teams with client</span></AppearFromMask>
						<AppearFromMask><span>business goals</span></AppearFromMask>
						<AppearFromMask><span>in mind</span></AppearFromMask>
					</div>

					<div class="v2">
						<AppearFromMask><span>We build flexible teams</span></AppearFromMask>
						<AppearFromMask><span>with client business</span></AppearFromMask>
						<AppearFromMask><span>goals in mind</span></AppearFromMask>
					</div>

					<div class="v3">
						<AppearFromMask><span>We build</span></AppearFromMask>
						<AppearFromMask><span>flexible teams</span></AppearFromMask>
						<AppearFromMask><span>with client</span></AppearFromMask>
						<AppearFromMask><span>business goals</span></AppearFromMask>
						<AppearFromMask><span>in mind</span></AppearFromMask>
					</div> -->
        </h2>
      </div>

      <AppearFromMask>
        <!-- <p class="body-1">
					Stop worrying about recruiting, hiring, payroll, office
					space, HR, perks for your design and development teams and
					focus on growing your business. Whether you're hiring python,
					Node JS, ruby, or mobile developers, ScrumLaunch can easily
					match and scale with your needs.
				</p> -->
        <p class="body-1">
          Get access to best in class development resources that can scale with
          your needs. ScrumLaunch is consistent in success. Our client's
          outperform industry benchmarks of business success by 5x.
        </p>
      </AppearFromMask>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  components: {
    lottie,
  },
}
</script>

<style lang="scss" scoped>
.header-1 {
  & :deep(span) {
    display: inline-block;
  }

  .v1 {
    display: none;
  }

  .v2 {
    display: none;
  }

  .v3 {
    display: block;
  }
}

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
    color: #1e1f21;

    .h2_wrap {
      margin-bottom: 16px;
    }
  }
}

@media screen and (min-width: 768px) {
  .header-1 {
    & :deep(span) {
      display: inline-block;
    }

    .v1 {
      display: block;
    }

    .v3 {
      display: none;
    }
  }

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
      color: #1e1f21;

      .h2_wrap {
        margin-bottom: 24px;
      }
    }
  }
}

@media screen and (min-width: 1140px) {
  .header-1 {
    .v1 {
      display: none;
    }
    .v2 {
      display: block;
    }
  }
}

@media screen and (min-width: 1280px) {
  .header-1 {
    .v1 {
      display: block;
    }
    .v2 {
      display: none;
    }
  }

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
      color: #1e1f21;

      .h2_wrap {
        margin-bottom: 40px;
      }

      p {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 150%;
      }
    }
  }
}

@media screen and (min-width: 1900px) {
  .header-1 {
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
  }

  .body-1 {
    max-width: 730px;
  }
}
</style>
