<template>
  <div class="news">
    <inline-svg
      :src="require('@/assets/illustrations/reliability.svg')"
      class="news--icon"
    />

    <h2 class="header-1">NEWS & INSIGHTS</h2>

    <div class="news--wrapper">
      <div class="news--wrapper--item" v-for="i in 3" :key="i">
        <div class="news--wrapper--item--content">
          <p class="news--wrapper--item--content--header header-2">How does FGN app help seniors and why is it so important?</p>
          <p class="news--wrapper--item--content--text body-3">Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.</p>
          <span class="header-4">02 Dec 21</span>
        </div>
        <div class="news--wrapper--item--arrow"></div>
      </div>
    </div>

    <button class="btn news--btn">explore more</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.news {
  padding: 420px 8.34% 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 240px;
  position: relative;
  overflow: hidden;

  &--icon {
    position: absolute;
    top: -5px;
    right: -143px;
  }

  h2 {
    margin-bottom: 152px;
    text-align: left;
  }

  &--wrapper {
    &--item {
      padding: 50px 0;
      border-top: 1px solid #1E1F21;
      display: flex;
      justify-content: space-between;

      &:last-child {
        border-bottom: 1px solid #1E1F21;
      }

      &--content {
        max-width: 68%;
        text-align: left;

        &--header {
          margin-bottom: 20px;
        }

        &--text {
          margin-bottom: 40px;
        }
      }

      &--arrow {
        width: 75px;
        height: 37px;
        background-image: url('../../assets/icons/union-empty.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transition: all .4s ease;
        cursor: pointer;

        &:hover {
          background-image: url('../../assets/icons/union.svg');
        }
      }
    }
  }

  &--btn {
    margin: 80px auto 0;
  }

}
</style>
