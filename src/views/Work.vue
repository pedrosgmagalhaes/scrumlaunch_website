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
        url: 'work-11',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-2',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-3',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-4',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-5',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-6',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-7',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-8',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-9',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-10',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-11',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-12',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-13',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
      },
      {
        url: 'work-14',
        type: 'Mobile app',
        year: '2021',
        name: 'Project name',
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
