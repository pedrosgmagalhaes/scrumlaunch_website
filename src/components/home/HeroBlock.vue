<template>
  <div class="hero">
    <div class="hero--text-wrapper">
      <h1 class="header-big">Product Design<br />& Software<br />Development<br />for Startups</h1>
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
import InlineSvg from 'vue-inline-svg';
import SocialBlock from '@/components/SocialBlock.vue';

export default {
  components: {
    InlineSvg,
    SocialBlock
  },
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 270px 8.34% 0;
  position: relative;
  display: flex;
  flex-direction: column;

  &--text-wrapper {
    margin-bottom: 208px;

    h1 {
      text-align: left;
    }

    &--illustration {
      position: absolute;
      top: 207px;
      right: 55px;
    }
  }

  &--bottom {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    padding: 197px 3.9% 0;

    &--text-wrapper {
      margin-bottom: 140px;
      display: flex;
      justify-content: center;
      flex-direction: column;

      &--illustration {
        position: relative;
        width: calc(100% - 60px);
        height: 695px;
        top: 0;
        right: 0;
        margin: 60px 0 0;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .hero {
    padding: 270px 8.34% 0;
    position: relative;
    display: flex;
    flex-direction: column;

    &--text-wrapper {
      margin-bottom: 208px;

      h1 {
        text-align: left;
      }

      &--illustration {
        position: absolute;
        top: 207px;
        right: 55px;
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
