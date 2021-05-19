<template>
  <div class="input-item">
    <div class="input-item--input-wrapper">
      <input
        :class="['input-item--input-wrapper--input',
          {'err': this.errorMessage}
        ]"
        @input="handleChange"
        :type="type"
        :name="name"
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
      >
    </div>
    <p v-if="errorMessage" class="input-item--input-wrapper--error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: 'Error Notification'
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },

}
</script>

<style lang="scss">
.input-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &--input-wrapper {
    position: relative;
    border-bottom: 1px solid #1E1F21;

    &--input {
      color: #1E1F21;
      border: none;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
      width: 100%;
      box-shadow: none;
      padding-bottom: 12px;
      box-sizing: border-box;

      &.err {
        color: #E83C56;

        &::placeholder {
          color: #E83C56;
        }
      }

      &:hover, &:focus, &:focus-visible {
        cursor: pointer;
        border: none;
        outline: none;
      }

      &::placeholder {
        color: #1E1F21;
      }
    }

    &--error {
      font-size: 12px;
      color: #E83C56;
      text-align: right;
      font-weight: 500;
      line-height: 150%;
      position: absolute;
      bottom: -22px;
      right: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .input-item--input-wrapper--input {
    font-size: 16px;
  }
}

@media screen and (min-width: 1280px) {
  .input-item--input-wrapper--input {
    padding-left: 80px;
    font-size: 18px;
  }
}
</style>
