<template>
  <div class="contact-us">
    <div class="contact-us--hero">
      <h1 class="header-big">Let’s <br/>
        <span style="color: #12E2B0;">talk</span>
      </h1>
      <p class="header-2">Interested in working with us? <span style="color: #1E1F21; background: #12E2B0;">Send us an email</span> or start a conversation by filling out the form below.</p>
    </div>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  &--hero {
    padding: 125px 20px 80px;
    background: #1E1F21;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;

    p {
      margin-top: 74px;
      text-align: left;
      width: 67%;
    }
  }
}

@media screen and (min-width: 768px) {
  .contact-us {
    &--hero {
      padding: 157px 30px 100px;

      p {
        margin-top: 134px;
        width: 73.5%;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-us {
    &--hero {
      padding: 206px 8.34% 124px;
      justify-content: flex-start;

      p {
        margin-top: 97px;
        margin-left: 146px;
        width: 62%;
      }
    }
  }
}
</style>
