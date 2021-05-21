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
    <img src="@/assets/images/home-history-2.png" class="history--img-2">
    <p class="header-1 header-1-stroke-2">SUCCED</p>
    <p class="header-1 header-1-stroke-2">startups</p>
    <p class="history--text-icon-2">★★★</p>
    <p class="header-1 history--text-white">ARE IN A RACE AGAINST</p>
    <p class="header-1 history--text-6 history--text-white">time</p>
    <img src="@/assets/images/home-history-3.png" class="history--img-3">
    <p class="header-1 history--text-white">& money</p>
    <img src="@/assets/images/home-history-4.png" class="history--img-4">
    <p class="header-1 header-1-stroke-2">TO BUILD great</p>
    <p class="header-1 header-1-stroke-2">products</p>
    <p class="history--text-icon-2" style="font-weight: 600;">$$$</p>
    <p class="header-1 history--text-4 history--text-white">AND ACHIEVE</p>
    <img src="@/assets/images/home-history-5.png" class="history--img-5">
    <p class="header-1 history--text-4 history--text-white">successful</p>
    <img src="@/assets/images/home-history-6.png" class="history--img-6">
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
  padding: 15px 20px 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #1E1F21;
  align-items: center;

  .header-1 {
    font-size: 16px;
  }

  &--icon-1 {
    width: 31px;
    height: 13px;
  }

  &--img-1 {
    width: 32px;
    height: 26px;
  }

  &--img-2 {
    width: 33px;
    height: 26px;
  }

  &--img-3 {
    width: 36px;
    height: 26px;
  }

  &--img-4 {
    width: 27px;
    height: 26px;
  }

  &--img-5 {
    width: 74px;
    height: 26px;
  }

  &--img-6 {
    width: 41px;
    height: 26px;
  }

  &--text-white {
    color: #fff;
  }

  &--text-icon-1 {
    font-style: normal;
    font-weight: 900;
    font-size: 23.8095px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #12E2B0;
  }

  &--text-icon-2 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #12E2B0;
  }
}

@media screen and (min-width: 768px) {
  .history {
    padding: 30px;

    .header-1 {
      font-size: 34px;
    }

    &--icon-1 {
      width: 76px;
      height: 31px;
    }

    &--img-1 {
      width: 76px;
      height: 49px;
    }

    &--img-2 {
      width: 71px;
      height: 49px;
    }

    &--img-3 {
      width: 79px;
      height: 49px;
    }

    &--img-4 {
      width: 47px;
      height: 49px;
    }

    &--img-5 {
      width: 163px;
      height: 49px;
    }

    &--img-6 {
      width: 69px;
      height: 49px;
    }

    &--text-icon-1 {
      font-size: 48px;
    }

    &--text-icon-2 {
      font-size: 36px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .history {
    padding: 90px 8.34%;

    .header-1 {
      font-size: 56px;
    }

    &--icon-1 {
      width: 139px;
      height: 57px;
    }

    &--img-1 {
      width: 114px;
      height: 84px;
    }

    &--img-2 {
      width: 136px;
      height: 84px;
    }

    &--img-3 {
      width: 117px;
      height: 84px;
    }

    &--img-4 {
      width: 119px;
      height: 84px;
    }

    &--img-5 {
      width: 311px;
      height: 84px;
    }

    &--img-6 {
      width: 132px;
      height: 84px;
    }

    &--text-icon-1 {
      font-size: 80px;
    }

    &--text-icon-2 {
      font-size: 60px;
    }
  }
}
</style>
