<template>
  <div class="case-study">
    <div class="case-study--hero"></div>

    <ProjectInfo />

    <div class="case-study--divider"></div>

    <MainGoal />

    <div class="case-study--divider-small"></div>
    <div class="case-study--divider-small"></div>

    <MoreProjects :moreProjects="moreProjects"/>
  </div>
</template>

<script>
import ProjectInfo from '@/components/case-study/ProjectInfo.vue'
import MainGoal from '@/components/case-study/MainGoal.vue'
import MoreProjects from '@/components/case-study/MoreProjects.vue'

export default {
  components: {
    ProjectInfo,
    MainGoal,
    MoreProjects
  },

  data: () => ({
    moreProjects: [
      {
        order: 'Previous',
        name: 'project name',
        image: 'work-2'
      },
      {
        order: 'Next',
        name: 'project name',
        image: 'work-10'
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
.case-study {
  &--hero {
    height: 392px;
    box-sizing: border-box;
    background: #3F5DFF;
    background-position: center 95px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('../assets/images/case/hero.png');
  }

  &--divider {
    height: 281px;
    box-sizing: border-box;
    background: #3F5DFF;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case/divider-photo.png');
  }

  &--divider-small {
    height: 266px;
    background: #E7EFFF;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case/divider-2.png');
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
      background-image: url('../assets/images/case/divider-3.png');
    }
  }
}

@media screen and (min-width: 768px) {
  .case-study {
    &--hero {
      height: 612px;
      background-position: center 113px;
      background-size: 84%;
    }

    &--divider {
      height: 576px;
    }

    &--divider-small {
      height: 556px;
      margin-bottom: 30px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .case-study {
    &--hero {
      height: 800px;
      background-position: center 131px;
      background-size: 68%;
    }

    &--divider {
      height: 1080px;
    }

    &--divider-small {
      height: 1014px;
      margin-bottom: 50px;
    }
  }
}
</style>
