<template>
  <div class="marquee-block">
    <div class="marquee-block--wrapper" style="animation-duration: 60s">
      <div v-for="i in 10" :key="i" class="marquee-block--wrapper--text">
        <p class="header-1 header-1-stroke-2">1 Client Acquired by a Unicorn</p>
        <img
          :src="require('@/assets/icons/circle-icon.svg')"
          class="marquee-block--wrapper--text--icon"
        />
        <p class="header-1 header-1-stroke-2">
          1 Client Acquired by a Publicly Traded Company
        </p>
        <img
          :src="require('@/assets/icons/circle-icon.svg')"
          class="marquee-block--wrapper--text--icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.marquee-block {
  background: #1e1f21;
  padding: 76px 0;
  overflow: hidden;

  &--wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    position: relative;
    transform: translate3d(0%, 0, 0);
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &:hover {
      animation-play-state: paused !important;
    }

    &--text {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;

      .header-1 {
        font-size: 24.1111px;
        line-height: 34px;
        letter-spacing: 0.02em;
      }

      p {
        white-space: nowrap;
      }

      &--icon {
        margin: 0 10px;
        flex: none;
        width: 8px;
        height: 8px;
      }
    }
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(0%, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

@media screen and (min-width: 768px) {
  .marquee-block {
    padding: 140px 0;

    &--wrapper {
      &--text {
        .header-1 {
          font-size: 54.2857px;
          line-height: 76px;
        }

        &--icon {
          margin: 0 30px;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .marquee-block {
    padding: 210px 0 209px;

    &--wrapper {
      &--text {
        .header-1 {
          font-size: 70px;
          line-height: 140%;
        }

        &--icon {
          margin: 0 50px;
        }
      }
    }
  }
}

@media screen and (min-width: 1900px) {
  .marquee-block--wrapper--text .header-1 {
    font-weight: 900;
    font-size: 80px;
    line-height: 140%;
  }
}
</style>
