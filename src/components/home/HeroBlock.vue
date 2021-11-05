<template>
  <div class="hero">
    <div class="hero--text-wrapper">

      <AppearFromMask><p class="header-big">Product Design</p></AppearFromMask>
      <AppearFromMask><p class="header-big">& Software</p></AppearFromMask>
      <AppearFromMask><p class="header-big">Development</p></AppearFromMask>
      <AppearFromMask><p class="header-big">for Startups</p></AppearFromMask>

      <!-- <h1 class="header-big">Product Design<br />& Software<br />Development<br />for Startups</h1> -->
      <inline-svg
        :src="require('@/assets/illustrations/illustration-map.svg')"
        class="hero--text-wrapper--illustration"
      />
    </div>
    <div class="hero--bottom">
      <SocialBlock />
      <inline-svg
        :src="require('@/assets/icons/scroll-down.svg')"
      />
    </div>
  </div>
</template>

<script>
import SocialBlock from '@/components/SocialBlock.vue'
import AppearFromMask from '@/components/animations/AppearFromMask.vue'

export default {
  components: {
    SocialBlock,
    AppearFromMask
  },
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 125px 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;

  &--text-wrapper {
    margin-bottom: 80px;

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    &--illustration {
      width: 280px;
      height: auto;
    }
  }

  &--bottom {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 375px) {
  .hero {
    &--text-wrapper {
      &--illustration {
        width: 335px;
        height: 284px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .hero {
    padding: 197px 3.9% 0;

    &--text-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        margin-bottom: 60px;
      }

      &--illustration {
        position: relative;
        width: -webkit-fill-available;
        height: 601px;
        top: 0;
        right: 0;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .hero {
    padding: 206px 3.9% 0;

    &--text-wrapper {
      margin-bottom: 100px;

      h1 {
        font-size: 56px;
      }

      &--illustration {
        position: relative;
        width: -webkit-fill-available;
        height: 503px;
        top: 0;
        right: 0;
      }
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
    }
  }
}

@media screen and (min-width: 1440px) {
  .hero {
    padding: 269px 8.34% 0;
    position: relative;
    display: flex;
    flex-direction: column;

    &--text-wrapper {
      margin-bottom: 208px;

      h1 {
        text-align: left;
        font-size: 70px;
      }

      &--illustration {
        position: absolute;
        top: 243px;
        right: 60px;
        width: auto;
        height: auto;
        margin: 0;
      }
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
