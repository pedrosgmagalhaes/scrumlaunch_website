<template>
  <div class="news">

    <div class="news--icon">
      <div class="news--icon--desktop">
        <vLottiePlayer
          name="reliabilityDesktopAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/reliability-desktop.json')"
        />
      </div>
      <div class="news--icon--tablet">
        <vLottiePlayer
          name="reliabilityTabletAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/reliability-tablet.json')"
        />
      </div>
      <div class="news--icon--mobile">
        <vLottiePlayer
          name="reliabilityMobileAnim"
          loop
          width="100%"
          height="100%"
          :animationData="require('../../assets/animation/reliability-mobile.json')"
        />
      </div>
    </div>

    <AppearFromMask>
    <h2 class="header-1">NEWS & INSIGHTS</h2>
    </AppearFromMask>

    <div class="news--wrapper">
      <div class="news--wrapper--item" v-for="i in 3" :key="i">
        <div class="news--wrapper--item--content">
          <div v-in-viewport="{ class_from: 'news__from', class_active: 'news__active', class_to: 'news__to' }">
            <p class="news--wrapper--item--content--header header-2">How does FGN app help seniors and why is it so important?</p>
            <p class="news--wrapper--item--content--text body-3">Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.</p>
          </div>
          <span class="header-4" v-in-viewport="{ class_from: 'date__from', class_active: 'date__active', class_to: 'date__to' }">02 Dec 21</span>
        </div>
        <div class="news--wrapper--item--arrow"></div>
      </div>
    </div>

    <button class="btn news--btn">explore more</button>
  </div>
</template>

<style lang="scss" scoped>
.news {
  padding: 172px 20px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;

  &--icon {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 375px;
    height: 300px;
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

  h2 {
    margin-bottom: 80px;
    text-align: left;
  }

  &--wrapper {
    &--item {
      padding: 30px 0;
      border-top: 1px solid #1E1F21;
      display: flex;
      justify-content: space-between;
      position: relative;

      &:last-child {
        border-bottom: 1px solid #1E1F21;
      }

      &--content {
        text-align: left;

        &--header {
          margin-bottom: 16px;
        }

        &--text {
          margin-bottom: 32px;
        }

        .header-4 {
          font-size: 12px;
        }
      }

      &--arrow {
        width: 30px;
        height: 15px;
        background-image: url('../../assets/icons/union-empty.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transition: all .4s ease;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 31px;

        &:hover {
          background-image: url('../../assets/icons/union.svg');
        }
      }
    }
  }

  &--btn {
    margin: 40px auto 0;
  }

  &__from {
    opacity: 0;
    transform: scale(0.5);
  }

  &__active {
    transition: all 1s;
  }

  &__to {
    opacity: 1;
    transform: scale(1);
  }

}

.date {
  &__from {
    opacity: 0;
    transform: scale(0.5);
  }

  &__active {
    display: inline-block;
    transition: all 1s;
  }

  &__to {
    opacity: 1;
    transform: scale(1);
  }
}

@media screen and (min-width: 768px) {
  .news {
    padding: 291px 30px 0;
    margin-bottom: 140px;

    &--icon {
      top: 0px;
      right: 0px;
      width: 768px;
      height: 300px;

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

    h2 {
      margin-bottom: 140px;
    }

    &--wrapper {
      &--item {
        padding: 32px 0;

        &:last-child {
          border-bottom: 1px solid #1E1F21;
        }

        &--content {
          max-width: 73%;

          &--header {
            margin-bottom: 20px;
          }

          &--text {
            margin-bottom: 40px;
          }

          .header-4 {
            font-size: 14px;
          }
        }

        &--arrow {
          width: 59px;
          height: 29px;
          position: relative;
          top: 0;
        }
      }
    }

    &--btn {
      margin: 60px auto 0;
    }
  }
}

@media screen and (min-width: 1280px) {
  .news {
    padding: 420px 8.34% 0;
    margin-bottom: 240px;

    &--icon {
      top: 110px;
      right: -140px;
      width: 950px;
      height: 250px;

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

    h2 {
      margin-bottom: 152px;
    }

    &--wrapper {
      &--item {
        padding: 50px 0;

        &--content {
          max-width: 68%;
        }

        &--arrow {
          width: 75px;
          height: 37px;
        }
      }
    }

    &--btn {
      margin: 80px auto 0;
    }
  }
}
</style>
