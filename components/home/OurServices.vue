<template>
  <div class="services">
    <TypingEffect>
      <h2 class="header-1 header-1-stroke">Our Services</h2>
    </TypingEffect>
    <AppearFromMask :oh="false"
      ><p class="header-1 software-text">
        Software Development
      </p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 devops-text">DevOps</p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 design-text">UI/UX Design</p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 product-text">
        User Research & <br class="brake" />Product Analytics
      </p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 brand-text">Brand Design</p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 pitch-text">Pitch Deck Creation</p></AppearFromMask
    >
    <AppearFromMask :oh="false"
      ><p class="header-1 strategy-text">Strategy</p></AppearFromMask
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.services {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 80px 0;
  text-align: right;

  .brake {
    display: block;
  }

  h2 {
    margin-bottom: 40px;
    -webkit-text-stroke: 0.5px #1e1f21;
  }

  p {
    margin-bottom: 30px;
    transition: all 0.4s ease;
    width: fit-content;
    font-size: 20px;
    position: relative;
    text-align: right;

    &:hover {
      color: #12e2b0;

      &::before {
        opacity: 1;
        visibility: visible;
      }
    }

    &:last-child {
      margin-bottom: 0px;
    }

    &::before {
      position: absolute;
      content: '';
      width: 121px;
      height: 92px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      background-position: center;
      background-size: contain;
      z-index: 1;
    }
  }
}

@media screen and (min-width: 768px) {
  .services {
    padding: 0px 30px;
    margin: 140px 0;

    h2 {
      margin-bottom: 60px;
      -webkit-text-stroke: 1px #1e1f21;
    }

    p {
      margin-bottom: 36px;
      font-size: 40px;
      width: auto;

      &::before {
        width: 213px;
        height: 162px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .brake {
    display: none;
  }
}

@media screen and (min-width: 1140px) {
  .services {
    p {
      margin-bottom: 50px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .services {
    padding: 0 8.34% 0;
    margin: 240px 0;

    h2 {
      margin-bottom: 59px;
    }

    p {
      margin-bottom: 52px;
      font-size: 56px;

      &::before {
        width: 363px;
        height: 276px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .services {
    .brake {
      display: none;
    }
  }
}

@media screen and (min-width: 1900px) {
  .header-1,
  .services p {
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
  }
}
</style>
