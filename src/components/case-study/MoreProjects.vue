<template>
  <div class="more-project">
    <h2 class="more-project--title">More projects</h2>
    <div class="more-project--wrapper">
      <ProjectItem v-for="(project, i) in moreProjects" :key="i" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/case-study/MoreProjectsItem.vue'

export default {
  props: ['moreProjects'],

  components: {
    ProjectItem
  },
}
</script>

<style lang="scss" scoped>
.more-project {
  padding: 80px 0;

  &--title {
    padding: 0 20px;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: left;
  }

  &--wrapper {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  .more-project {
    padding: 140px 0;

    &--title {
      padding: 0 30px;
      font-size: 56px;
      margin-bottom: 30px;
    }

    &--wrapper {
      display: flex;
      flex-direction: row;
    }
  }
}

@media screen and (min-width: 1280px) {
  .more-project {
    &--title {
      padding: 0 8.34%;
    }
  }
}
</style>
