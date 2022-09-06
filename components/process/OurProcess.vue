<template>
  <div class="process">
    <div class="process--hero">
      <AppearFromMask><h1 class="header-big">OUR process</h1></AppearFromMask>
      <AppearFromMask
        ><p class="body-1 with_br">
          We focus on Communication, Collaboration,<br />
          Context & Clarity
        </p>
        <p class="body-1 without_br">
          We focus on Communication, Collaboration, Context & Clarity
        </p></AppearFromMask
      >
      <div class="process--hero--icon">
        <lottie
          name="workoutMonkeyAnim"
          loop
          :options="{
            animationData: require('../../assets/animation/right-foundation.json'),
          }"
        />
      </div>
    </div>

    <div class="process--wrapper">
      <div class="process--wrapper--item item-1">
        Defining clear business goals and success criteria
      </div>
      <div class="process--wrapper--item item-2">
        Providing dedicated design and engineering teams
      </div>
      <div class="process--wrapper--item item-3">
        Implementing rapid feedback loops and iterations
      </div>
      <div class="process--wrapper--item item-4">
        Prioritizing communication and collaboration to mitigate the likelihood
        of surprises
      </div>
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
.process {
  overflow: hidden;

  &--hero {
    padding: 125px 20px 0px;
    color: #1e1f21;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    position: relative;
    margin-bottom: 30px;

    h1 {
      margin-bottom: 40px;
    }

    p {
      width: 55%;
    }

    &--icon {
      position: absolute;
      top: 102px;
      right: -48px;
      width: 194px;
      height: 195px;
    }
  }

  &--wrapper {
    position: relative;
    width: calc(100% - 40px);
    height: 222px;
    margin: 0 20px 80px;
    box-sizing: border-box;

    &--item {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid #1e1f21;
      background: #fff;
      color: #1e1f21;
      transition: all 0.4s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      line-height: 140%;
      text-align: center;

      &:hover {
        background: #12e2b0;
        border: 1px solid #12e2b0;
      }

      &.item-1 {
        top: 0;
        left: 0;
        width: 140px;
        height: 140px;
        padding: 0 13px;
      }

      &.item-2 {
        top: 125px;
        left: 28px;
        width: 97.63px;
        height: 97.74px;
        padding: 0 8px;
      }

      &.item-3 {
        top: 78.5px;
        left: 108px;
        width: 83.68px;
        height: 83.77px;
        padding: 0 7px;
      }

      &.item-4 {
        top: 63px;
        left: 191px;
        width: 144px;
        height: 144px;
        padding: 0 12px;
      }
    }
  }
}

.with_br {
  display: none;
}

@media screen and (max-width: 768px) {
  .with_br {
    display: block;
  }

  .without_br {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .process {
    &--hero {
      padding: 197px 30px 0px;
      color: #1e1f21;
      margin-bottom: 60px;

      h1 {
        margin-bottom: 24px;
      }

      p {
        // width: 68%;
        width: 100%;
        max-width: 1078px;
      }

      &--icon {
        position: absolute;
        top: 139px;
        right: -104px;
        width: 399px;
        height: 400px;
      }
    }

    &--wrapper {
      position: relative;
      width: 708px;
      height: 468px;
      margin: 0 auto 140px;
      box-sizing: border-box;

      &--item {
        font-size: 12px;

        &.item-1 {
          top: 0;
          left: 0;
          width: 265.21px;
          height: 265.09px;
          padding: 0 62px;
        }

        &.item-2 {
          top: 262px;
          left: 60px;
          width: 206.27px;
          height: 206.18px;
          padding: 0 33px;
        }

        &.item-3 {
          top: 164px;
          left: 229px;
          width: 176.81px;
          height: 176.73px;
          padding: 0 18px;
        }

        &.item-4 {
          top: 133px;
          left: 403px;
          width: 304.11px;
          height: 303.97px;
          padding: 0 12px;
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .process {
    &--hero {
      padding: 270px 8.34% 0px;
      margin-bottom: 204px;

      h1 {
        margin-bottom: 40px;
      }

      &--icon {
        position: absolute;
        top: 199px;
        right: 0px;
        width: 627px;
        height: 628px;
      }
    }

    &--wrapper {
      position: relative;
      width: 1200px;
      height: 800px;
      margin: 0 auto 240px;
      box-sizing: border-box;

      &--item {
        font-size: 18px;

        &.item-1 {
          top: 0;
          left: 0;
          width: 450px;
          height: 450px;
          padding: 0 107px;
        }

        &.item-2 {
          top: 445px;
          left: 102px;
          width: 350px;
          height: 350px;
          padding: 0 57px;
        }

        &.item-3 {
          top: 279px;
          left: 389px;
          width: 300px;
          height: 300px;
          padding: 0 32px;
        }

        &.item-4 {
          top: 228px;
          left: 685px;
          width: 516px;
          height: 516px;
          padding: 0 80px;
        }
      }
    }
  }
}
</style>
