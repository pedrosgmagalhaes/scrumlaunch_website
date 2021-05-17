<template>
  <div class="footer">
    <div class="footer--menu">
      <router-link :to="{ name: 'About' }">Portfolio</router-link>
      <router-link :to="{ name: 'About' }">About us</router-link>
      <router-link :to="{ name: 'About' }">Contact</router-link>
    </div>
    <div class="footer--contact">
      <div class="footer--contact--item">
        <p>Phone</p>
        <a href="tel:+380989999999">+38 (098) 99 99 999</a>
      </div>
      <div class="footer--contact--item">
        <p>Email</p>
        <a href="mailto:hello@scrumlaunch.com" style="color: #FF0000;">hello@scrumlaunch.com</a>
      </div>
    </div>
    <div class="footer--address">
      <p>Netechens'ka embankment 8,<br />Kharkiv, Ukraine</p>
    </div>
    <SocialBlock />
    <span>© ScrumLaunch 2021</span>
  </div>
</template>

<script>
import SocialBlock from '@/components/SocialBlock.vue';

export default {
  components: {
    SocialBlock
  },
}
</script>


<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 278px;
  padding: 60px 8.34%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #1E1F21;
  position: relative;

  a, p {
    font-size: 18px;
    line-height: 150%;
    color: #1E1F21;
    text-decoration: none;
    font-family: 'Proxima Nova';
    font-weight: bold;
    text-align: left;
  }

  span {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    position: absolute;
    bottom: 60px;
    right: 8.34%;
  }

  &--menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-right: 14.17%;
  }

  &--contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    margin-right: 7.83%;

    &--item {
      text-align: left;

      p {
        margin-bottom: 4px;
      }

      a {
        font-size: 24px;
      }
    }
  }

  &--address {
    margin-right: 18.92%;
  }
}
</style>
