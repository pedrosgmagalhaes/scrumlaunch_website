<template>
  <div class="case-study">
    <div class="case-study--hero">
      <inline-svg
        :src="require('@/assets/images/case-study/full-court-ai/hero.svg')"
        class="case-study--hero--icon"
      />
    </div>

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
        name: 'Harvest',
        image: 'harvest-preview',
        url: 'HarvestCaseStudy'
      },
      {
        order: 'Next',
        name: 'Community Funded',
        image: 'scope-preview',
        url: 'ScopeCaseStudy'
      }
    ],
    projectInfo: {
      name: 'Full Court AI',
      description: 'FullCourtAI is an AI-powered mobile application and cloud video processing pipeline that enables users to effortlessly record, edit and share youth sports games as if they were recorded by a cameraman by combining computer vision and neural networks to automatically track the action.  The company is backed by Silicon Valley investors.',
      details: '2018-Present',
      work: ['Swift', 'Composable Architecture', 'AWS', 'GCP', 'Python', 'Machine Learning', 'Neural Networks', 'Computer Vision', 'Video Transcoding', 'ETL Pipeline', 'Product Management', 'Webflow', 'Rollbar'],
      team: ['Dasha Shyf', 'Yulia Hlushkina'],
    },
    mainInfo: {
      title: 'Product Objective',
      description: [
        'During recording users can mark certain moments of the game with stickers which would help cutting the whole video into clips.',
        'The application allows to create and edit videos, create your own teams and share clips within the team.'
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
    background: #1E2834;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  &--divider {
    height: 281px;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/full-court-ai/divider-photo.png');
  }

  &--divider-small {
    height: 266px;
    background: #E7EFFF;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/full-court-ai/divider-2.png');
    margin-bottom: 10px;

    &.second {
      margin-bottom: 0px;
      background-image: url('../assets/images/case-study/full-court-ai/divider-3.png');
    }
  }
}

@media screen and (min-width: 768px) {
  .case-study {
    &--hero {
      height: 612px;
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
