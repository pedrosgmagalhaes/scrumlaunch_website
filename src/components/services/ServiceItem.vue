<template>
  <div class="service-item">
    <div class="service-item--inner" v-in-viewport="{ class_from: 'service-item__from', class_active: 'service-item__active', class_to: 'service-item__to' }">
      <div class="service-item--header">
        <inline-svg
          :src="require(`@/assets/icons/services/${service.icon}-icon.svg`)"
          class="service-item--header--icon"
        />
        <p class="header-2">{{service.title}}</p>
      </div>
      <div class="service-item--desc">
        <p>{{service.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'service'
  ]
}
</script>

<style lang="scss" scoped>
.service-item {
  padding: 30px 0;
  border-bottom: 1px solid #1E1F21;

  &:first-child {
    border-top: 1px solid #1E1F21;
  }

  &--header {
    display: flex;
    margin-bottom: 16px;

    &--icon {
      width: 24px;
      height: 24px;
      margin-right: 16px;
      flex: none;
    }
  }

  &--desc {
    p {
      font-family: 'Proxima Nova';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
      color: #1E1F21;
      text-align: left;
    }
  }

  &__from {
    opacity: 0;
    transform: scale(0.5);
  }

  &__active {
    transition: all 1s;
  }

  &__to {
    opacity: 1;
    transform: scale(1);
  }
}

@media screen and (min-width: 768px) {
  .service-item {
    padding: 32px 0;

    &--header {
      margin-bottom: 20px;

      &--icon {
        width: 36px;
        height: 36px;
        margin-right: 20px;
      }
    }

    &--desc {
      margin-left: 188px;

      p {
        font-size: 14px;
      }
    }
  }
}

@media screen and (min-width: 1280px)  {
  .service-item {
    padding: 60px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      .header-2 {
        max-width: 60%;
      }
    }

    &--inner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &--header {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 0px;
      width: calc(100% - 59.333%);

      &--icon {
        width: 56px;
        height: 56px;
        margin-right: 60px;
        margin-left: 60px;
      }

      .header-2 {
        text-align: left;
      }
    }

    &--desc {
      margin-left: 0px;
      width: 59.333%;

      p {
        font-size: 20px;
      }
    }
  }
}
</style>
