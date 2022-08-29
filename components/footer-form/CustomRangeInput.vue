<template>
  <input
    :id="id"
    type="range"
    :name="name"
    :value="modelValue"
    min="0"
    max="3"
    step="1"
    @input="handleChange"
    @change="handleChange"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: 'Error Notification',
    },

    spacing: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='range'] {
  height: 36px;
  -webkit-appearance: none;
  margin: 20px 0;
  width: 100%;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: #1e1f21;
}
input[type='range']::-webkit-slider-thumb {
  border: 0px solid #12e2b0;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #12e2b0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -13.5px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #1e1f21;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;

  background: #1e1f21;
}
input[type='range']::-moz-range-thumb {
  border: 0px solid #12e2b0;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #12e2b0;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;

  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #1e1f21;
}
input[type='range']::-ms-fill-upper {
  background: #1e1f21;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  border: 0px solid #12e2b0;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: #12e2b0;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #1e1f21;
}
input[type='range']:focus::-ms-fill-upper {
  background: #1e1f21;
}
</style>
