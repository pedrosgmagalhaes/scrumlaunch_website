<template>
  <div class="menu">
    <div v-if="!showMenu" class="menu--desktop">
      <router-link :to="{ name: 'Home' }">
        <inline-svg
          :src="require('@/assets/icons/logo.svg')"
          class="menu--desktop--icon"
          :fill="contactPage ? '#FFFFFF' : '#1E1F21'"
        />
      </router-link>
      <div
        class="menu--desktop--wrapper"
        :class="contactPage && 'white-wrapper'"
      >
        <router-link :to="{ name: 'Home' }">Work</router-link>
        <router-link :to="{ name: 'Home' }">Services</router-link>
        <router-link :to="{ name: 'Process' }">Process</router-link>
        <router-link :to="{ name: 'Leadership' }">Leadership</router-link>
        <router-link :to="{ name: 'ContactUs' }">Contact</router-link>
      </div>
      <div class="menu--desktop--wrapper-mobile">
        <inline-svg
          :src="require('@/assets/icons/menu-mobile.svg')"
          :fill="contactPage ? '#FFFFFF' : '#1E1F21'"
          class="menu--desktop--wrapper-mobile--icon"
          @click="toggleMenu"
        />
      </div>
    </div>

    <div v-else class="menu--burger">
      <div class="menu--burger--header">
        <inline-svg
          :src="require('@/assets/icons/logo.svg')"
          class="menu--burger--header--icon"
          fill="#FFFFFF"
          @click="handleNavigation('Home')"
        />
        <inline-svg
          :src="require('@/assets/icons/close.svg')"
          class="menu--burger--header--icon-close"
          @click="toggleMenu"
        />
      </div>
      <div class="menu--burger--links">
        <span @click="handleNavigation('Home')" class="menu--burger--links--item">Home</span>
        <span @click="handleNavigation('Home')" class="menu--burger--links--item">Work</span>
        <span @click="handleNavigation('Home')" class="menu--burger--links--item">Services</span>
        <span @click="handleNavigation('Process')" class="menu--burger--links--item">Process</span>
        <span @click="handleNavigation('Leadership')" class="menu--burger--links--item">Leadership</span>
        <span @click="handleNavigation('ContactUs')" class="menu--burger--links--item">Contact</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    contactPage: false
  }),

  watch: {
    $route() {
      if (this.$route.name === "ContactUs") {
        this.contactPage = true;
      } else {
        this.contactPage = false;
      }
    }
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    handleNavigation(pageName) {
      if (this.showMenu) {
        this.showMenu = false;
      }
      this.$router.push({ name: pageName });
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100vw;
  padding: 18px 20px;
  box-sizing: border-box;

  &--desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--icon {
      width: 60px;
      height: 27px;
    }

    &--wrapper {
      display: none;
    }

    &--wrapper-mobile {
      display: block;
    }
  }

  &--burger {
    width: 100vw;
    height: 100vh;
    background: #000000;
    padding: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    overflow: hidden;
    position: fixed;

    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 90px;

      &--icon {
        width: 60px;
        height: 27px;
      }
    }

    &--links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &--item {
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 140%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .menu {
    padding: 30px;

    &--burger {
      padding: 30px;

      &--links {
        &--item {
          font-size: 56px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .menu {
    padding: 35px 8.34%;

    &--desktop {

      &--icon {
        width: 80px;
        height: 36px;
      }

      &--wrapper {
        width: 47.67%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &.white-wrapper {
          a {
            color: #FFFFFF;
          }
        }

        a {
          font-size: 18px;
          line-height: 150%;
          text-decoration: none;
          font-family: 'Proxima Nova';
          font-weight: bold;
          color: #1E1F21;
        }
      }

      &--wrapper-mobile {
        display: none;
      }
    }
  }
}
</style>
