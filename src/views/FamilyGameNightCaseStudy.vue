<template>
  <div class="case-study">
    <div class="case-study--hero"></div>

    <ProjectInfo :projectInfo="projectInfo" />

    <div class="case-study--divider"></div>

    <MainGoal :mainInfo="mainInfo" />

    <div class="case-study--divider-small"></div>
    <div class="case-study--divider-small second"></div>

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
        name: 'Scope',
        image: 'scope-preview',
        url: 'ScopeCaseStudy'
      },
      {
        order: 'Next',
        name: 'project name',
        image: 'harvest-preview',
        url: 'HarvestCaseStudy'
      }
    ],
    projectInfo: {
      name: 'Seven',
      description: 'Discovery, design and development of a social gaming platform specifically designed for seniors to play intellectually stimulating games and stay connected with family members while collecting data and monitoring for cognitive decline.',
      details: '2018-2021',
      work: ['Angular', 'RubyOnRails', 'Heroku', 'Ionic', 'Twilio', 'Product Management', 'UI/UX Design', 'User Research',],
      team: ['Yulia Hlushkina', 'Denis Didenko', 'Anton Kharytonov']
    },
    mainInfo: {
      title: 'main goal',
      description: [
        'The mark is built using the golden ratio design system by applying a 42º slant. All corners and curves are rounded using the same radius.',
        'The smile is constructed based on a circle with the same amount of width as the house.'
      ]
    }
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
    background-image: url('../assets/images/case-study/fgn/hero.png');
  }

  &--divider {
    height: 281px;
    box-sizing: border-box;
    background: #3F5DFF;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/fgn/divider-photo.png');
  }

  &--divider-small {
    height: 266px;
    background: #E7EFFF;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/fgn/divider-2.png');
    margin-bottom: 10px;

    &.second {
      margin-bottom: 0px;
      background-image: url('../assets/images/case-study/fgn/divider-3.png');
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
