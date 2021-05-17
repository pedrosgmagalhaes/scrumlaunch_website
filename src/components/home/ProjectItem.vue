<template>
  <div class="project-item">
    <div class="project-item--image"></div>
    <div class="project-item--info">
      <div class="project-item--info--wrapper">
        <p class="header-2">Project name</p>
        <div class="project-item--info--wrapper--services">
          <p class="project-item--info--wrapper--services--text">Design</p>
          <p class="project-item--info--wrapper--services--text">Frontend</p>
          <p class="project-item--info--wrapper--services--text">Backend</p>
          <p class="project-item--info--wrapper--services--text">QA</p>
          <p class="project-item--info--wrapper--services--text">Support</p>
        </div>
      </div>
      <div class="project-item--info--year">
        2021
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.project-item {
  width: 580px;
  height: 801px;
  border: 1px solid #1E1F21;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &--image {
    width: 100%;
    height: 83.9%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~@/assets/images/home-project-1.png);
  }

  &--info {
    border-top: 1px solid #1E1F21;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    &--wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: calc(100% - 116px);

      &--services {
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10px;

        &--text {
          font-family: 'Proxima Nova';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 140%;
          display: flex;
          align-items: center;
          color: #1E1F21;
          padding-right: 18px;
          margin-right: 10px;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
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
      width: 86px;
      height: 86px;
      border: 1px solid #1E1F21;
      box-sizing: border-box;
      font-family: 'Proxima Nova';
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1E1F21;
      border-radius: 50%;
    }
  }
}
</style>
