<template>
  <div class="contact-us">
    <inline-svg
      :src="require('@/assets/illustrations/illustration-team.svg')"
      class="flexible--icon"
    />
    <div class="contact-us--text">
      <p class="header-2">Want to talk new projects, collaborations, or just say hello? Get in touch with me.</p>
      <button class="btn">contact us</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 0 8.34% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 240px;

  &--text {
    text-align: left;
    flex: 1;
    max-width: 39%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      margin-bottom: 40px;
    }
  }
}
</style>
