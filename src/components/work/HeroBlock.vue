<template>
  <div class="hero">
    <h1 class="header-big">We design a lot of things</h1>
    <p class="body-3">We master digital production and development. What we also master is the fine art of listening. Truly listening.</p>
    <div class="hero--wrapper">
      <inline-svg
        :src="require('@/assets/icons/planet.svg')"
        class="hero--wrapper--icon"
      />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 125px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  position: relative;

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 30px;
  }

  &--wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    &--icon {
      width: 335px;
      height: 315px;
    }
  }
}

@media screen and (min-width: 768px) {
  .hero {
    padding: 197px 30px 140px;

    h1 {
      margin-bottom: 24px;
      width: 80%;
    }

    p {
      margin-bottom: 60px;
      font-size: 20px;
    }

    &--wrapper {
      &--icon {
        width: 708px;
        height: 667px;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .hero {
    padding: 197px 8.34% 140px;

    h1 {
      margin-bottom: 40px;
      width: 60%;
    }

    p {
      margin-bottom: 180px;
      width: 51%;
    }

    &--wrapper {
      position: absolute;
      top: 166px;
      right: 77px;
      width: auto;

      &--icon {
        width: 429px;
        height: 404px;
      }
    }
  }
}
</style>
