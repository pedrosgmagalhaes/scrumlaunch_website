<template>
  <div class="case-study">
    <div class="case-study--hero">
      <inline-svg
        :src="require('@/assets/images/case-study/harvest/hero.svg')"
        class="case-study--hero--icon"
      />
    </div>

    <ProjectInfo :projectInfo="projectInfo" />

    <div class="case-study--divider"></div>

    <div class="case-study--illustration">
      <h2 class="case-study--illustration--title header-1">Illustrations</h2>
      <div class="case-study--illustration--wrapper">
        <inline-svg
          :src="require('@/assets/images/case-study/harvest/illustration-1.svg')"
        />
        <inline-svg
          :src="require('@/assets/images/case-study/harvest/illustration-2.svg')"
        />
        <inline-svg
          :src="require('@/assets/images/case-study/harvest/illustration-3.svg')"
        />
        <inline-svg
          :src="require('@/assets/images/case-study/harvest/illustration-4.svg')"
        />
        <inline-svg
          :src="require('@/assets/images/case-study/harvest/illustration-5.svg')"
        />
      </div>
    </div>

    <MoreProjects :moreProjects="moreProjects"/>
  </div>
</template>

<script>
import ProjectInfo from '@/components/case-study/ProjectInfo.vue'
import MoreProjects from '@/components/case-study/MoreProjects.vue'

export default {
  components: {
    ProjectInfo,
    MoreProjects
  },

  data: () => ({
    moreProjects: [
      {
        order: 'Previous',
        name: 'Seven',
        image: 'fgn-preview',
        url: 'FamilyGameNightCaseStudy',
      },
      {
        order: 'Next',
        name: 'Full Court AI',
        image: 'full-court-preview',
        url: 'FullCourtAiCaseStudy'
      }
    ],
    projectInfo: {
      name: 'Harvest',
      description: 'Harvest is a web application that uses AI-powered chatbots to auto-negotiate bank fees on behalf of its customers and get them refunds.  The company was acquired in 2021 by Acorns.  Its early investors included Techstars and Barclays Capital.',
      details: '2019-2021 (Acquisition)',
      work: ['Vue', 'Python', 'Machine Learning', 'UI/UX Design'],
      team: ['Dasha Shyf', 'Yulia Hlushkina', 'Yevheniia Tkachenko']
    }
  }),
}
</script>

<style lang="scss" scoped>
.case-study {
  &--hero {
    height: 392px;
    box-sizing: border-box;
    background: #74C947;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  &--divider {
    height: 359px;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/harvest/divider-photo.png');
  }

  &--illustration {
    padding: 80px 20px 0;

    &--title {
      margin-bottom: 20px;
      align-items: center;
    }

    &--wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      svg {
        width: 100%;
        height: auto;
        margin-bottom: 80px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .case-study {
    &--hero {
      height: 612px;
    }

    &--divider {
      height: 736px;
    }

    &--illustration {
      padding: 140px 30px 0;

      &--title {
        margin-bottom: 50px;
      }

      &--wrapper {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        svg {
          width: 38%;
          height: auto;
          margin-bottom: 0px;

          &:nth-child(3) {
            width: 19%;
          }

          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .case-study {
    &--hero {
      height: 800px;
    }

    &--divider {
      height: 1380px;
    }

    &--illustration {
      padding: 240px 8.34% 0;

      &--title {
        margin-bottom: 40px;
      }

      &--wrapper {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        svg {
          width: auto;
          height: auto;
          margin-bottom: 0px;

          &:nth-child(3) {
            width: auto;
          }
        }
      }
    }
  }
}
</style>
