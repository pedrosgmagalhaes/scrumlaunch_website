<template>
  <div class="software_design">
    <div class="container">
      <div class="software_design__section_1">
        <div>
          <img
            src="/images/home/software_design.svg"
            alt="software_design"
            class="software_design__rounded_letters"
          />
        </div>

        <div class="software_design__text_block">
          <div class="software_design__header">
            <div class="header-1">We Build Software</div>
            <div class="header-1">& Design Teams</div>
            <div class="header-1">That Help Our</div>
            <div class="header-1">Clients Succeed</div>
          </div>

          <div class="software_design__text">
            Our software development and design teams played a pivotal role in
            many client success stories in 2021.
          </div>
        </div>
      </div>

      <div class="software_design__section_2">
        <div class="software_design__square">
          7 successful venture capital fundraising rounds (from Seed stage to
          Series D)
        </div>
        <div class="software_design__square round">
          2 acquisitions<br />(by Unicorns)
        </div>
        <div class="software_design__square">
          Supported over 100M active monthly users across client products
        </div>
        <div class="software_design__square">
          Completed a successful private equity turnaround
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1600px;

  @media screen and (max-width: 1440px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 425px) {
    max-width: 336px;
  }
}

.header-1 {
  font-style: normal;
  font-weight: 900;
  font-size: 75px;
  line-height: 140%;

  @media screen and (max-width: 1440px) {
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
}

.software_design {
  padding-top: 300px;
  padding-bottom: 300px;

  @media screen and (max-width: 1440px) {
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 174px;
    padding-bottom: 140px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 123px;
    padding-bottom: 80px;
    padding-left: 15px;
    padding-right: 15px;
  }

  * {
    box-sizing: border-box;
  }

  &__section_1 {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 120px;

    @media screen and (max-width: 1440px) {
      margin-bottom: 80px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 60px;
    }

    @media screen and (max-width: 425px) {
      margin-bottom: 40px;
    }
  }

  &__rounded_letters {
    position: absolute;
    top: -290px;
    left: -120px;

    @media screen and (max-width: 1440px) {
      max-width: 520px;
      top: -240px;
    }

    @media screen and (max-width: 768px) {
      max-width: 335px;
      top: -170px;
      left: -70px;
      transform: rotate(-15deg);
    }

    @media screen and (max-width: 425px) {
      max-width: 260px;
      top: -130px;
      left: -60px;
    }
  }

  &__text_block {
    flex: 0 0 100%;
    max-width: 945px;
    text-align: left;

    @media screen and (max-width: 1440px) {
      max-width: 712px;
    }

    @media screen and (max-width: 768px) {
      max-width: 530px;
    }

    @media screen and (max-width: 425px) {
      max-width: 225px;
    }
  }

  &__header {
    margin-bottom: 46px;

    @media screen and (max-width: 1440px) {
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }

    @media screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
  }

  &__text {
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 150%;

    @media screen and (max-width: 1440px) {
      font-size: 26px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }

  &__section_2 {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 708px;
    }
  }

  &__square {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    padding: 70px;
    border: 1px solid #1e1f21;
    border-left: 1px solid transparent;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;

    @media screen and (max-width: 1440px) {
      padding: 40px;
      height: 300px;
      width: 300px;
      font-size: 18px;
    }

    @media screen and (max-width: 768px) {
      height: 354px;
      width: 354px;
    }

    @media screen and (max-width: 425px) {
      padding: 18px;
      height: 168px;
      width: 168px;
      font-size: 12px;
    }

    &:first-child {
      border-left: 1px solid #1e1f21;

      @media screen and (max-width: 768px) {
        border-bottom: 1px solid transparent;
      }
    }

    &.round {
      background: #12e2b0;
      border-color: transparent;
      border-radius: 50%;

      & + * {
        border-left: 1px solid #1e1f21;
      }
    }
  }
}
</style>
