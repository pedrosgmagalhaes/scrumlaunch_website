<template>
  <div class="menu">
    <inline-svg
      :src="require('@/assets/icons/logo.svg')"
      class="menu--icon"
    />
    <div class="menu--wrapper">
      <router-link :to="{ name: 'About' }">Work</router-link>
      <router-link :to="{ name: 'About' }">Services</router-link>
      <router-link :to="{ name: 'About' }">Process</router-link>
      <router-link :to="{ name: 'About' }">Leadership</router-link>
      <router-link :to="{ name: 'About' }">Contact</router-link>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100vw;
  padding: 35px 8.34%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--wrapper {
    width: 47.67%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 18px;
      line-height: 150%;
      color: #1E1F21;
      text-decoration: none;
      font-family: 'Proxima Nova';
      font-weight: bold;
    }
  }
}
</style>
