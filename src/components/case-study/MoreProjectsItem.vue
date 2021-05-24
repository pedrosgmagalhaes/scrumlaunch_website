<template>
  <div class="project" :style="{'background-image': `url('${setBackgroundImage}')`}">
    <div class="project--hover">
      <span>{{project.order}} project</span>
      <p>{{project.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'project'
  ],

  computed: {
    setBackgroundImage() {
      return require(`@/assets/images/work/${this.project.image}.png`);
    }
  },
}
</script>

<style lang="scss" scoped>
.project {
  height: 265px;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &--hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    transition: all .4s ease;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 4px;
    }

    p {
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 150%;
      text-transform: uppercase;
    }
  }
}

@media screen and (min-width: 768px) {
  .project {
    height: 256px;
    width: 50%;
  }
}

@media screen and (min-width: 1280px) {
  .project {
    height: 480px;
    width: 50%;

    &--hover {
      opacity: 0;
      visibility: hidden;

      span {
        font-size: 16px;
        margin-bottom: 6px;
      }

      p {
        font-size: 26px;
      }
    }

    &:hover > .project--hover {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
