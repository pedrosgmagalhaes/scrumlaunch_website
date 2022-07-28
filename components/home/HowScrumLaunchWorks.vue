<template>
  <div class="how_scrumlaunch_works">
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
      </div>
    </div>
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
.circle {
  width: 80px;
  height: 80px;
  border: 1px solid #000000;
  border-radius: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

.truncate {
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
}

.anim_container {
  height: 120px;
  width: 1065px;
}

.card_container {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.card_item {
  max-width: 255px;
}

.card_title {
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #1e1f21;
  margin-bottom: 16px;
  margin-top: 40px;
}

.description {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #1e1f21;
}

.arrows {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.prev {
  cursor: pointer;
}

.next {
  transform: rotate(180deg);
  cursor: pointer;
}

.how_scrumlaunch_works {
  padding-top: 240px;
  padding-bottom: 240px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  & * {
    box-sizing: border-box;
  }

  &__title {
    margin-bottom: 80px;
    font-size: 56px;
    font-weight: 900;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
}
</style>
