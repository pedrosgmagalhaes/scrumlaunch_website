<template>
  <div class="project-item" @click="handleNavigate">
    <div
      class="project-item--image"
      :style="{'background-image': `url('${setBackgroundImage}')`}"
    ></div>
    <div class="project-item--info">
      <div class="project-item--info--wrapper">
        <p class="header-2">{{item.name}}</p>
        <div class="project-item--info--wrapper--services">
          <p class="project-item--info--wrapper--services--text">Design</p>
          <p class="project-item--info--wrapper--services--text">Frontend</p>
          <p class="project-item--info--wrapper--services--text">Backend</p>
          <p class="project-item--info--wrapper--services--text">QA</p>
          <p class="project-item--info--wrapper--services--text">Support</p>
        </div>
      </div>
      <div class="project-item--info--year">
        {{item.year}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],

  computed: {
    setBackgroundImage() {
      return require(`@/assets/images/work/${this.item.image}.png`);
    }
  },

  methods: {
    handleNavigate() {
      this.$router.push({ name: 'CaseStudy'});
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  width: 100%;
  height: 462px;
  border: 1px solid #1E1F21;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &--image {
    width: 100%;
    height: calc(100% - 74px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &--info {
    border-top: 1px solid #1E1F21;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      &--services {
        display: flex;
        flex-wrap: nowrap;
        margin-top: 5px;

        &--text {
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 140%;
          display: flex;
          align-items: center;
          color: #1E1F21;
          padding-right: 11px;
          margin-right: 6px;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: #1E1F21;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
          }

          &:last-child {
            padding-right: 0px;
            margin-right: 0px;

            &::after {
              display: none;
            }
          }
        }
      }
    }

    &--year {
      width: 35px;
      height: 35px;
      border: 1px solid #1E1F21;
      box-sizing: border-box;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1E1F21;
      border-radius: 50%;
      flex: none;
    }
  }
}

@media screen and (min-width: 375px) {
  .project-item--info--year {
    width: 50px;
    height: 50px;
  }
}

@media screen and (min-width: 768px) {
  .project-item {
    width: calc(50% - 15px);

    &--info {
      padding: 12px 16px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .project-item {
    max-width: 580px;
    width: calc(50% - 15px);
    height: 801px;

    &--image {
      width: 100%;
      height: calc(100% - 128px);
    }

    &--info {
      padding: 20px;

      &--wrapper {
        width: calc(100% - 116px);

        &--services {
          margin-top: 10px;

          &--text {
            font-size: 16px;
            padding-right: 18px;
            margin-right: 10px;

            &::after {
              width: 8px;
              height: 8px;
            }

            &:last-child {
              padding-right: 0px;
              margin-right: 0px;

              &::after {
                display: none;
              }
            }
          }
        }
      }

      &--year {
        width: 86px;
        height: 86px;
        font-size: 20px;
      }
    }
  }
}
</style>
