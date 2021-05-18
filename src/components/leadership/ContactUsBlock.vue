<template>
  <div class="contact-block">
    <p class="header-2">Looking to build something amazing? We’d love to help.</p>
    <router-link class="btn" :to="{ name: 'Home'}">contact us</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-block {
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-right: 0px;
  margin-bottom: 80px;
  position: relative;

  p {
    margin-right: 8px;
    width: 58.9%;
    text-align: left;
  }
}

@media screen and (min-width: 768px) {
  .contact-block {
    justify-content: flex-end;
    margin-right: 0px;
    margin-bottom: 140px;

    p {
      margin-right: 29px;
      width: 46.7%;
    }
  }
}

@media screen and (min-width: 1440px) {
  .contact-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 34px;
    margin-bottom: 240px;
    position: relative;

    p {
      margin-right: 8px;
      width: 35.3%;
      text-align: left;
    }
  }
}
</style>
