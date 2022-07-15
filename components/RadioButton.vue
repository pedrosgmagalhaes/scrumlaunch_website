<template>
  <div class="radio" @click="$emit('click')">
    <div class="radio_btn">
      <div :class="{ active: active }" />
    </div>
    <p class="radio_title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    active: { type: Boolean, default: false },
  },
}
</script>

<style scoped lang="scss">
.radio {
  display: flex;
  gap: 24px;
  cursor: pointer;

  &_btn {
    & > div {
      transition: background linear 0.2s;
    }

    width: 100%;
    max-width: 38px;

    border-radius: 50%;
    height: 38px;
    border: 2px solid #1e1f21;
    text-align: center;
    position: relative;
  }

  .active {
    width: 30px;
    height: 30px;
    background: #1e1f21;
    border-radius: 50%;
    position: absolute;
    top: 0;
    margin: auto;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &_title {
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    color: #1e1f21;
    max-width: 550px;
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  .radio {
    align-items: center;

    &_btn {
      max-width: 32px;
      height: 32px;
    }

    .active {
      width: 25px;
      height: 25px;
    }

    &_title {
      font-size: 18px;
    }
  }
}
</style>
