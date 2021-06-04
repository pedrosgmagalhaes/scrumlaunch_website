<template>
  <div class="info">
    <h2 class="info--header">family game night</h2>
    <div class="info--wrapper">
      <p class="info--wrapper--desc">Discovery, design and development of a social gaming platform specifically designed for seniors to play intellectually stimulating games and stay connected with family members while collecting data and monitoring for cognitive decline.</p>
      <div class="info--wrapper--details">
        <div class="info--wrapper--details--item">
          <span class="info--wrapper--details--item--title">Details</span>
          <span class="info--wrapper--details--item--text">2021</span>
        </div>
        <div class="info--wrapper--details--item">
          <span class="info--wrapper--details--item--title">Work</span>
          <span class="info--wrapper--details--item--text">UI/UX design</span>
        </div>
        <div class="info--wrapper--details--item">
          <span class="info--wrapper--details--item--title">Team</span>
          <span class="info--wrapper--details--item--text">Yulia Hlushkina</span>
          <span class="info--wrapper--details--item--text">Denis Didenko</span>
          <span class="info--wrapper--details--item--text">Anton Kharytonov</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.info {
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &--header {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
  }

  &--wrapper {
    display: flex;
    flex-direction: column;

    &--desc {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 24px;
      text-align: left;
    }

    &--details {
      display: flex;
      justify-content: space-between;

      &--item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &--title, &--text {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 150%;
          margin-bottom: 6px;

          &:last-child {
            margin-bottom: 0px;
          }
        }

        &--title {
          opacity: .5;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .info {
    padding: 140px 30px;

    &--header {
      font-size: 24px;
      margin-bottom: 31px;
    }

    &--wrapper {
      &--desc {
        font-size: 20px;
        margin-bottom: 40px;
      }

      &--details {
        display: flex;
        justify-content: space-between;

        &--item {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-start;

          &--title, &--text {
            font-size: 14px;
            margin-bottom: 13px;
          }

          &--text {
            margin-bottom: 7px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .info {
    padding: 240px 8.34%;
    flex-direction: row;
    align-items: flex-start;

    &--header {
      font-size: 50px;
      margin-bottom: 0px;
      margin-right: 120px;
      min-width: 387px;
    }

    &--wrapper {
      &--desc {
        font-size: 26px;
        margin-bottom: 50px;
      }

      &--details {
        &--item {
          &--title, &--text {
            font-size: 16px;
            margin-bottom: 10px;
          }

          &--text {
            margin-bottom: 6px;
          }
        }
      }
    }
  }
}
</style>
