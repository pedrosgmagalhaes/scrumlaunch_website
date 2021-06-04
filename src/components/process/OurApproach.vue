<template>
  <div class="approach">
    <div class="approach--header">
      <h2 class="header-1">Our approach</h2>
      <inline-svg
        :src="require('@/assets/icons/coffee-cup.svg')"
        class="approach--header--icon"
      />
    </div>
    <div class="approach--wrapper">
      <div
        class="approach--wrapper--item"
        v-for="(item, i) in approachItems"
        :key="i"
        @mouseover="hoverItem(i, item.number)"
        @mouseleave="resetHoverItem"
        :class="{ active: activeItem.index === i && activeItem.id === item.number }"
      >
        <div v-if="activeItem.index === i && activeItem.id === item.number">
          <h5 class="approach--wrapper--item--title active-title">{{item.title}}</h5>
          <p class="approach--wrapper--item--desc">{{item.description}}</p>
        </div>
        <div v-else>
          <span class="approach--wrapper--item--number">{{item.number}}</span>
          <h5 class="approach--wrapper--item--title">{{item.title}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['approachItems'],

  data: () => ({
    activeItem: {
      index: null,
      id: null
    }
  }),

  methods: {
    hoverItem(index, id) {
      this.activeItem = {
        index: index,
        id: id
      }
    },

    resetHoverItem() {
      this.activeItem = {
        index: null,
        id: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.approach {
  padding: 80px 0px;
  background: #1E1F21;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  margin-bottom: 362px;

  &--header {
    display: flex;
    flex-direction: column;
    color: #fff;
    width: calc(100% - 40px);
    margin: auto;
    position: relative;

    h2 {
      width: 100%;
      text-align: left;
      margin-bottom: 30px;
    }

    &--icon {
      margin: auto;
    }
  }

  &--wrapper {
    display: flex;
    flex-direction: column;

    &--item {
      border-top: 1px solid #FFFFFF;
      padding: 82px 0 60px;
      margin: 0 20px;
      color: #fff;
      position: relative;
      box-sizing: border-box;
      transition: all .4s ease;

      &.active {
        padding: 30px 20px 34px;
        margin: 0px 0 -1px;
        color: #1E1F21;
        background: #FFFFFF;

        .active-title {
          margin-bottom: 12px;
        }
      }

      &--number {
        position: absolute;
        top: 20px;
        left: 0;
      }

      &--title {
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        width: 80%;
      }

      &--desc {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
      }

      &:last-child {
        border-bottom: 1px solid #FFFFFF;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .approach {
    padding: 140px 0px;
    margin-bottom: 140px;

    &--header {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 60px);
      padding-bottom: 60px;

      h2 {
        width: 100%;
        margin-bottom: 0px;
      }

      &--icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 136px;
        height: 232px;
      }
    }

    &--wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 30px;
      width: calc(100% - 60px);

      &--item {
        padding: 80px 0;
        width: 50%;
        height: 328px;
        margin: 0px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 24px;

        &.active {
          padding: 30px 24px;
          margin: 0px 0 -1px;
          align-items: flex-start;

          .active-title {
            margin-bottom: 16px;
          }
        }

        &--number {
          position: absolute;
          top: 24px;
          left: 24px;
        }

        &--title {
          font-size: 28px;
          width: 100%;
        }

        &--desc {
          font-size: 16px;
        }

        &:nth-child(2n+1) {
          border-right: 1px solid #FFFFFF;
        }

        &:nth-child(3) {
          border-bottom: 1px solid #FFFFFF;
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .approach {
    padding: 240px 8.34%;
    margin-bottom: 240px;

    &--header {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 80px;

      h2 {
        width: 100%;
        margin-bottom: 0px;
      }

      &--icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 186px;
        height: 317px;
      }
    }

    &--wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;
      width: 100%;

      &--item {
        padding: 0;
        width: 50%;
        height: 334px;
        margin: 0px;
        padding-left: 30px;

        & > div {
          width: 100%;
        }

        &.active {
          padding: 50px 40px;
          margin: 0px 0 -1px;
          align-items: flex-start;

          .active-title {
            margin-bottom: 20px;
            width: 100%;
          }
        }

        &--number {
          position: absolute;
          top: 30px;
          left: 30px;
        }

        &--title {
          font-size: 30px;
          width: 90%;
        }

        &--desc {
          font-size: 18px;
        }

        &:nth-child(2n+1) {
          border-right: 1px solid #FFFFFF;
        }

        &:nth-child(3) {
          border-bottom: 1px solid #FFFFFF;
        }
      }
    }
  }
}
</style>
