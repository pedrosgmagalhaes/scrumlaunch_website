<template>
  <div class="work">
    <HeroBlock />
    <div class="work--wrapper">
      <WorkItem v-for="(item, i) in workItems" :key="i" :item="item"/>
    </div>
  </div>
</template>

<script>
import HeroBlock from '@/components/work/HeroBlock.vue'
import WorkItem from '@/components/work/WorkItem.vue'

export default {
  components: {
    HeroBlock,
    WorkItem
  },

  data: () => ({
    workItems: [
      {
        url: 'HarvestCaseStudy',
        image: 'harvest-preview',
        type: 'Mobile app',
        year: '2021',
        name: 'Harvest',
      },
      {
        url: 'ScopeCaseStudy',
        image: 'scope-preview',
        type: 'Mobile app',
        year: '2021',
        name: 'Scope',
      },
      {
        url: 'FullCourtAiCaseStudy',
        image: 'full-court-preview',
        type: 'Mobile app',
        year: '2021',
        name: 'Full court ai',
      },
      {
        url: 'FamilyGameNightCaseStudy',
        image: 'fgn-preview',
        type: 'Mobile app',
        year: '2021',
        name: 'Family game night',
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
.work {
  &--wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
  }
}

@media screen and (min-width: 768px) {
  .work {
    &--wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 140px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .work {
    &--wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 240px;
    }
  }
}
</style>
