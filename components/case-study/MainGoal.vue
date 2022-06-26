<template>
  <div class="main-goal">
    <h2 class="main-goal--header">{{ mainInfo.title }}</h2>
    <p
      v-for="(desc, i) in mainInfo.description"
      :key="i"
      class="main-goal--disc"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['mainInfo'],
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
