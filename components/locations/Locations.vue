<template>
  <div class="hire_developers">
    <div v-if="!is_city">
      <div class="container section_1">
        <div class="flex aife">
          <h1 class="clr-fff">
            Hire Software Developers in
            <span class="clr-12e2b0"> {{ location.state_name }} </span>
          </h1>
          <div class="text clr-fff">
            <p>
              ScrumLaunch is a U.S.-based website design development firm, with
              <span class="marked">operations in {{ location.state_name }}</span
              >, specializing in web-based development, mobile applications,
              UI/UX design and prototyping, QA automation, and more.
            </p>
          </div>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn on_dark_bg" to="/contact-us"
            >hire developers</NuxtLink
          >
        </div>
      </div>

      <div class="container section_2">
        <div class="animation">
          <lottie
            name="scrumlaunchMobileAnim"
            loop
            :options="{
              animationData: require('@/assets/animation/scrumlaunch-mobile.json'),
            }"
          />
        </div>

        <h2>
          Hire {{ location.state_name }}<br />
          Developers with Ease
        </h2>

        <div class="text">
          <p>
            Finding qualified software development
            <span class="marked">agencies in {{ location.state_name }}</span>
            can be difficult for a variety of reasons. For example, you may
            require a very specific skillset for your software needs or you may
            need to increase and decrease staffing quickly. ScrumLaunch works
            with all types of
            <span class="marked">clients in {{ location.state_name }}</span>
            and across the U.S. and succeeds due to our highly selective hiring
            and recruitment process.
          </p>
          <p>
            Each of our
            <span class="marked">{{ location.state_name }} clients</span>
            has a dedicated project manager responsible for your success.
          </p>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn" to="/contact-us">hire developers</NuxtLink>
        </div>
      </div>

      <div class="container section_3">
        <h2 class="tac">how it works</h2>

        <div class="cards">
          <div class="card">
            <div class="title">
              Step 1
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_1.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">Book a Free Consulation</div>
            <div class="text">
              We want to hear your {{ location.state_name }} needs firsthand to
              ensure we’re a good fit.
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 2
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">We Match Talent</div>
            <div class="text">
              We search our pool of hundreds of
              {{ location.state_name }} developers to identify potential fits
              for your project.
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 3
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_3.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">
              {{ location.state_name }} Developers Are Staffed to your Project.
            </div>
            <div class="text">
              Effortlessly scale your
              {{ location.state_name }} development needs up and down
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 4
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_4.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">We Start Building</div>
            <div class="text">
              We vet all {{ location.state_name }} developers and employ
              rigorous tests to assess development and English-language
              competency.
            </div>
          </div>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn" to="/contact-us"
            >hire {{ location.state_name }} developers</NuxtLink
          >
        </div>
      </div>

      <div class="container section_4">
        <h2>About our {{ location.state_name }} Developers</h2>

        <div class="flex jcfe">
          <div class="text">
            Finding qualified software development agencies in
            {{ location.state_name }} can be difficult for a variety of reasons.
            For example, you may require a very specific skillset for your
            software needs or you may need to increase and decrease staffing
            quickly. ScrumLaunch works with all types of clients in across the
            U.S. and can easily cater to the needs of
            {{ location.state_name }}-based business. We succeed due to our
            highly selective hiring and recruitment process. Each of our clients
            has a dedicated project manager responsible for your success.
          </div>
        </div>
      </div>

      <div class="container section_5">
        <h2>Frequently asked questions</h2>

        <div class="faq">
          <div class="faq__item">
            <div class="faq__item__q">
              What makes a good {{ location.state_name }} software development
              company?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_1.svg" alt="faq_1" />
            </div>
            <div class="faq__item__a">
              Most software companies in {{ location.state_name }} suffer from
              scale. For example, providing mobile app development, NodeJS or
              Ruby development, and designs services can take a large toll on a
              small software company. ScrumLaunch has more than 200 highly
              skilled developers specializing in nearly three hundred different
              languages. Additionally, we have worked with all types of
              companies from publicly traded corporations to venture-backed
              startups. We know what it takes to turn your idea into a reality.
            </div>
          </div>

          <div class="faq__item">
            <div class="faq__item__q">
              Do you offer mobile app development for
              {{ location.state_name }} clients?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_2.svg" alt="faq_2" />
            </div>
            <div class="faq__item__a">
              Yes! We specialize in both iOS and Android native mobile app
              development. Additionally, we offer software development services
              in hundreds of other computer programming languages and
              specialities. Schedule a free consultation with us to learn more
              about our capabilities.
            </div>
          </div>

          <div class="faq__item">
            <div class="faq__item__q">
              Is your entire company based in {{ location.state_name }}?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_3.svg" alt="faq_3" />
            </div>
            <div class="faq__item__a">
              Our primary headquarters is Austin, TX, with larger remote offices
              in Los Angeles and Washington. At any given time, we may have a
              handful of team members in {{ location.state_name }}. However,
              even prior to the pandemic we had sophisticated remote
              capabilities set up, which allows us to tap into our global talent
              pool to provide high-quality yet affordable software development
              to {{ location.state_name }} companies.
            </div>
          </div>
        </div>
      </div>

      <div class="container section_6">
        <h2 class="tar">
          looking for another<br />
          language or skill?
        </h2>

        <LocationsList />
      </div>
    </div>

    <div v-else>
      <div class="container section_1">
        <div class="flex aife">
          <h1 class="clr-fff">
            Hire Software Developers in
            <span class="clr-12e2b0"
              >{{ location.city }}, {{ location.state_name }}</span
            >
          </h1>
          <div class="text clr-fff">
            <p>
              ScrumLaunch is a U.S.-based website design development firm, with
              <span class="marked">operations in {{ location.city }}</span
              >, specializing in web-based development, mobile applications,
              UI/UX design and prototyping, QA automation, and more.
            </p>
          </div>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn on_dark_bg" to="/contact-us"
            >hire developers</NuxtLink
          >
        </div>
      </div>

      <div class="container section_2">
        <div class="animation">
          <lottie
            name="scrumlaunchMobileAnim"
            loop
            :options="{
              animationData: require('@/assets/animation/scrumlaunch-mobile.json'),
            }"
          />
        </div>

        <h2>
          Hire {{ location.city }}<br />
          Developers with Ease
        </h2>

        <div class="text">
          <p>
            Finding qualified software development
            <span class="marked">agencies in {{ location.city }}</span> can be
            difficult for a variety of reasons. For example, you may require a
            very specific skillset for your software needs or you may need to
            increase and decrease staffing quickly. ScrumLaunch works with all
            types of clients in across the U.S. and can easily cater to
            <span class="marked"
              >the needs of {{ location.city }}-based business</span
            >. We succeed due to our highly selective hiring and recruitment
            process.
          </p>
          <p>
            Each of our clients has a dedicated project manager responsible for
            your success.
          </p>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn" to="/contact-us">hire developers</NuxtLink>
        </div>
      </div>

      <div class="container section_3">
        <h2 class="tac">how it works</h2>

        <div class="cards">
          <div class="card">
            <div class="title">
              Step 1
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_1.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">Book a Free Consulation</div>
            <div class="text">
              We want to hear your {{ location.city }} needs firsthand to ensure
              we’re a good fit.
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 2
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_2.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">We Match Talent</div>
            <div class="text">
              We search our pool of hundreds of {{ location.city }} developers
              to identify potential fits for your project.
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 3
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_3.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">
              {{ location.city }} Developers Are Staffed to your Project.
            </div>
            <div class="text">
              Effortlessly scale your {{ location.city }} development needs up
              and down
            </div>
          </div>

          <div class="card">
            <div class="title">
              Step 4
              <div class="icon">
                <img
                  src="/images/hire-developers/how_it_works__step_4.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="subtitle">We Start Building</div>
            <div class="text">
              We vet all {{ location.city }} developers and employ rigorous
              tests to assess development and English-language competency.
            </div>
          </div>
        </div>

        <div class="btn_wrap">
          <NuxtLink class="btn" to="/contact-us"
            >hire {{ location.city }} developers</NuxtLink
          >
        </div>
      </div>

      <div class="container section_4">
        <h2>About our {{ location.city }} Developers</h2>

        <div class="flex jcfe">
          <div class="text">
            Finding qualified software development agencies in
            {{ location.city }} can be difficult for a variety of reasons. For
            example, you may require a very specific skillset for your software
            needs or you may need to increase and decrease staffing quickly.
            ScrumLaunch works with all types of clients in across the U.S. and
            can easily cater to the needs of {{ location.state_name }}-based
            business. We succeed due to our highly selective hiring and
            recruitment process. Each of our clients has a dedicated project
            manager responsible for your success.
          </div>
        </div>
      </div>

      <div class="container section_5">
        <h2>Frequently asked questions</h2>

        <div class="faq">
          <div class="faq__item">
            <div class="faq__item__q">
              What makes a good {{ location.city }} software development
              company?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_1.svg" alt="faq_1" />
            </div>
            <div class="faq__item__a">
              Most software companies in {{ location.city }} and
              {{ location.state_name }} suffer from scale. For example,
              providing mobile app development, NodeJS or Ruby development, and
              designs services can take a large toll on a small software
              company. ScrumLaunch has more than 200 highly skilled developers
              specializing in nearly three hundred different languages.
              Additionally, we have worked with all types of companies from
              publicly traded corporations to venture-backed startups. We know
              what it takes to turn your idea into a reality.
            </div>
          </div>

          <div class="faq__item">
            <div class="faq__item__q">
              Do you offer mobile app development for
              {{ location.city }} clients?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_2.svg" alt="faq_2" />
            </div>
            <div class="faq__item__a">
              Yes! We specialize in both iOS and Android native mobile app
              development. Additionally, we offer software development services
              in hundreds of other computer programming languages and
              specialities. Schedule a free consultation with us to learn more
              about our capabilities.
            </div>
          </div>

          <div class="faq__item">
            <div class="faq__item__q">
              Is your entire company based in {{ location.city }}?
            </div>
            <div class="faq__item__img">
              <img src="/images/hire-developers/faq_3.svg" alt="faq_3" />
            </div>
            <div class="faq__item__a">
              Our primary headquarters is Austin, TX, with larger remote offices
              in Los Angeles and Washington. At any given time, we may have a
              handful of team members in {{ location.state_name }}. However,
              even prior to the pandemic we had sophisticated remote
              capabilities set up, which allows us to tap into our global talent
              pool to provide high-quality yet affordable software development
              to {{ location.state_name }} companies.
            </div>
          </div>
        </div>
      </div>

      <div class="container section_6">
        <h2 class="tar">
          looking for another<br />
          language or skill?
        </h2>

        <LocationsList />
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import LocationsList from '@/components/locations/LocationsList.vue'

export default {
  components: {
    LocationsList,
    lottie,
  },

  props: {
    lc: {
      type: Object,
      default: () => ({ state_name: '', city: '', state_id: '' }),
    },
    is_city: { type: Boolean, default: false },
  },

  data() {
    return {
      location: {
        state_name: this.lc?.state_name || '',
        city: this.lc?.city || '',
        state_id: this.lc?.state_id || '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hire_developers {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  text-align: left;

  @media screen and (max-width: 1439px) {
    font-size: 26px;
  }
}

.section_1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 1009px;
  background-color: #1e1f21;

  @media screen and (max-width: 1439px) {
    min-height: 960px;
  }

  h1 {
    max-width: 630px;
  }

  .text {
    flex: 1;
    padding-left: 120px;
    padding-bottom: 30px;

    @media screen and (max-width: 1439px) {
      padding-left: 82px;
    }
  }
}

.section_2 {
  position: relative;
  padding-top: 240px;
  min-height: 1009px;
  overflow: hidden;

  .animation {
    position: absolute;
    top: -80px;
    right: 0;
    width: 900px;
    transform: rotate(60deg);
    z-index: -1;
  }

  h2 {
    margin-bottom: 40px;
  }

  .text {
    max-width: 1120px;

    @media screen and (max-width: 1439px) {
      max-width: 712px;
    }
  }
}

.section_3 {
  position: relative;
  padding-top: 80px;
  min-height: 1009px;

  h2 {
    margin-bottom: 60px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;
  }

  .card {
    margin-bottom: 20px;
    padding: 60px;
    max-width: 590px;
    background: #ffffff;
    border: 1px solid #1e1f21;

    &:nth-child(odd) {
      margin-right: 20px;
    }

    .title {
      margin-bottom: 28px;
      position: relative;
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #fff;
      -webkit-text-stroke: 1px #1e1f21;
    }

    .icon {
      position: absolute;
      right: 0;
      top: 0;
      width: 70px;
      height: 70px;
      transform: translateY(-25%);
    }

    .subtitle {
      margin-bottom: 20px;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 140%;
      color: #1e1f21;
    }

    .text {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: #1e1f21;
    }
  }

  .btn_wrap {
    margin-top: 60px;
  }
}

.section_4 {
  position: relative;
  padding-top: 240px;
  min-height: 1009px;

  h2 {
    margin-bottom: 60px;

    @media screen and (max-width: 1023px) {
    }
  }

  .text {
    margin-bottom: 80px;
    max-width: 1000px;
  }
}

.section_5 {
  position: relative;
  padding-top: 240px;
  padding-bottom: 240px;
  min-height: 1009px;

  h2 {
    margin-bottom: 60px;
  }

  .faq {
    &__item {
      display: flex;
      padding-top: 50px;
      padding-bottom: 50px;
      border-top: 1px solid #1e1f21;
      justify-content: space-evenly;

      &__q {
        max-width: 20%;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 140%;
        color: #1e1f21;
      }

      &__img {
        margin-left: 60px;
        margin-right: 60px;

        img {
          display: block;
        }
      }

      &__a {
        max-width: 1000px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        color: #1e1f21;
      }
    }
  }
}

.section_6 {
  position: relative;
  // padding-top: 240px;
  padding-bottom: 240px;
  min-height: 1009px;

  h2 {
    margin-bottom: 80px;
  }
}

h1 {
  font-weight: 900;
  font-size: 90px;
  line-height: 140%;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media screen and (max-width: 1439px) {
    font-size: 56px;
  }
}

h2 {
  @extend h1;
}

h3 {
}

.container {
  padding-left: 8.32%;
  padding-right: 8.32%;
}

.marked {
  padding-left: 5px;
  padding-right: 5px;
  color: #1e1f21;
  background-color: #12e2b0;
}

.btn_wrap {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.btn {
  padding: 16px 40px;
  min-width: 360px;
  height: 82px;
  width: auto;
  border-radius: 54px;
  font-size: 21.6867px;
  line-height: 150%;
  text-align: center;

  @media screen and (max-width: 1899px) {
    font-size: 18px;
  }
}

.flex {
  display: flex;
}

.jcc {
  justify-content: center;
}

.jcfe {
  justify-content: flex-end;
}

.aife {
  align-items: flex-end;
}

.aic {
  align-items: center;
}

.bgc-12e2b0 {
  background-color: #12e2b0;
}

.clr-fff {
  color: #fff;
}

.clr-12e2b0 {
  color: #12e2b0;
}

.clr-1e1f21 {
  color: #1e1f21;
}

.tal {
  text-align: left;
}

.tac {
  text-align: center;
}

.tar {
  text-align: right;
}
</style>
