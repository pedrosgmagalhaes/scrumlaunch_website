<template>
  <div class="projects">
    <h2 class="header-1">Latest projects</h2>
    <div class="projects--wrapper">
      <ProjectItem v-for="i in 6" :key="i" class="projects--wrapper--item"/>
    </div>
    <div class="projects--btn-wrapper">
      <button class="btn">View all</button>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/home/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  }
}
</script>

<style lang="scss" scoped>
.projects {
  padding: 0 8.34% 0;
  margin: 0 0 240px;

  h2 {
    text-align: left;
    margin-bottom: 40px;
  }

  &--wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &--item {
      margin-bottom: 80px;

      &:nth-child(2n+1) {
        margin-top: 80px;
        margin-bottom: 0px;
      }
    }
  }

  &--btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
