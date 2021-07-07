<template>
  <div class="case-study">
    <div class="case-study--hero">
      <inline-svg
        :src="require('@/assets/images/case-study/scope/hero.svg')"
        class="case-study--hero--icon"
      />
    </div>

    <ProjectInfo :projectInfo="projectInfo" />

    <div class="case-study--divider-small"></div>
    <div class="case-study--divider-small second"></div>

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
        name: 'project name',
        image: 'work-2'
      },
      {
        order: 'Next',
        name: 'project name',
        image: 'work-10'
      }
    ],
    projectInfo: {
      name: 'Scope',
      description: 'SCOPE streamlines the entire process, making it easier for owners / operators to do business with you, and making it easier for you to run your business. Generate more quotes, create greater levels of project progress communication, eliminate wasted time back and forth, drive repeat business and get paid faster. SCOPE was inspired by contractors, and built for their customers.',
      details: '2021',
      work: ['UI/UX design', 'Development'],
      team: ['Denis Didenko', 'Yulia Hlushkina']
    }
  }),
}
</script>

<style lang="scss" scoped>
.case-study {
  &--hero {
    height: 392px;
    box-sizing: border-box;
    background: #00336A;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  &--divider-small {
    height: 281px;
    background: #70ABEB;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/images/case-study/scope/divider-2.png');
    margin-bottom: 10px;

    &.second {
      margin-bottom: 0px;
      background-image: url('../assets/images/case-study/scope/divider-3.png');
    }
  }
}

@media screen and (min-width: 768px) {
  .case-study {
    &--hero {
      height: 612px;
    }

    &--divider-small {
      height: 576px;
      margin-bottom: 30px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .case-study {
    &--hero {
      height: 800px;
    }

    &--divider-small {
      height: 1080px;
      margin-bottom: 50px;
    }
  }
}
</style>
