<template>
  <div class="case-study">
    <div class="case-study__hero">
      <img
        :src="require('@/assets/images/case-study/helmm/hero.svg')"
        class="case-study__hero_icon"
      />
    </div>

    <ProjectInfo :projectInfo="projectInfo" />

    <div class="case-study__divider-1"></div>
    <div class="case-study__divider-2"></div>
    <div class="case-study__divider-3"></div>

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
    projectInfo: {
      name: 'helmm',
      description:
        'Helmm is a rapidly growing direct to consumer e-commerce brand that provides environmentally sustainable deodorant for me.  The product has gained significant adoption over the past 5 years and we’ve built a highly scalable end to end e-Commerce system.',
      details: '2017-2021',
      work: [
        'Ruby on Rails',
        'Javascript',
        'Payment & Order Management Integrations',
      ],
      team: ['Dmitriy Hmaruk', 'Ekaterina Andreeva'],
    },

    moreProjects: [
      {
        order: 'Previous',
        name: 'Seven',
        image: 'fgn-preview',
        url: '/fgn-case-study',
      },
      {
        order: 'Next',
        name: 'Vesta Home',
        image: 'vesta-preview',
        url: '/vesta-case-study',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.case-study {
  &__hero {
    height: 800px;
    box-sizing: border-box;
    background: #0d2446;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  &__divider-1 {
    margin-bottom: 50px;
    height: 1080px;
    background: #ecf0f3 url('../assets/images/case-study/helmm/divider-1.png')
      center 0 / cover no-repeat;
  }

  &__divider-2 {
    margin-bottom: 50px;
    height: 1080px;
    background: #0b2850 url('../assets/images/case-study/helmm/divider-2.png')
      center 0 / cover no-repeat;
  }

  &__divider-3 {
    height: 1080px;
    background: #ecf0f3 url('../assets/images/case-study/helmm/divider-3.png')
      center 0 / cover no-repeat;
  }
}

@media screen and (max-width: 768px) {
  .case-study {
    &__hero {
      height: 612px;
    }

    &__hero_icon {
      max-width: 526px;
    }

    &__divider-1 {
      margin-bottom: 25px;
      height: 576px;
    }

    &__divider-2 {
      margin-bottom: 25px;
      height: 576px;
    }

    &__divider-3 {
      height: 576px;
    }
  }
}

@media screen and (max-width: 375px) {
  .case-study {
    &__hero {
      height: 392px;
    }

    &__hero_icon {
      max-width: 310px;
    }

    &__divider-1 {
      margin-bottom: 10px;
      height: 281px;
    }

    &__divider-2 {
      margin-bottom: 10px;
      height: 281px;
    }

    &__divider-3 {
      height: 281px;
    }
  }
}
</style>
