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
  width: 335px;
  height: 470px;
  margin-bottom: 30px;

  &--image {
    width: 100%;
    height: 341px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &--info {
    padding: 24px 12px 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    &--position {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 22px;

      &--text {
        position: relative;
        padding-left: 11px;
        margin-left: 6px;

        &::before {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background: #1E1F21;
          border-radius: 50%;
          top: 6px;
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
        width: 24px;
        height: 24px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .member {
    width: 339px;

    &--info {
      padding: 24px 16px 14px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .member {
    width: 386px;
    height: 587px;
    margin-bottom: 0px;

    &--image {
      height: 394px;
    }

    &--info {
      padding: 29px 20px 20px;

      &--position {
        margin-top: 10px;
        margin-bottom: 40px;

        &--text {
          padding-left: 18px;
          margin-left: 10px;

          &::before {
            content: '';
            width: 8px;
            height: 8px;
            top: 8px;
          }
        }
      }

      &--links {
        &--icon {
          width: 27px;
          height: 27px;
        }
      }
    }
  }
}
</style>
