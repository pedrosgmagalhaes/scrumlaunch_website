<template>
  <NuxtLink
    class="item"
    :to="item.url"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div
      v-if="!hover"
      class="item--preview"
      :style="{ 'background-image': `url('${setBackgroundImage}')` }"
    ></div>

    <div v-else class="item--info">
      <div class="item--info--header">
        <p class="body-5">{{ item.type }}</p>
        <p class="item--info--header--year body-2">{{ item.year }}</p>
      </div>

      <div class="item--info--desc">
        <p class="header-2 item--info--desc--header">{{ item.name }}</p>

        <div class="item--info--desc--info">
          <p class="item--info--desc--info--text body-4">
            <span v-for="(tag, i) in item.tags" :key="i">{{ tag }}</span>
          </p>

          <img
            :src="require('@/assets/icons/union-empty.svg')"
            class="item--info--desc--info--icon"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['item'],

  data: () => ({
    hover: false,
  }),

  computed: {
    setBackgroundImage() {
      return require(`@/assets/images/work/${this.item.image.small}`)
    },
  },

  methods: {
    handleNavigation(pageName) {
      this.$router.push({ name: pageName })
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 265px;
  position: relative;
  color: #1e1f21;
  text-decoration: none;
  cursor: pointer;

  &--preview {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
  }

  &--info {
    border: 1px solid #1e1f21;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 26px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      &--year {
        border: 1px solid #1e1f21;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &--desc {
      text-align: left;

      &--header {
        margin-bottom: 10px;
      }

      &--info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        &--text {
          max-width: 210px;
          overflow: hidden;
          // text-overflow: ellipsis;
          white-space: nowrap;

          span {
            position: relative;
            margin-right: 28px;

            &:before {
              content: '';
              position: absolute;
              top: 6px;
              right: -18px;
              width: 5px;
              height: 5px;
              background: #1e1f21;
              border-radius: 50%;
            }

            &:last-child {
              &:before {
                display: none;
              }
            }
          }
        }

        &--icon {
          width: 30px;
          height: 18px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .item {
    width: 50%;

    &--info {
      padding: 26px 40px;

      &--desc {
        text-align: left;

        &--header {
          margin-bottom: 13px;
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  .item {
    flex: 0 0 33.3333333333%;
    height: 340px;

    &--info {
      padding: 40px;

      &--header {
        &--year {
          width: 86px;
          height: 86px;
        }
      }

      &--desc {
        &--header {
          margin-bottom: 0px;
          font-size: 30px;
        }

        &--info {
          &--text {
            width: 100%;
            max-width: 260px;
            overflow: hidden;
            // text-overflow: ellipsis;
            white-space: nowrap;

            span {
              &:before {
                width: 8px;
                height: 8px;
              }
            }
          }

          &--icon {
            width: 75px;
            height: 37px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1880px) {
  .item {
    height: 445px;

    &--info {
      &--desc {
        &--header {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
