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
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #1E1F21;
  align-items: center;
  height: 231px;
  box-sizing: border-box;

  .header-1 {
    font-size: 13px;
  }

  &--icon-1 {
    width: 35px;
    height: 12px;
  }

  &--img-1 {
    width: 32px;
    height: 20px;
  }

  &--img-2 {
    width: 28px;
    height: 20px;
  }

  &--img-3 {
    width: 30px;
    height: 20px;
  }

  &--img-4 {
    width: 23px;
    height: 20px;
  }

  &--img-5 {
    width: 67px;
    height: 20px;
  }

  &--img-6 {
    width: 34px;
    height: 20px;
  }

  &--text-white {
    color: #fff;
  }

  &--text-icon-1 {
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #12E2B0;
  }

  &--text-icon-2 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #12E2B0;
  }
}

@media screen and (min-width: 375px) {
  .history {
    padding: 24px 20px;
    height: 283px;

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

    &--text-icon-1 {
      font-size: 23.8095px;
    }

    &--text-icon-2 {
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 480px) {
  .history {
    padding: 20px;
    height: 317px;

    .header-1 {
      font-size: 21px;
    }

    &--icon-1 {
      width: 34px;
      height: 12px;
    }

    &--img-1 {
      width: 46px;
      height: 24px;
    }

    &--img-2 {
      width: 44px;
      height: 24px;
    }

    &--img-3 {
      width: 57px;
      height: 24px;
    }

    &--img-4 {
      width: 26px;
      height: 24px;
    }

    &--img-5 {
      width: 106px;
      height: 24px;
    }

    &--img-6 {
      width: 53px;
      height: 24px;
    }

    &--text-icon-1 {
      font-size: 21px;
    }

    &--text-icon-2 {
      font-size: 21px;
    }
  }
}

@media screen and (min-width: 768px) {
  .history {
    padding: 30px;
    height: 557px;

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

@media screen and (min-width: 1024px) {
  .history {
    height: 670px;

    .header-1 {
      font-size: 46px;
    }

    &--icon-1 {
      width: 95px;
      height: 47px;
    }

    &--img-1 {
      width: 90px;
      height: 66px;
    }

    &--img-2 {
      width: 108px;
      height: 66px;
    }

    &--img-3 {
      width: 74px;
      height: 66px;
    }

    &--img-4 {
      width: 84px;
      height: 66px;
    }

    &--img-5 {
      width: 230px;
      height: 66px;
    }

    &--img-6 {
      width: 89px;
      height: 66px;
    }

    &--text-icon-1 {
      font-size: 64px;
    }

    &--text-icon-2 {
      font-size: 48px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .history {
    padding: 90px 8.34%;
    height: 950px;

    .header-1 {
      font-size: 50px;
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
      font-size: 56px;
    }
  }
}

@media screen and (min-width: 1380px) {
  .history {
    padding: 90px 8.34%;
    height: 917px;

    .header-1 {
      font-size: 54px;
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
      font-size: 84px;
    }

    &--text-icon-2 {
      font-size: 60px;
    }
  }
}

@media screen and (min-width: 1440px) {
  .history {
    padding: 90px 8.34%;
    height: 950px;

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
