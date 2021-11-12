<template>
  <div class="contact-form">
    <inline-svg
      :src="require('@/assets/icons/pencil.svg')"
      class="contact-form--icon"
    />
    <p class="header-big">HeLLO,</p>
    <div class="contact-form--wrapper">
      <label class="header-1" for="name">MY name is</label>
      <InputComponent
          class="contact-form--wrapper--input"
          :modelValue="name"
          @update:modelValue="handleFieldChange('name', $event)"
          placeholder="Enter your name here"
          id="name"
          name="name"
          :errorMessage="nameError"
        />
    </div>

    <div class="contact-form--wrapper">
      <label class="header-1" for="email">HERE are my contacts</label>
      <InputComponent
          class="contact-form--wrapper--input input-email"
          :modelValue="email"
          @update:modelValue="handleFieldChange('email', $event)"
          placeholder="Enter your email or phone number here"
          id="email"
          name="email"
          :errorMessage="emailError"
        />
    </div>

    <div class="contact-form--wrapper">
      <label class="header-1" for="email">I’m Intrested in</label>
      <InputComponent
          class="contact-form--wrapper--input input-project"
          :modelValue="project"
          @update:modelValue="handleFieldChange('project', $event)"
          placeholder="Enter your project details here"
          id="project"
          name="project"
          :errorMessage="projectError"
        />
    </div>

    <div class="contact-form--wrapper-btn">
      <button class="btn">Send</button>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/contact/InputComponent.vue'

export default {
  components: {
    InputComponent
  },

  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    project: '',
    projectError: null,
  }),

  methods: {
    handleFieldChange(name, value) {
      this[name] = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  position: relative;
  background: #fff;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1E1F21;
  position: relative;

  &--icon {
    position: absolute;
    width: 114px;
    height: 130px;
    top: 43px;
    right: 30px;
    z-index: 2;
  }

  & > p {
    margin-bottom: 60px;
  }

  &--wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 40px;

    label {
      margin-bottom: 16px;
    }

    &--input {
      width: 100%;
    }
  }

  &--wrapper-btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .contact-form {
    padding: 140px 30px;

    &--icon {
      position: absolute;
      width: 225px;
      height: 257px;
      top: 51px;
      right: 90px;
    }

    &--wrapper {
      margin-bottom: 50px;

      label {
        margin-bottom: 20px;
      }

      &--input {
        width: 50.4%;

        &.input-project {
          width: 83.76%;
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .contact-form {
    padding: 240px 8.34%;

    &--icon {
      position: absolute;
      width: 312.38px;
      height: 353px;
      top: 156px;
      right: 177px;
    }

    &--wrapper {
      margin-bottom: 40px;
      flex-direction: row;
      align-items: center;

      label {
        margin-bottom: 0px;
        margin-right: 20px;
      }

      &--input {
        width: 47%;

        &.input-project {
          width: 48%;
        }

        &.input-email {
          width: 39%;
        }
      }
    }

    &--wrapper-btn {
      margin-top: 40px;
    }
  }
}
</style>
