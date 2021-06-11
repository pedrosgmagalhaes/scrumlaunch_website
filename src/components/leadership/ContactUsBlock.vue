<template>
  <div class="contact-block">
    <div class="contact-block--icon">
      <div class="contact-block--icon--desktop">
        <img src="../../assets/animation/lower-block-desktop.gif" />
      </div>
      <div class="contact-block--icon--tablet">
        <img src="../../assets/animation/lower-block-tablet.gif" />
      </div>
      <div class="contact-block--icon--mobile">
        <img src="../../assets/animation/lower-block-mobile.gif" />
      </div>
    </div>
    <p class="header-2">Looking to build something amazing? We’d love to help.</p>
    <router-link class="btn" :to="{ name: 'ContactUs'}">contact us</router-link>
  </div>
</template>

<style lang="scss" scoped>
.contact-block {
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-right: 0px;
  margin-bottom: 80px;
  position: relative;
  padding: 0 20px;

  &--icon {
    position: absolute;
    z-index: -1;
    left: 0;
    top: -300px;

    &--desktop {
      display: none;
    }

    &--tablet {
      display: none;
    }

    &--mobile {
      display: block;
    }
  }

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
    padding: 0 30px;

    &--icon {
      top: -100px;
      left: -15px;

      &--desktop {
        display: none;
      }

      &--tablet {
        display: block;
      }

      &--mobile {
        display: none;
      }
    }

    p {
      margin-right: 29px;
      width: 46.7%;
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 34px;
    margin-bottom: 240px;
    position: relative;
    padding: 0 8.34%;

    &--icon {
      top: -150px;
      left: 0px;

      &--desktop {
        display: block;
      }

      &--tablet {
        display: none;
      }

      &--mobile {
        display: none;
      }
    }

    p {
      margin-right: 8px;
      width: 35.3%;
      text-align: left;
    }
  }
}
</style>
