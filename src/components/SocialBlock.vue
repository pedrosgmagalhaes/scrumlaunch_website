<template>
  <div class="social">
    <inline-svg
      :src="require('@/assets/icons/behance.svg')"
      class="social--icon"
    />
    <inline-svg
      :src="require('@/assets/icons/linkedin.svg')"
      class="social--icon"
    />
    <inline-svg
      :src="require('@/assets/icons/dribbble.svg')"
      class="social--icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.social {
  display: flex;
  width: 129px;

  &--icon {
    flex: none;
    margin-right: 18.6%;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 1900px) {
  .social {
    &--icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
