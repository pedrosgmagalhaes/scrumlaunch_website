<template>
  <div class="contact-us">
    <inline-svg
      :src="require('@/assets/illustrations/illustration-faces.svg')"
      class="contact-us--icon"
    />
    <div class="contact-us--text">
      <p class="header-2">Want to talk new projects, collaborations, or just say hello? Get in touch with me.</p>
      <router-link class="btn" :to="{ name: 'ContactUs' }">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 80px;

  &--icon {
    width: 280px;
    height: auto;
  }

  &--text {
    text-align: left;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 40px;
      margin-top: 29px;
      text-align: left;
      width: 101%;
    }
  }
}

@media screen and (min-width: 375px) {
  .contact-us--icon {
    width: 334px;
    height: 221px;
  }
}

@media screen and (min-width: 768px) {
  .contact-us {
    padding: 0 30px;
    margin-bottom: 140px;

    &--icon {
      width: 708px;
      height: 462px;
    }

    &--text {
      p {
        margin-bottom: 60px;
        margin-top: 62px;
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-us {
    padding: 0 8.34% 0;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 240px;

    &--icon {
      width: 596px;
      height: 392px;
    }

    &--text {
      max-width: 39%;
      justify-content: space-around;
      align-items: flex-start;

      p {
        margin-top: 0px;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
