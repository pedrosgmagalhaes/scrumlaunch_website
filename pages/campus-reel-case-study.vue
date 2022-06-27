<template>
  <div class="case-study">
    <div class="case-study--hero">
      <img
        :src="require('@/assets/images/case-study/campus-reel/hero.svg')"
        class="case-study--hero--icon"
      />
    </div>

    <ProjectInfo :projectInfo="projectInfo" />

    <div class="case-study--illustration"></div>
    <div class="divider"></div>
    <div class="case-study--illustration-2"></div>

    <MoreProjects :moreProjects="moreProjects" />
  </div>
</template>

<script>
import ProjectInfo from '@/components/case-study/ProjectInfo.vue'
import MoreProjects from '@/components/case-study/MoreProjects.vue'

export default {
  components: {
    ProjectInfo,
    MoreProjects,
  },

  scrollToTop: true,

  data: () => ({
    moreProjects: [
      {
        order: 'Previous',
        name: 'Seven',
        image: 'fgn-preview',
        url: '/fgn-case-study',
      },
      {
        order: 'Next',
        name: 'Full Court AI',
        image: 'full-court-preview',
        url: '/full-court-ai-case-study',
      },
    ],
    projectInfo: {
      name: 'CampusReel',
      description:
        'CampusReel is a web application consisting of student-driven video content that helps prospective students and their families make the right college choice. The platform serves millions of users each month and has been featured on the Today Show.',
      details: '2019',
      work: [
        'Ruby on Rails',
        'REST API Development',
        'Javascript',
        'AWS & DevOps',
        'UI/UX Design',
      ],
      team: ['Alisa Kapler'],
    },
  }),
}
</script>

<style lang="scss" scoped>
.case-study {
  &--hero {
    height: 392px;
    box-sizing: border-box;
    background: #20263d;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  &--illustration {
    height: 359px;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/campus-reel/illustration-1.png');
  }

  &--illustration-2 {
    height: 359px;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/campus-reel/illustration-2.png');
  }
}

.divider {
  margin-bottom: 50px;
}

@media screen and (min-width: 768px) {
  .case-study {
    &--hero {
      height: 612px;
    }

    &--illustration {
      height: 736px;
    }

    &--illustration-2 {
      height: 736px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .case-study {
    &--hero {
      height: 800px;
    }

    &--illustration {
      height: 1380px;
    }

    &--illustration-2 {
      height: 1380px;
    }
  }
}
</style>
