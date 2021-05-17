<template>
  <div class="services">
    <h2 class="header-1 header-1-stroke">Our Services</h2>
    <p class="header-1">Software Development</p>
    <p class="header-1">DevOps</p>
    <p class="header-1">UI/UX Design</p>
    <p class="header-1">User Research & Product Analytics</p>
    <p class="header-1">Brand Design</p>
    <p class="header-1">Pitch Deck Creation</p>
    <p class="header-1">Strategy</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.services {
  padding: 0 8.34% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 240px 0;
  text-align: right;

  h2 {
    margin-bottom: 59px;
  }

  p {
    margin-bottom: 52px;
    transition: all .4s ease;
    width: fit-content;

    &:hover {
      color: #12E2B0;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
