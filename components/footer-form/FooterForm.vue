<template>
  <div class="form">
    <div class="form-element">
      <p class="form_label">Name</p>
      <InputComponent
        id="name"
        :modelValue="name"
        name="name"
        placeholder="Enter your name"
        :errorMessage="nameError"
        @update:modelValue="handleFieldChange('name', $event)"
      />
    </div>

    <div class="form-element">
      <p class="form_label">Email</p>
      <InputComponent
        id="email"
        :modelValue="email"
        name="email"
        placeholder="user@example.com"
        :errorMessage="emailError"
        @update:modelValue="handleFieldChange('email', $event)"
      />
    </div>

    <div class="form-element">
      <p class="form_label">Company name</p>
      <InputComponent
        id="company_name"
        :modelValue="company_name"
        name="company_name"
        placeholder="Enter company name"
        :errorMessage="companyNameError"
        @update:modelValue="handleFieldChange('company_name', $event)"
      />
    </div>

    <div class="form-element">
      <p class="form_label">Company size</p>
      <CustomRangeInput
        id="company_size"
        name="company_size"
        :modelValue="company_size"
        @update:modelValue="handleSelectCompanySize"
      />
      <div class="size_items">
        <p
          v-for="item in sizeItems"
          :key="item.value"
          class="size_item"
          :class="{ active_size_item: item.key === company_size }"
          @click="handleSelectCompanySize(item.key)"
        >
          {{ item.value }}
        </p>
      </div>
    </div>

    <div class="form-element">
      <p class="form_label">Total project budget</p>
      <div class="budget_wrapper">
        <div
          v-for="item in budgetItems"
          :key="item.value"
          class="budget_item"
          @click="handleChangeBudget(item.key)"
        >
          <div class="budget_checkbox">
            <div :class="{ active: item.key === budget }" />
          </div>
          <p class="budget_text">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <div class="form-element">
      <p class="form_label">In one sentence, what do you look to get done?</p>
      <InputComponent
        id="message"
        :modelValue="message"
        name="message"
        placeholder="Add your message"
        :errorMessage="messageError"
        @update:modelValue="handleFieldChange('message', $event)"
      />
    </div>

    <div class="btn_wrapper">
      <button class="form_button" @click="validateForm()">send</button>
    </div>

    <div
      v-show="is_sent"
      :class="{ blocked: is_blocked }"
      class="contact-form__frame_2"
    >
      <lottie
        v-show="is_done"
        class="contact-form__frame_2__image"
        name="reliabilityDesktopAnim"
        loop
        renderer="svg"
        :options="{
          animationData: require('../../assets/animation/rocket_launch.json'),
        }"
      />
      <div v-show="is_done" class="header-1">
        Your message<br />has been sent
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import InputComponent from '@/components/contact/InputComponent.vue'
import CustomRangeInput from '@/components/footer-form/CustomRangeInput.vue'

export default {
  components: { InputComponent, CustomRangeInput, lottie },

  data: () => ({
    name: '',
    nameError: null,
    email: '',
    emailError: null,
    company_name: '',
    companyNameError: null,
    company_size: '0',
    budget: '0',
    message: '',
    messageError: null,

    is_blocked: false,
    is_sent: false,
    is_done: false,

    sizeItems: [
      { key: '0', value: 'Idea' },
      { key: '1', value: 'Startup' },
      { key: '2', value: 'SMB' },
      { key: '3', value: 'Enterprise' },
    ],
    budgetItems: [
      { key: '0', value: '< $ 25,000' },
      { key: '1', value: '$150,000 - 300,000' },
      { key: '2', value: '$ 25,000 - 50,000' },
      { key: '3', value: '$500,000 - 1,000,000' },
      { key: '4', value: '$50,000 - 150,000' },
      { key: '5', value: '1,000,000 +' },
    ],
  }),

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    handleSelectCompanySize(value) {
      this.company_size = value
    },

    handleChangeBudget(value) {
      this.budget = value
    },

    sendForm() {
      this.is_sent = true
      this.is_blocked = true

      const details = `Company name: ${this.company_name}. Company Size: ${
        this.sizeItems[this.company_size].value
      }. Budget: ${this.budgetItems[this.budget].value}. Message: ${this.message}`

      const data = {
        name: this.name,
        email: this.email,
        details,
      }

      this.$axios.$post('/api/contact-us', data).then(() => {
        this.name = ''
        this.email = ''
        this.company_name = ''
        this.company_size = '0'
        this.budget = '0'
        this.message = ''

        this.is_blocked = false
        this.is_done = true

        this.track()

        setTimeout(() => {
          this.is_sent = false
          this.is_done = false
        }, 5000)
      })
    },

    validateForm() {
      // eslint-disable-next-line prefer-regex-literals
      const emailRegEx = new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
        'i'
      )
      this.nameError = this.name === '' ? 'Please, add your name here' : null

      this.emailError = !emailRegEx.test(this.email)
        ? 'Please, enter your correct email'
        : null

      this.companyNameError =
        this.company_name === '' ? 'Please, enter your company name here' : null

      this.messageError =
        this.message === '' ? 'Please, enter your message here' : null

      if (
        this.nameError === null &&
        this.emailError === null &&
        this.companyNameError === null &&
        this.messageError === null
      ) {
        this.sendForm()
      }
    },

    track() {
      if (this.$gtag !== undefined) {
        this.$gtag.event('conversion', {
          send_to: 'AW-10868833249/37WpCK7nhbQDEOH31L4o',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.btn_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.form {
  max-width: 660px;
  position: relative;

  @media screen and (max-width: 1439px) {
    margin: auto;
    max-width: 708px;
  }

  @media screen and (max-width: 790px) {
    max-width: 335px;
  }

  @media screen and (max-width: 424px) {
    max-width: 300px;
  }
}

.budget_wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.contact-form {
  &__frame_2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    z-index: 2;
    transition: background-color 0.2s;

    &.blocked {
      background-color: rgba(255, 255, 255, 0.8);
    }

    &__image {
      width: 290px !important;
      height: 290px !important;
    }
  }
}
.budget_item {
  width: 320px;
  padding: 18px;
  border: 1px solid #1e1f21;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
  box-sizing: border-box;

  @media screen and (max-width: 790px) {
    width: 335px;
  }

  @media screen and (max-width: 424px) {
    width: 300px;
  }
}

.budget_checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #1e1f21;
  border-radius: 50%;
  position: relative;
}

.active {
  position: absolute;
  border-radius: 50%;
  top: 0;
  margin: auto;
  right: 0;
  left: 0;
  bottom: 0;
  width: 14px;
  height: 14px;
  background: #1e1f21;
}

.budget_text {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.form-element:not(:last-child) {
  margin-bottom: 40px;
}

.form_label {
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 16px;
}

.size_items {
  display: flex;
  align-items: center;
}

.size_item {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 163px;

    @media screen and (max-width: 1439px) {
      margin-right: 179px;
    }

    @media screen and (max-width: 790px) {
      margin-right: 54px;
    }

    @media screen and (max-width: 424px) {
      margin-right: 38px;
    }
  }

  &:nth-child(3) {
    margin-right: auto;
  }

  &.active_size_item {
    font-weight: 700;
  }
}

.form_button {
  background: #12e2b0;
  border-radius: 54px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1e1f21;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  padding: 28px 150px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  font-family: 'Proxima Nova';

  &:active {
    background: #1e1f21;
    color: #12e2b0;
  }

  &:hover {
    background: #1e1f21;
    color: #ffffff;
  }

  @media screen and (max-width: 1439px) {
    font-size: 14px;
    padding: 20px 80px;
  }

  @media screen and (max-width: 790px) {
    font-size: 12px;
    padding: 20px 75px;
  }
}
</style>
