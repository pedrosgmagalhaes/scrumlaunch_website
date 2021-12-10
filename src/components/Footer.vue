<template>
  <div class="footer home">
    <div class="footer--menu">
      <router-link :to="{ name: 'Home' }">Portfolio</router-link>
      <router-link :to="{ name: 'Process' }">About us</router-link>
      <router-link :to="{ name: 'ContactUs' }">Contact</router-link>
    </div>
    <div class="footer--contact">

      
      <div class="footer--contact--item">
        <p>Phone</p>
        <a href="tel:+380989999999">+38 (098) 99 99 999</a>
      </div>
     

      <div class="footer--contact--item">
        <p>Email</p>
        <a href="mailto:charlie@scrumlaunch.com" style="color: #FF0000;">charlie@scrumlaunch.com</a>
      </div>

    </div>
    <div class="footer--address">
      <p>Netechens'ka embankment 8,<br> Kharkiv, Ukraine</p>
    </div>
    <SocialBlock class="footer--social"/>
    <span>© ScrumLaunch 2021</span>
    <ScrollToTop />
  </div>
</template>

<script>
import SocialBlock from '@/components/SocialBlock.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  components: {
    SocialBlock,
    ScrollToTop,
  },
}
</script>


<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 0px 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #1E1F21;
  position: relative;

  a, p {
    line-height: 150%;
    color: #1E1F21;
    text-decoration: none;
    font-family: 'Proxima Nova';
    font-weight: bold;
    text-align: left;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 18px;
  }

  span {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    position: absolute;
    bottom: 40px;
    right: 20px;
  }

  &--menu {
    display: none;
  }

  &--contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    margin-right: 0;
    margin-bottom: 24px;

    &--item {
      text-align: left;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0px;
      }

      p {
        margin-bottom: 4px;
      }

      a {
        font-size: 18px;
      }
    }
  }

  &--address {
    margin-right: 0;
    margin-bottom: 40px;
  }

  &--social {
    position: relative;
    right: inherit;
    bottom: inherit;
  }
}

@media screen and (min-width: 768px) {
  .footer {
    width: 100%;
    height: 278px;
    padding: 0px 30px 120px;
    flex-direction: row;
    justify-content: space-between;

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
      text-align: center;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }

    &--menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
      margin-right: 10.17%;
    }

    &--contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 100%;
      margin-right: 7.83%;
      margin-bottom: 0;

      &--item {
        text-align: left;
        margin-bottom: 24px;

        p {
          margin-bottom: 4px;
        }

        a {
          font-size: 24px;
        }
      }
    }

    &--address {
      margin-right: 0;
      margin-bottom: 0;
    }

    &--social {
      position: absolute;
      right: 30px;
      bottom: 122px;
    }
  }
}

@media screen and (min-width: 1140px) {

  .footer {

    span {
      text-align: right;
      position: absolute;
      bottom: 124px;
      right: 34px;
      left: inherit;
      transform: none;
    }

    &--social {
      position: relative;
      right: inherit;
      bottom: inherit;
    }
  }
}

@media screen and (min-width: 1280px) {
  .footer {
    width: 100%;
    height: 278px;
    padding: 0px 8.34% 60px;
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
      text-align: right;
      position: absolute;
      bottom: 60px;
      right: 8.34%;
      left: inherit;
      transform: none;
    }

    &--menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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
      margin-right: 11.92%;
    }

    &--social {
      position: relative;
      right: inherit;
      bottom: inherit;
    }
  }
}

@media screen and (min-width: 1900px) {
  .footer {
    &.home {
      .footer--menu {
        a {
          font-size: 24px;
          line-height: 150%;
        }
      }

      p {
        font-size: 24px;
        line-height: 150%;
      }

      span {
        font-size: 18px;
        line-height: 150%;
      }

      &--contact--item a {
        font-size: 32px;
        line-height: 150%;
      }
    }
  }
}
</style>
