<template>
  <div class="history">
    <p class="header-1 history--text-1 history--text-white">ScrumLaunch</p>
    <p class="header-1 header-1-stroke-2 history--text-2">was born in 2015</p>
    <inline-svg
      :src="require('@/assets/icons/arrow.svg')"
      class="history--icon-1"
      fill="#12E2B0"
    />
    <img src="@/assets/images/home-history-1.png" class="history--img-1">
    <p class="header-1 header-1-stroke-2 history--text-3">BY FORMER</p>
    <p class="history--text-icon-1">✓</p>
    <p class="header-1 history--text-white">STARTUP FOUNDERS</p>
    <p class="header-1 history--text-5 history--text-white">TO HELP OTHER STARTUPS</p>
    <img src="@/assets/images/home-history-2.png" class="history--img-1">
    <p class="header-1 header-1-stroke-2">SUCCED</p>
    <p class="header-1 header-1-stroke-2">startups</p>
    <p class="history--text-icon-2">★★★</p>
    <p class="header-1 history--text-white">ARE IN A RACE AGAINST</p>
    <p class="header-1 history--text-6 history--text-white">time</p>
    <img src="@/assets/images/home-history-3.png" class="history--img-1">
    <p class="header-1 history--text-white">& money</p>
    <img src="@/assets/images/home-history-4.png" class="history--img-1">
    <p class="header-1 header-1-stroke-2">TO BUILD great</p>
    <p class="header-1 header-1-stroke-2">products</p>
    <p class="history--text-icon-2" style="font-weight: 600;">$$$</p>
    <p class="header-1 history--text-4 history--text-white">AND ACHIEVE</p>
    <img src="@/assets/images/home-history-5.png" class="history--img-1">
    <p class="header-1 history--text-4 history--text-white">successful</p>
    <img src="@/assets/images/home-history-6.png" class="history--img-1">
    <p class="header-1 header-1-stroke-2">business OUTCOMES</p>
    <p class="header-1 header-1-stroke-2">we help you solve this</p>
    <p class="history--text-icon-2" style="font-weight: 900;">===</p>
    <p class="header-1 history--text-4 history--text-white">equation</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.history {
  padding: 90px 8.34%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #1E1F21;
  align-items: center;

  &--text-white {
    color: #fff;
  }

  &--text-icon-1 {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #12E2B0;
  }

  &--text-icon-2 {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 150%;
    color: #12E2B0;
  }
}
</style>
