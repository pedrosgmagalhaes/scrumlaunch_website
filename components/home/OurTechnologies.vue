<template>
  <div class="our_technologies">
    <div class="our_technologies__header">
      <div class="our_technologies__line">
        <div v-for="i in 3" :key="i">
          <dir v-if="i % 2" class="header-1 header-1-stroke-2">
            Our Technologies
          </dir>
          <dir v-else class="header-1">Our Technologies</dir>
        </div>
      </div>
    </div>

    <div class="our_technologies__technologies_list_block">
      <div class="our_technologies__technologies_list_row flex:lg">
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Python</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >PHP</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >NodeJS</NuxtLink
        >
        <img
          src="/images/home/our_technologies_1.svg"
          alt="our_technologies_1"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >RubyOnRails</NuxtLink
        >
      </div>

      <div class="our_technologies__technologies_list_row flex:lg hide:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Solidity</NuxtLink
        >
        <img
          src="/images/home/our_technologies_2.svg"
          alt="our_technologies_2"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >ReactJS</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >ReactNative</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >.NET</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Vue</NuxtLink
        >
      </div>
      <div class="our_technologies__technologies_list_row hide:lg flex:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Solidity</NuxtLink
        >
        <img
          src="/images/home/our_technologies_2.svg"
          alt="our_technologies_2"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >ReactJS</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >ReactNative</NuxtLink
        >
      </div>

      <div class="our_technologies__technologies_list_row flex:lg hide:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Angular</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Swift</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Kotlin</NuxtLink
        >
        <img
          src="/images/home/our_technologies_3.svg"
          alt="our_technologies_3"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Flutter</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >DevOps</NuxtLink
        >
      </div>
      <div class="our_technologies__technologies_list_row hide:lg flex:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >.NET</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Vue</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Angular</NuxtLink
        >
        <img
          src="/images/home/our_technologies_3.svg"
          alt="our_technologies_3"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Swift</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Kotlin</NuxtLink
        >
      </div>

      <div class="our_technologies__technologies_list_row flex:lg hide:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Machine Learning</NuxtLink
        >
        <img
          src="/images/home/our_technologies_4.svg"
          alt="our_technologies_4"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >AWS</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >UI/UX Design</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Agile Development</NuxtLink
        >
      </div>
      <div class="our_technologies__technologies_list_row hide:lg flex:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Flutter</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >DevOps</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >Machine Learning</NuxtLink
        >
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >AWS</NuxtLink
        >
      </div>
      <div class="our_technologies__technologies_list_row hide:lg flex:xs">
        <NuxtLink to="" class="our_technologies__technologies_list_item"
          >UI/UX Design</NuxtLink
        >
        <img
          src="/images/home/our_technologies_4.svg"
          alt="our_technologies_4"
          class="our_technologies__technologies_list_icon"
        />
        <NuxtLink to="" class="our_technologies__technologies_list_item green"
          >Agile Development</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-1 {
  margin: 0;
  padding: 0 25px;
  font-weight: 900;
  font-size: 75px;
  line-height: 100%;
  color: #fff;
  white-space: nowrap;

  @media screen and (max-width: 1440px) {
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    font-size: 48px;
  }

  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
}

.our_technologies {
  padding-top: 300px;
  padding-bottom: 300px;
  background: #1e1f21;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }

  & * {
    box-sizing: border-box;
  }

  &__header {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 120px;
    height: 105px;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
      margin-bottom: 80px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 425px) {
      margin-bottom: 5px;
    }
  }

  &__line {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  &__technologies_list_row {
    justify-content: center;

    @media screen and (max-width: 1440px) {
      flex-wrap: wrap;
    }
  }

  &__technologies_list_item {
    margin-right: 26px;
    margin-bottom: 26px;
    padding: 10px 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    color: #fff;
    border: 1px solid #ffffff;
    text-decoration: none;

    @media screen and (max-width: 1440px) {
      padding: 10px 20px;
      font-size: 24px;
    }

    @media screen and (max-width: 768px) {
      margin-right: 17px;
      margin-bottom: 20px;
      padding: 10px 20px;
      font-size: 24px;
    }

    @media screen and (max-width: 425px) {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 8px 12px 6px 12px;
      font-size: 12px;
    }

    &:hover {
      color: #12e2b0;
    }

    &:last-child {
      margin-right: 0;
    }

    &.green {
      color: #12e2b0;

      &:hover {
        color: #fff;
      }
    }
  }

  &__technologies_list_icon {
    margin-right: 26px;
    margin-bottom: 26px;

    @media screen and (max-width: 1440px) {
      margin-right: 15px;
      margin-bottom: 15px;
    }

    @media screen and (max-width: 768px) {
      margin-right: 17px;
      margin-bottom: 20px;
      max-width: 40px;
    }

    @media screen and (max-width: 425px) {
      margin-right: 10px;
      margin-bottom: 10px;
      max-width: 18px;
    }
  }
}
</style>
