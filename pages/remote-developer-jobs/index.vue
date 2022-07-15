<template>
  <div class="vacancies">
    <div class="vacancies__section_1">
      <div class="container">
        <div class="header_container">
          <h1 class="header-big">
            <span>Scrumlaunch</span>
            <span style="color: #12e2b0">Job openings</span>
          </h1>

          <div class="header_image">
            <img src="/images/vacancies/magnifier.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="vacancies__section_2">
      <div class="container">
        <div class="vacancies__filters">
          <div class="vacancies__filter_wrap">
            <div class="vacancies__filter_label">Skill</div>
            <CustomSelect
              :modelValue="skill"
              class="vacancies__filter"
              label="Select skill"
              emptyValueText="Select All"
              :items="this['vacancies/getAllSkills']"
              @update:modelValue="handleFieldChange('skill', $event)"
            />
          </div>

          <div class="vacancies__filter_wrap">
            <div class="vacancies__filter_label">Location</div>
            <CustomSelect
              :modelValue="location"
              class="vacancies__filter"
              label="Select location"
              emptyValueText="Select All"
              :items="this['vacancies/getAllLocations']"
              @update:modelValue="handleFieldChange('location', $event)"
            />
          </div>
        </div>
        
        <div class="vacancies__items">
          <div
            v-for="(vacancy, i) in vacancies"
            :key="i"
            class="vacancies__item"
          >
            <div class="vacancies__item_skill">
              <NuxtLink :to="vacancy.slug">{{ vacancy.name }}</NuxtLink>
            </div>
            <div class="vacancies__item_location">
              {{ vacancy.jobLocation }}
              <span v-show="vacancy.remote" class="vacancies__item_remote"
                >Remote</span
              >
            </div>
            <div v-show="vacancy.open" class="vacancies__item_state open">
              Open
            </div>
            <div v-show="!vacancy.open" class="vacancies__item_state closed">
              Closed
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomSelect from '@/components/Select.vue'

export default {
  components: {
    CustomSelect,
  },

  data() {
    return {
      skill: '',
      location: '',
      vacancies: [],
    }
  },

  computed: {
    ...mapGetters(['vacancies/getAllSkills', 'vacancies/getAllLocations']),
  },

  watch: {
    skill() {
      this.vacancies = this.getVacancies()
    },
    location() {
      this.vacancies = this.getVacancies()
    },
  },

  mounted() {
    this.vacancies = this.getVacancies()
  },

  methods: {
    handleFieldChange(name, value) {
      this[name] = value
    },

    getVacancies() {
      return this.$store.getters['vacancies/getVacancies'](
        this.skill,
        this.location
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}

.header_image {
  & > img {
    @media screen and (max-width: 1440px) {
      width: 400px;
    }

    @media screen and (max-width: 768px) {
      width: 300px;
    }

    @media screen and (max-width: 425px) {
      width: 200px;
    }
  }
}

.header-big {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 90px;
  color: #fff;

  @media screen and (max-width: 1440px) {
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }

  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
}

.container {
  padding-left: 8.34%;
  padding-right: 8.34%;
}

.vacancies {
  text-align: left;

  & * {
    box-sizing: border-box;
  }

  &__section_1 {
    padding-top: 266px;
    padding-bottom: 240px;
    background: #1e1f21;

    @media screen and (max-width: 1440px) {
      padding-top: 150px;
      padding-bottom: 150px;
    }

    @media screen and (max-width: 425px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  &__section_2 {
    padding-top: 240px;
    padding-bottom: 240px;

    @media screen and (max-width: 1440px) {
      padding-top: 150px;
      padding-bottom: 150px;
    }

    @media screen and (max-width: 425px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  &__filters {
    display: flex;
    margin-bottom: 56px;

    @media screen and (max-width: 1440px) {
      flex-direction: column;
      gap: 24px;
    }

    @media screen and (max-width: 768px) {
      gap: 35px;
    }
  }

  &__filter_wrap {
    display: flex;
    margin-right: 60px;

    @media screen and (max-width: 1440px) {
      margin-right: 0px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 8px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__filter_label {
    margin-right: 20px;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__filter {
    width: 360px;

    @media screen and (max-width: 1440px) {
      width: 100%;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    min-height: 122px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    border-bottom: 1px solid #1e1f21;

    &:first-child {
      border-top: 1px solid #1e1f21;
    }

    @media screen and (max-width: 425px) {
      flex-wrap: wrap;
    }
  }

  &__item_skill {
    flex: 0 0 47%;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;

    a {
      text-decoration: none;
      color: #1e1f21;

      &:hover {
        color: #12e2b0;
      }
    }

    &:first-child {
      @media screen and (max-width: 425px) {
        flex: inherit;
        width: 100%;
      }
    }
  }

  &__item_location {
    flex: 0 0 47%;

    @media screen and (max-width: 1440px) {
      flex: inherit;
    }
  }

  &__item_remote {
    margin-left: 5px;
    background: #12e2b0;
  }

  &__item_state {
    flex: 1;
    text-align: right;

    &:before {
      content: '';
      position: relative;
      top: -1px;
      display: inline-block;
      margin-right: 10px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      z-index: 1;
    }

    &.open {
      &:before {
        background: #12e2b0;
      }
    }

    &.closed {
      &:before {
        background: #ff0000;
      }
    }
  }
}
</style>
