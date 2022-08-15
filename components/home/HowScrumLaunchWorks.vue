<template>
  <div class="how_scrumlaunch_works wrapper">
    <div class="header-1 how_scrumlaunch_works__title">
      How ScrumLaunch Works
    </div>

    <div class="anim_container">
      <lottie
        name="howScrumlaunchWork"
        loop
        renderer="svg"
        :options="{
          animationData: require('../../assets/animation/animation_circles.json'),
        }"
      />
    </div>

    <div class="card_container">
      <div v-for="(item, i) in data" :key="i" class="card_item">
        <div class="circle">
          <p class="circle_text">{{ i + 1 }}</p>
        </div>

        <h3 class="card_title">
          {{ item.title }}
        </h3>
        <p class="description" :class="{ truncate: item.isMore }">
          {{ item.description }}
        </p>
        <p
          v-if="item.isMore"
          class="read_more"
          @click="item.isMore = !item.isMore"
        >
          Read more
        </p>
        <div class="arrow">
          <img :src="require('@/assets/icons/arrow_down_btn.svg')" />
        </div>
      </div>
    </div>

    <div class="carousel_wrapper">
      <VueSlickCarousel v-bind="slickOptions" ref="carousel">
        <div v-for="(item, i) in data" :key="i" class="card_item">
          <div class="circle">
            <p class="circle_text">{{ i + 1 }}</p>
          </div>
          <h3 class="card_title">
            {{ item.title }}
          </h3>
          <p class="description" :class="{ truncate: item.isMore }">
            {{ item.description }}
          </p>
          <p
            v-if="item.isMore"
            class="read_more"
            @click="item.isMore = !item.isMore"
          >
            Read more
          </p>
        </div>
      </VueSlickCarousel>
      <div class="arrows">
        <img
          class="prev"
          :src="require('@/assets/icons/arrow_btn.svg')"
          @click="showPrev"
        />
        <img
          class="next"
          :src="require('@/assets/icons/arrow_btn.svg')"
          @click="showNext"
        />
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  components: {
    lottie,
  },

  data() {
    return {
      slickOptions: {
        slidesToShow: 2,
        arrows: false,
        swipe: false,
      },
      data: [
        {
          title: 'Discovery',
          description:
            'We develop a detailed understanding of your product roadmap, business objectives and ongoing software development & design needs. These insights help us to match you with the right talent for the long run.',
          isMore: true,
        },
        {
          title: 'Recruit & Hire',
          description:
            'Candidates are sourced through our internal talent pool or by our HR team in technical hubs around the world.',
          isMore: false,
        },
        {
          title: 'Onboard',
          description:
            'Our onboarding process is high communication and hands on so we can ensure new team members are up to speed and performing at a high level as quickly as possible. We also ensure high quality documentation of the onboarding process so it can be used to make things faster for future resources.',
          isMore: true,
        },
        {
          title: 'Manage',
          description:
            'We want your business to succeed. Our goal is to be your software development and design partner throughout your entire project lifecycle.',
          isMore: false,
        },
      ],
    }
  },

  methods: {
    afterPageChange(page) {
      this.sliderPageIndex = page
    },
    showNext() {
      this.$refs.carousel.next()
    },

    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 30px;
    margin-left: 10px;
  }
}

.circle {
  width: 80px;
  height: 80px;
  border: 1px solid #000000;
  border-radius: 130px;
  align-items: center;
  justify-content: center;
  display: none;

  @media screen and (max-width: 1439px) {
    display: flex;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    width: 50px;
    height: 50px;
  }
}

.circle_text {
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: #1e1f21;
}

.read_more {
  background-color: #13e2b0;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  padding: 5px 0;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 140%;
    padding: 2px 0;
  }
}

.truncate {
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;

  @media screen and (max-width: 767px) {
    -webkit-line-clamp: 2;
  }
}

.anim_container {
  height: 120px;
  width: 1065px;
  display: none;

  @media screen and (min-width: 1439px) {
    display: block;
  }
}

.card_container {
  gap: 60px;
  display: none;

  @media screen and (min-width: 1439px) {
    display: flex;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

.card_item {
  max-width: 255px;

  @media screen and (max-width: 767px) {
    max-width: 100%;

    &:nth-child(4) .arrow {
      display: none;
    }
  }
}

.card_title {
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #1e1f21;
  margin-bottom: 16px;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 26px;
  }
}

.description {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #1e1f21;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 140%;
  }
}

.carousel_wrapper {
  display: none;

  @media screen and (max-width: 1439px) {
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.arrows {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 75px;
}

.prev {
  cursor: pointer;
}

.next {
  transform: rotate(180deg);
  cursor: pointer;
}

.how_scrumlaunch_works {
  &__title {
    margin-bottom: 80px;
    font-size: 56px;
    font-weight: 900;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      font-size: 48px;
      margin-bottom: 60px;
    }

    @media screen and (max-width: 424px) {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
}
</style>
