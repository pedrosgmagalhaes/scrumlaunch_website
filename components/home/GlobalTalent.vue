<template>
  <div class="container">
    <div class="img_container">
      <div>
        <img
          src="@/assets/images/global-talent/1.png"
        />
      </div>
      <div>
        <img
          src="@/assets/images/global-talent/2.png"
        />
      </div>
      <div>
        <img
          src="@/assets/images/global-talent/3.png"
        />
      </div>
      <div>
        <img
          src="@/assets/images/global-talent/4.png"
        />
      </div>
      <div>
        <img
          src="@/assets/images/global-talent/5.png"
        />
      </div>
      <div>
        <div>
          <p>Access the best talent in Eastern Europe and Latin America.</p>
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
  padding-bottom: 240px;
  padding-top: 240px;
  margin: 0 auto;
  padding-left: 8.34%;
  padding-right: 8.34%;
  max-width: 1440px;

  @media screen and (max-width: 1440px) {
    max-width: 1200px;
    padding-bottom: 140px;
    padding-top: 140px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 80px;
    padding-top: 80px;
  }

  @media screen and (max-width: 425px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.img_container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
   

  & > div:not(:last-child) {
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    outline: 1px solid black;

    @media screen and (max-width: 769px) {
      width: 354px;
      height: 354px;
    }

    @media screen and (max-width: 427px) {
      width: 300px;
      height: 300px;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:last-child {
    & > div {
      width: 400px;
      height: 400px;
      background-color: #12e2b0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      & > p {
        font-weight: 400;
        font-size: 26px;
        line-height: 150%;
        max-width: 288px;

        @media screen and (max-width: 769px) {
          font-weight: 500;
          font-size: 20px;
        }

        @media screen and (max-width: 427px) {
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
        }
      }

      @media screen and (max-width: 769px) {
        width: 354px;
        height: 354px;
      }

      @media screen and (max-width: 427px) {
        width: 250px;
        height: 250px;
      }
    }
  }
}
</style>
