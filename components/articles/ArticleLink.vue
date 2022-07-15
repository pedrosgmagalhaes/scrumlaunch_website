<template>
  <NuxtLink v-slot="{ href, navigate, isExactActive }" :to="to" custom>
    <li class="articles__category_item" :class="[isExactActive && 'active']">
      <a :href="href" @click="navigate"><slot /></a>
    </li>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArticleLink',

  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
.articles__category_item {
  margin-right: 64px;

  &.active {
    background: #12e2b0;
  }

  &:last-child {
    margin-right: 0;
  }

  a {
    font-size: 30px;
    line-height: 140%;
    font-weight: 700;
    text-decoration: none;
    color: #1e1f21;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
