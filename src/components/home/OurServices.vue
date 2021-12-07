<template>
  <div class="services">
    <TypingEffect>
      <h2 class="header-1 header-1-stroke">Our Services</h2>
    </TypingEffect>
    <AppearFromMask :oh="false"><p class="header-1 software-text">Software Development</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 devops-text">DevOps</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 design-text">UI/UX Design</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 product-text">User Research & <br class="brake"/>Product Analytics</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 brand-text">Brand Design</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 pitch-text">Pitch Deck Creation</p></AppearFromMask>
    <AppearFromMask :oh="false"><p class="header-1 strategy-text">Strategy</p></AppearFromMask>
  </div>
</template>

<script>
export default {
}
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
    -webkit-text-stroke: 0.5px #1E1F21;
  }

  p {
    margin-bottom: 30px;
    transition: all .4s ease;
    width: fit-content;
    font-size: 20px;
    position: relative;

    &:hover {
      color: #12E2B0;

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
      transition: all .4s ease;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      background-position: center;
      background-size: contain;
      z-index: 1;
    }
  }

  .software-text {
    &::before {
      background-image: url('../../assets/images/services/sofrware.png');
      left: -64px;
    }
  }

  .devops-text {
    &::before {
      background-image: url('../../assets/images/services/devops.png');
      left: -135px;
    }
  }

  .design-text {
    &::before {
      background-image: url('../../assets/images/services/design.png');
      left: -135px;
    }
  }

  .product-text {
    &::before {
      background-image: url('../../assets/images/services/product.png');
      left: -114px;
    }
  }

  .brand-text {
    &::before {
      background-image: url('../../assets/images/services/brand.png');
      left: -135px;
    }
  }

  .pitch-text {
    &::before {
      background-image: url('../../assets/images/services/pitch.png');
      left: -102px;
    }
  }

  .strategy-text {
    &::before {
      background-image: url('../../assets/images/services/strategy.png');
      left: -135px;
    }
  }
}

@media screen and (min-width: 414px) {
  .services {
    .software-text {
      &::before {
        left: -102px;
      }
    }

    .product-text, .pitch-text {
      &::before {
        left: -135px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .services {
    padding: 0px 30px;
    margin: 140px 0;

    h2 {
      margin-bottom: 60px;
      -webkit-text-stroke: 1px #1E1F21;
    }

    p {
      margin-bottom: 36px;
      font-size: 40px;

      &::before {
        width: 213px;
        height: 162px;
      }
    }

    .software-text {
      &::before {
        left: -167px;
      }
    }

    .devops-text,
    .design-text,
    .brand-text,
    .product-text,
    .pitch-text,
    .strategy-text {
      &::before {
        left: -233px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .services {
    .software-text,
    .devops-text,
    .design-text,
    .brand-text,
    // .product-text,
    .pitch-text,
    .strategy-text {
      &::before {
        left: -233px;
      }
    }

    .product-text {
      &::before {
        left: -140px;
      }
    }

    .brake {
      display: none;
    }
  }
}

@media screen and (min-width: 1140px) {
  .services {
    .product-text {
      &::before {
        left: -233px;
      }
    }

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

    .software-text {
      &::before {
        left: -367px;
      }
    }

    .devops-text,
    .design-text,
    .brand-text,
    .product-text,
    .pitch-text,
    .strategy-text {
      &::before {
        left: -417px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .services {
    .brake {
      display: none;
    }

    .software-text {
      &::before {
        left: -417px;
      }
    }

    .product-text {
      &::before {
        left: -46px;
      }
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

@media screen and (min-width: 1920px) {
  .services {
    .product-text {
      &::before {
        // left: -417px;
      }
    }
  }
}
</style>
