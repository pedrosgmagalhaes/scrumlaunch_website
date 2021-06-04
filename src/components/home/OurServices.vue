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
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 80px 0;
  text-align: right;

  h2 {
    margin-bottom: 40px;
    -webkit-text-stroke: 0.5px #1E1F21;
  }

  p {
    margin-bottom: 30px;
    transition: all .4s ease;
    width: fit-content;
    font-size: 20px;

    &:hover {
      color: #12E2B0;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }
}

@media screen and (min-width: 768px) {
  .services {
    padding: 0px 30px;
    margin: 140px 0;

    h2 {
      margin-bottom: 60px;
      -webkit-text-stroke: 1px #1E1F21;
    }

    p {
      margin-bottom: 36px;
      font-size: 40px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .services {
    padding: 0 8.34% 0;
    margin: 240px 0;

    h2 {
      margin-bottom: 59px;
    }

    p {
      margin-bottom: 52px;
      font-size: 56px;
    }
  }
}
</style>
