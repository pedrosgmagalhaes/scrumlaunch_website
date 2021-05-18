<template>
  <div class="member">
    <div
      class="member--image"
      :style="{'background-image': `url('${setBackgroundImage}')`}"
    >
    </div>
    <div class="member--info">
      <p class="header-2">{{member.name}}</p>
      <div class="member--info--position">
        <p class="body-4">{{member.position}}</p>
        <p v-if="member.position_2" class="body-4 member--info--position--text">{{member.position_2}}</p>
      </div>
      <div class="member--info--links">
        <inline-svg
          :src="require('@/assets/icons/linkedin.svg')"
          class="member--info--links--icon"
          @click="handleOpenInLink(member.inLink)"
        />
        <router-link :to="{ name: 'Home' }" class="button-link">View bio</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'member'
  ],

  computed: {
    setBackgroundImage() {
      return require(`@/assets/images/leadership/${this.member.photo}.png`);
    }
  },

  methods: {
    handleOpenInLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  border: 1px solid #1E1F21;
  box-sizing: border-box;
  width: 386px;
  height: 587px;

  &--image {
    width: 384px;
    height: 394px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &--info {
    padding: 29px 19px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &--position {
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 40px;

      &--text {
        position: relative;
        padding-left: 18px;
        margin-left: 10px;

        &::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #1E1F21;
          border-radius: 50%;
          top: 8px;
          left: 0px;
        }
      }
    }

    &--links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &--icon {
        cursor: pointer;
      }
    }
  }
}
</style>
