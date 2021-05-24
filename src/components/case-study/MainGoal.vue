<template>
  <div class="main-goal">
    <h2 class="main-goal--header">main goal</h2>
    <p class="main-goal--disc">The mark is built using the golden ratio design system by applying a 42º slant. All corners and curves are rounded using the same radius.</p>
    <p class="main-goal--disc">The smile is constructed based on a circle with the same amount of width as the house.</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main-goal {
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &--header {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &--disc {
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
}

@media screen and (min-width: 768px) {
  .main-goal {
    padding: 140px 30px;

    &--header {
      font-size: 30px;
      margin-bottom: 24px;
    }

    &--disc {
      font-size: 16px;
      margin-bottom: 16px;
      max-width: 70%;
    }
  }
}

@media screen and (min-width: 1280px) {
  .main-goal {
    padding: 240px 8.34%;

    &--header {
      font-size: 50px;
      margin-bottom: 40px;
    }

    &--disc {
      font-size: 18px;
      margin-bottom: 20px;
      max-width: 45%;
    }
  }
}
</style>
