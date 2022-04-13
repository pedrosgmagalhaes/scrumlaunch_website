<template>
  <div class="menu home">
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
        <router-link :to="{ name: 'Work' }">Work</router-link>
        <router-link :to="{ name: 'Services' }">Services</router-link>
        <router-link :to="{ name: 'Process' }">Process</router-link>
        <router-link :to="{ name: 'Leadership' }">Leadership</router-link>
        <div class="dropdown__wrap">
          <span>Blog</span>
          <ul class="dropdown">
            <li><router-link to="/blog/web-development-company-outsourcing">2021 Guide to Outsourcing Web Development</router-link></li>
            <li><router-link to="/blog/web-development-company-outsourcing/software-development-in-ukraine">The #1 Software Development Firm in Ukraine</router-link></li>
            <li><router-link to="/blog/web-development-company-outsourcing/website-development-consultants">The #1 Website Development Consultant in 2021</router-link></li>
            <li><router-link to="/hire-developers">Hire Quality Developers in Minutes - Deploy in Hours</router-link></li>
            <li><router-link to="/blog/hire-developers/python-developers-and-programmers">Hire Quality Python Developers in Minutes</router-link></li>
            <li><router-link to="/blog">View All</router-link></li>
          </ul>
        </div>
        <div class="dropdown__wrap">
          <router-link to="/hire-developers">Hire Developers</router-link>
          <div class="dropdown">
            <div class="flex">
              <ul class="mr60">
                <li><router-link to="/hire-developers/php-developers">PHP Developers</router-link></li>
                <li><router-link to="/hire-developers/react-js-developers">React Js Developers</router-link></li>
                <li><router-link to="/hire-developers/django-developers">Django Developers</router-link></li>
                <li><router-link to="/hire-developers/wordpress-developers">Wordpress Developers</router-link></li>
                <li><router-link to="/hire-developers/java-developers">Java Developers</router-link></li>
                <li><router-link to="/hire-developers/ios-developers">iOS Developers</router-link></li>
              </ul>
              <ul class="mr60">
                <li><router-link to="/hire-developers/android-developers">Android Developers</router-link></li>
                <li><router-link to="/hire-developers/web-developers">Web Developers</router-link></li>
                <li><router-link to="/hire-developers/angular-js-developers">Angular Js Developers</router-link></li>
                <li><router-link to="/hire-developers/node-js-developers">Node Js Developers</router-link></li>
                <li><router-link to="/hire-developers/ruby-on-rails-developers">Ruby On Rails Developers</router-link></li>
                <li><router-link to="/hire-developers/software-developers">Software Developers</router-link></li>
              </ul>
              <ul>
                <li><router-link to="/hire-developers/python-developers">Python Developers</router-link></li>
                <li><router-link to="/hire-developers/solidity-developers">Solidity Developers</router-link></li>
                <li><router-link to="/hire-developers/react-native-developers">React Native Developers</router-link></li>
                <li><router-link to="/hire-developers/ruby-developers">Ruby Developers</router-link></li>
                <li><router-link to="/blog/hire-developers">View All Languages</router-link></li>
              </ul>
            </div>
          </div>
        </div>
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
        <span @click="handleNavigation('Work')" class="menu--burger--links--item">Work</span>
        <span @click="handleNavigation('Services')" class="menu--burger--links--item">Services</span>
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
      if (this.$route.name === "Home" ||
          this.$route.name === "ContactUs" ||
          this.$route.name === "FamilyGameNightCaseStudy" ||
          this.$route.name === "HarvestCaseStudy" ||
          this.$route.name === "FullCourtAiCaseStudy" ||
          this.$route.name === "HelmmCaseStudy" ||
          this.$route.name === "ScopeCaseStudy" ||
          this.$route.name === "ProgLang" ||
          this.$route.name === "CampusReelCaseStudy") {
        this.contactPage = true;
      } else {
        this.contactPage = false;
      }
    }
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if ( this.showMenu ) {
        document.querySelector('body').classList.add('overflow-hidden')
      }
      else {
        document.querySelector('body').classList.remove('overflow-hidden')
      }
    },

    handleNavigation(pageName) {
      if (this.showMenu) {
        this.showMenu = false;
        document.querySelector('body').classList.remove('overflow-hidden')
      }
      this.$router.push({ name: pageName });
    },

    dropdownToggle(e) {
      if ( e.target.nextElementSibling !== null && e.target.nextElementSibling.classList.contains('dropdown') ) {
        if ( !e.target.nextElementSibling.classList.contains('active') ) {
          e.target.nextElementSibling.classList.add('active')
          return
        }
        if ( e.target.nextElementSibling.classList.contains('active') ) {
          e.target.nextElementSibling.classList.remove('active')
          return
        }
      }
      
      if ( e.target.offsetParent.classList.contains('dropdown') ) {
        e.target.offsetParent.classList.remove('active')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
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

      a, span {
        &:hover {
          color: #12E2B0;
        }
      }
    }

    &--wrapper-mobile {
      display: block;
    }
  }

  &--burger {
    width: 100%;
    height: 100vh;
    background: #000000;
    padding: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    overflow: auto;
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

.dropdown {
  position: absolute;
  top: 64px;
  right: 0;
  padding: 40px 40px 24px 40px;
  text-align: left;
  opacity: 0;
  background: #FFFFFF;
  border: 1px solid #1E1F21;
  user-select: none;
  pointer-events: none;
  transition: opacity 0.15s;

  $root: &;

  &.active {
    opacity: 1;
    user-select: initial;
    pointer-events: initial;
  }

  &__wrap {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      // top: 33px;
      // left: -100px;
      right: 0;
      bottom: -40px;
      width: 200px;
      height: 50px;
      display: none;
    }

    &:hover {
      #{$root} {
        opacity: 1;
        user-select: initial;
        pointer-events: initial;
      }

      &:before {
        display: block;
      }
    }

    & > span {
      cursor: pointer;
    }
  }

  li {
    margin-bottom: 16px;

    a {
      white-space: nowrap;
      font-size: 18px !important;
      color: #1E1F21 !important;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;

      &:hover {
        color: #12E2B0 !important;
      }
    }
  }
}

.mr60 {
  margin-right: 60px;
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
    // padding: 35px 8.34%;

    &--desktop {

      &--icon {
        width: 80px;
        height: 36px;
      }

      &--wrapper {
        // width: 47.67%;
        width: 100%;
        max-width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &.white-wrapper {
          a, span {
            color: #FFFFFF;

            &:hover {
              color: #12E2B0;
            }
          }
        }

        a, span {
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

@media screen and (min-width: 1140px) {
  .menu {
    padding-left: 44px;
    padding-right: 44px;
  }
}

@media screen and (min-width: 1280px) {
  .menu {
    padding: 35px 8.34%;

    &--desktop {
      &--wrapper {
        max-width: 800px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .menu {
    &--desktop {
      &--wrapper {
        max-width: 900px;
      }
    }
  }
}

@media screen and (min-width: 1900px) {
  .menu {
    &.home {
      .menu--desktop {
        &--wrapper {
          a, span {
            font-size: 24px;
          }
        }

        &--icon {
          width: 100px;
          height: 41px;
        }
      }
    }

    &--desktop {
      &--wrapper {
        max-width: 1000px;
      }
    }
  }
}
</style>
