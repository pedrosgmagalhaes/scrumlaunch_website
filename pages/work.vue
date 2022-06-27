<template>
  <div class="work">
    <HeroBlock />

    <div class="work--wrapper">
      <WorkItem
        v-for="(project, i) in this['projects/getAllProjects']"
        :key="i"
        :item="project"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroBlock from '@/components/work/HeroBlock.vue'
import WorkItem from '@/components/work/WorkItem.vue'

export default {
  components: {
    HeroBlock,
    WorkItem,
  },

  scrollToTop: true,

  head: {
    title: 'Work',
    meta: [
      {
        name: 'description',
        content: 'Work',
      },
    ],
  },

  computed: {
    ...mapGetters(['projects/getAllProjects']),
  },
}
</script>

<style lang="scss" scoped>
.work {
  &--wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 375px;
  }
}

@media screen and (min-width: 768px) {
  .work {
    &--wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 140px;
      max-width: 768px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .work {
    &--wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 240px;
      max-width: 1280px;
    }
  }
}

@media screen and (min-width: 1440px) {
  .work {
    &--wrapper {
      max-width: 1440px;
    }
  }
}

@media screen and (min-width: 1880px) {
  .work {
    &--wrapper {
      max-width: 1920px;
    }
  }
}
</style>
