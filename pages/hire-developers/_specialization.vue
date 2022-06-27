<template>
  <div class="hire_developers">
    <div class="container section_1">
      <div class="flex">
        <div>
          <p class="title">
            Hire <span class="mark">{{ dev_lang }} Experts</span><br />On Demand
          </p>
          <p class="desc">
            Hire {{ dev_lang }} developers that are vetted, trained and managed
            by Scrumlaunch. We place high-quality Python developers across all
            types of businesses from venture-backed startups to large
            corporations.
          </p>
        </div>
        <div class="developer">
          <div class="developer__image first"></div>
          <p class="developer__name">Jonas Karakoro</p>
        </div>
        <div class="developer">
          <div class="developer__image second"></div>
          <p class="developer__name">Jonas Karakoro</p>
        </div>
        <div class="developer">
          <div class="developer__image third"></div>
          <p class="developer__name">Jonas Karakoro</p>
        </div>
      </div>
      <div class="dev_map_tablet">
        <img src="/images/hire-developers/dev_map.svg" alt="" />
      </div>
      <MetricsCard :lang="dev_lang" />
    </div>
    <div class="container section_2">
      <h2>Developer Profiles</h2>
      <DevelopersProfilesCards />
    </div>

    <div class="container section_3">
      <div class="first_block">
        <div>
          <p class="title">The ScrumLaunch Approach</p>
          <p class="description">
            ScrumLaunch combines the scale of leading talent matching platforms
            with the personalization of a high touch agency to ensure the best
            client experience.
          </p>
        </div>
        <div class="animation">
          <lottie
            name="scrumlaunchMobileAnim"
            loop
            :options="{
              animationData: require('@/assets/animation/scrumlaunch-mobile.json'),
            }"
          />
        </div>
      </div>
      <div class="approach">
        <div class="approach__item">
          <div class="approach__icon">
            <img src="/images/hire-developers/faq_3.svg" alt="" />
          </div>
          <p class="approach__title">Intelligent Vetting</p>
          <p class="approach__desc">
            Our team has built and sold multiple companies, and we understand
            first-hand how important competent software engineers are. All
            clients are assigned.
          </p>
        </div>

        <div class="approach__item">
          <div class="approach__icon">
            <img
              src="/images/hire-developers/how_it_works__step_3.svg"
              alt=""
            />
          </div>
          <p class="approach__title">Onboarding & Oversight</p>
          <p class="approach__desc">
            Our team has built and sold multiple companies, and we understand
            first-hand how important competent.
          </p>
        </div>

        <div class="approach__item">
          <div class="approach__icon">
            <img src="/images/hire-developers/approach_1.svg" alt="" />
          </div>
          <p class="approach__title">Collaboration & Efficiency</p>
          <p class="approach__desc">
            Our team has built and sold multiple companies, and we understand
            first-hand how important competent.
          </p>
        </div>
      </div>
      <div class="btn_wrap">
        <button class="btn on_dark_bg">hire our developers</button>
      </div>
    </div>

    <div class="container section_4">
      <p class="accordian_title">How to hire a {{ dev_lang }} EXPERT?</p>
      <p class="accordian_desc">
        Hiring fresh talent in Java requires testing and reviewing candidates
        for their technical skills and proficiency in the programming language.
        That means a fair amount of software development experience is expected.
      </p>
      <div class="accordion_wrapper">
        <div
          v-for="(item, i) in questions[dev_lang === 'PHP' ? 'PHP' : 'other']"
          :key="i"
        >
          <Accordion
            :title="item.title"
            :description="item.description"
            :list="item.list"
            :imgNumber="item.number"
          />
        </div>
      </div>
      <div class="btn_wrap">
        <button class="btn on_dark_bg">hire our developers</button>
      </div>
    </div>

    <div class="container section_5">
      <p class="title">
        ScrumLaunch <span class="mark">{{ dev_lang }}</span> Developers at a
        Glance
      </p>
      <p class="description">
        Our software development and design teams played a pivotal role in many
        client success stories in 2021.
      </p>
      <div class="statistic-container">
        <div class="square">
          <p class="number">5 Avg Years</p>
          <p class="desc">Of Experience</p>
        </div>
        <div class="circle">
          <Logo fill="#1E1F21" />
        </div>
        <div class="square">
          <p class="number">Less Than 3%</p>
          <p class="desc">Applicant Acceptance Rate</p>
        </div>
        <div class="square">
          <p class="number">5+ Hours</p>
          <p class="desc">Of Technical Interviews</p>
        </div>
      </div>
      <div class="btn_wrap">
        <button class="btn on_dark_bg">hire our developers</button>
      </div>
    </div>

    <div class="container section_6">
      <div>
        <img src="/images/hire-developers/rocket.svg" alt="rocket" />
      </div>
      <div>
        <p class="title">What ScrumLaunch does for you</p>
        <p class="description">
          Scrumlaunch is home to
          <span class="mark">top developers, designers, engineers,</span>
          coders, architects, and consultants. Companies choose to work with
          Scrumlaunch because our team has succeeded with all types of companies
          and projects, supporting business owners from idea to acquisition.
        </p>
      </div>
    </div>

    <div class="container section_7">
      <p>
        Trusted by over <span class="mark">400 clients</span> worldwide since
        2015
      </p>
      <div class="circle_container">
        <img src="/images/hire-developers/statistic_pc.svg" alt="statistic_1" />
        <img
          src="/images/hire-developers/statistic_tablet.svg"
          alt="statistic_2"
        />
      </div>
      <div class="btn_wrap">
        <button class="btn on_dark_bg">hire our developers</button>
      </div>
    </div>

    <div class="section_8">
      <IndustryLeadingResults />
    </div>

    <div class="container section_9">
      <p>frequently asked questions</p>

      <div class="faq">
        <div class="faq__item">
          <div class="faq__item__q">
            Why should I use ScrumLaunch to Hire {{ dev_lang }} Developers?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_1.svg" alt="faq_1" />
          </div>
          <div class="faq__item__a">
            At ScrumLaunch, we hire and train every member of our team
            individually. All dedicated {{ dev_lang }} developers (and any
            developer or designer, for that matter) undergo in-depth assessment
            and training to test for skill level, adaptability, creativity,
            system architecture, and other key components of software
            development. Our {{ dev_lang }} experts have worked on a range of
            projects from video analysis and machine learning to custom
            marketplaces.
          </div>
        </div>

        <div class="faq__item">
          <div class="faq__item__q">
            How Quickly can I hire {{ dev_lang }} developers through
            ScrumLaunch?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_2.svg" alt="faq_2" />
          </div>
          <div class="faq__item__a">
            Many of our clients have been up and running in under 24 hours.
            ScrumLaunch has the capacity to scale instantly and on-demand. If
            you already know what you’re building, then book a free consultation
            with our team to explain your {{ dev_lang }} requirements. We’ll
            match you with {{ dev_lang }} experts and a project manager on our
            team in a matter of hours.
          </div>
        </div>

        <div class="faq__item">
          <div class="faq__item__q">
            Is ScrumLaunch well-known for {{ dev_lang }}?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_3.svg" alt="faq_3" />
          </div>
          <div class="faq__item__a">
            {{ dev_lang }} is one of our primary development languages. Our team
            has a collective 600 years of development experience, and we’ve
            built incredibly complex projects in the language
          </div>
        </div>

        <div class="faq__item">
          <div class="faq__item__q">
            How Effective is Offshore or Outsourced {{ dev_lang }}?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_4.svg" alt="faq_4" />
          </div>
          <div class="faq__item__a">
            Offshore {{ dev_lang }} development is an incredibly cost-effecitve
            and efficient way to stand up new projects or build out existing
            ones. However, outsourcing {{ dev_lang }} development offshore
            should be done with a reputable firm that has a proven track record
            of success. Read
            <span class="link"
              >our guide on outsourcing web development here.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import DevelopersProfilesCards from '../../components/hire-developers/DevelopersProfilesCards.vue'
import IndustryLeadingResults from '../../components/home/IndustryLeadingResults.vue'
import Accordion from '../../components/accordion/Accordion.vue'
import MetricsCard from '../../components/hire-developers/MetricsCard.vue'
import dev_langs from '@/seo/development_languages.json'

export default {
  components: {
    DevelopersProfilesCards,
    IndustryLeadingResults,
    Accordion,
    MetricsCard,
    lottie,
  },

  data() {
    return {
      dev_lang: '',
      questions: {
        PHP: [
          {
            number: 1,
            title: 'What is PHP?',
            description: [
              'PHP stands for Hypertext Preprocessor. It is an open source server-side scripting language which is widely used for web development. It supports many databases like MySQL, Oracle, Sybase, Solid, PostgreSQL, generic ODBC etc.',
            ],
            list: [],
          },
          {
            number: 2,
            title: 'What is PEAR in PHP?',
            description: [
              'PEAR is a framework and repository for reusable PHP components. PEAR stands for PHP Extension and Application Repository. It contains all types of PHP code snippets and libraries.',
              "It also provides a command line interface to install 'packages' automatically.",
            ],
            list: [],
          },
          {
            number: 3,
            title: 'Explain the difference b/w static and dynamic websites?',
            description: [
              "In static websites, content can't be changed after running the script. You can't change anything on the site. It is predefined.",
              'In dynamic websites, content of script can be changed at the run time. Its content is regenerated every time a user visit or reload. Google, yahoo and every search engine is the example of dynamic website.',
            ],
            list: [],
          },
          {
            number: 4,
            title:
              'What are the popular Content Management Systems (CMS) in PHP?',
            description: [
              'WordPress: WordPress is a free and open-source content management system (CMS) based on PHP & MySQL. It includes a plug-in architecture and template system. It is mostly connected with blogging but supports another kind of web content, containing more traditional mailing lists and forums, media displays, and online stores.',
              'Joomla: Joomla is a free and open-source content management system (CMS) for distributing web content, created by Open Source Matters, Inc. It is based on a model-view-controller web application framework that can be used independently of the CMS.',
              'Magento: Magento is an open source E-trade programming, made by Varien Inc., which is valuable for online business. It has a flexible measured design and is versatile with many control alternatives that are useful for clients. Magento utilizes E-trade stage which offers organization extreme E-business arrangements and extensive support network.',
              'Drupal: Drupal is a CMS platform developed in PHP and distributed under the GNU (General Public License).',
            ],
            list: [],
          },
          {
            number: 1,
            title: "What is 'echo' in PHP?",
            description: [
              'PHP echo outputs one or more strings. It is a language construct not a function. So the use of parentheses is not required. But if you want to pass more than one parameter to echo, the use of parentheses is required.',
            ],
            list: [],
          },
          {
            number: 2,
            title: 'What is the difference between $message and $$message?',
            description: [
              '$message stores variable data while $$message is used to store a variable of variables',
              '$message stores fixed data whereas the data stored in $$message may be changed dynamically.',
            ],
            list: [],
          },
          {
            number: 3,
            title: 'Describe how the Laravel Framework works.',
            description: [
              'Laravel has diverse features such as template engine, MVC architecture support, top security, artisan tool, database migration system and etc. These Laravel advanced features make it better than other PHP frameworks. It provides benchmarked and feature-packed solutions for high-end web application development.',
            ],
            list: [],
          },
        ],
        other: [
          {
            number: 1,
            title: 'What is meant by the term OOP?',
            description: [
              'OOPs refers to Object-Oriented Programming. It is the programming paradigm that is defined using objects. Objects can be considered as real-world instances of entities like class, that have some characteristics and behaviors.',
            ],
            list: [],
          },
          {
            number: 2,
            title: 'What are some major Object Oriented Programming languages?',
            description: [
              'The programming languages that use and follow the Object-Oriented Programming paradigm or OOPs, are known as Object-Oriented Programming languages. Some of the major Object-Oriented Programming languages include:',
            ],
            list: ['Java', 'C++', 'Javascript', 'Python', 'PHP'],
          },
          {
            number: 3,
            title: 'What is meant by Structured Programming?',
            description: [
              'Structured Programming refers to the method of programming which consists of a completely structured control flow. Here structure refers to a block, which contains a set of rules, and has a definitive control flow, such as (if/then/else), (while and for), block structures, and subroutines.',
              'Nearly all programming paradigms include Structured programming, including the OOPs model.',
            ],
            list: [],
          },
          {
            number: 4,
            title: 'What is a class?',
            description: [
              'A class can be understood as a template or a blueprint, which contains some values, known as member data or member, and some set of rules, known as behaviors or functions. So when an object is created, it automatically takes the data and functions that are defined in the class.',
              'Therefore the class is basically a template or blueprint for objects. Also one can create as many objects as they want based on a class.',
              'For example, first, a car’s template is created. Then multiple units of car are created based on that template.',
            ],
            list: [],
          },
          {
            number: 1,
            title: 'What is an object?',
            description: [
              'An object refers to the instance of the class, which contains the instance of the members and behaviors defined in the class template. In the real world, an object is an actual entity to which a user interacts, whereas class is just the blueprint for that object. So the objects consume space and have some characteristic behavior.',
              'For example, a specific car.',
            ],
            list: [],
          },
          {
            number: 2,
            title: 'What is Polymorphism?',
            description: [
              'Polymorphism is composed of two words - “poly” which means “many”, and “morph” which means “shapes”. Therefore Polymorphism refers to something that has many shapes.',
              'In OOPs, Polymorphism refers to the process by which some code, data, method, or object behaves differently under different circumstances or contexts. Compile-time polymorphism and Run time polymorphism are the two types of polymorphisms in OOPs languages.',
            ],
            list: [],
          },
        ],
      },
    }
  },

  head() {
    return {
      title: `Hire ${this.dev_lang} Developers - Top Rated | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content: `Hire and scale ${this.dev_lang} developers with the best-in-class website development and design consulting firm. Book a free consultation now.`,
        },
      ],
    }
  },

  watch: {
    '$route.path'() {
      if (this.dev_lang) {
        this.dev_lang = this.getDevLang()
      }
    },
  },

  created() {
    this.dev_lang = this.getDevLang()
  },

  methods: {
    getDevLang() {
      return (
        dev_langs.filter((item) => {
          return this.$route.params.specialization === item.url
        })[0]?.lang || ''
      )
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.accordion_wrapper {
  border-bottom: 1px solid #1e1f21;
}

.developer {
  width: 142px;
  height: 142px;
  background: #ffffff;
  border: 1px solid #1e1f21;
  position: absolute;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  &:nth-child(2) {
    top: 240px;
    right: 418px;

    @media screen and (max-width: 1440px) {
      top: 26%;
      right: 63%;
    }

    @media screen and (max-width: 768px) {
      top: 34%;
      right: 65%;
    }

    @media screen and (max-width: 460px) {
      top: 37%;
      right: 76%;
    }
  }

  &:nth-child(3) {
    top: 304px;
    right: 110px;

    @media screen and (max-width: 1440px) {
      top: 31%;
      right: 40%;
    }

    @media screen and (max-width: 768px) {
      top: 34%;
      right: 38%;
    }

    @media screen and (max-width: 460px) {
      top: 40%;
      right: 20%;
    }
  }

  &:nth-child(4) {
    top: 473px;
    right: 276px;

    @media screen and (max-width: 1440px) {
      top: 47%;
      right: 54%;
    }

    @media screen and (max-width: 768px) {
      top: 43%;
      right: 66%;
    }

    @media screen and (max-width: 460px) {
      top: 46%;
      right: 55%;
    }
  }

  &__image {
    border-bottom: 1px solid #1e1f21;
    width: 140px;
    height: 108px;
    object-fit: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
      width: 70px;
      height: 53px;
      background-size: 70px 53px;
    }

    &.first {
      background-image: url('/images/hire-developers/dev_1.png');
    }

    &.second {
      background-image: url('/images/hire-developers/dev_2.png');
    }

    &.third {
      background-image: url('/images/hire-developers/dev_3.png');
    }
  }

  &__name {
    padding: 8px 7px;
    font-weight: 700;
    font-size: 13px;
    line-height: 140%;

    @media screen and (max-width: 768px) {
      padding: 2px 4px;
      font-size: 8px;
    }
  }
}

.dev_map_tablet {
  display: none;

  @media screen and (max-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 70px;

    & > img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.hire_developers {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  text-align: left;
}

.section_1 {
  padding-top: 234px;
  background-image: url('/images/hire-developers/dev_map.svg');
  background-repeat: no-repeat;
  background-position: 120%;
  position: relative;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .desc {
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    margin-bottom: 109px;
    max-width: 712px;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 200px;
    background-image: none;

    .title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 30px;
    }

    .flex {
      justify-content: center;
    }

    .desc {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 131px;

    .title {
      font-size: 56px;
      margin-bottom: 60px;
    }
  }
}

.section_2 {
  position: relative;
  padding-top: 146px;
  padding-bottom: 240px;

  & > h2 {
    text-align: center;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    margin-bottom: 80px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 200px;

    & > h2 {
      font-size: 48px;
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;

    & > h2 {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
}

.animation {
  position: absolute;
  top: -220px;
  right: 0;
  width: 600px;
  transform: rotate(77deg);
  z-index: -1;

  @media screen and (max-width: 1440px) {
    top: -187px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }
}

.section_3 {
  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    max-width: 700px;
    margin-bottom: 40px;

    @media screen and (max-width: 1440px) {
      font-size: 48px;
      margin-bottom: 24px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }

  .description {
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    max-width: 712px;

    @media screen and (max-width: 1440px) {
      max-width: 100%;
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  .first_block {
    display: flex;
    align-items: center;
    position: relative;
  }

  .approach {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px 0;

    &__item {
      border: 1px solid #1e1f21;
      padding: 60px 40px;
      width: 400px;
      height: 416px;
    }

    &__item:not(:first-child) {
      border-left-width: 0px;
    }

    &__title {
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
      margin-top: 20px;
      margin-bottom: 16px;
      max-width: 215px;
    }

    &__desc {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
    }

    @media screen and (max-width: 1440px) {
      margin: 60px 0;
      overflow-x: auto;
      overflow-y: hidden;

      &__item {
        padding: 32px 24px;
        width: 100%;
        min-width: 200px;
        height: 500px;
      }

      &__title {
        font-size: 24px;
        margin-bottom: 12px;
      }

      &__icon {
        & > img {
          width: 36px;
          height: 36px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      margin: 40px 0;

      justify-content: initial;

      &__item {
        padding: 18px;
        width: 100%;
        min-width: 100%;
        height: 200px;
      }

      &__title {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 8px;
        max-width: 100%;
      }

      &__desc {
        font-size: 14px;
      }

      &__icon {
        & > img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

.section_4 {
  margin-top: 240px;
  margin-bottom: 240px;

  .accordian_title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .accordian_desc {
    max-width: 712px;
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    margin-bottom: 80px;
  }

  .btn_wrap {
    margin-top: 66px;
    justify-content: flex-end;

    .btn:hover {
      background: #1e1f21;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 1440px) {
    margin-top: 140px;
    margin-bottom: 140px;

    .accordian_title {
      font-size: 48px;
      margin-bottom: 24px;
    }

    .accordian_desc {
      font-size: 20px;
      margin-bottom: 60px;
    }

    .btn_wrap {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;

    .accordian_title {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .accordian_desc {
      font-size: 14px;
      margin-bottom: 40px;
    }

    .btn_wrap {
      margin-top: 40px;
      justify-content: center;
    }
  }
}

.section_5 {
  padding-top: 240px;
  padding-bottom: 240px;
  background: #1e1f21;

  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    color: #ffffff;
    margin-bottom: 80px;
    max-width: 780px;
    text-transform: uppercase;
  }

  .description {
    display: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
  }

  .statistic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  .square {
    width: 300px;
    height: 300px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    padding: 40px;
    flex-direction: column;
    color: #ffffff;

    .number {
      font-weight: 900;
      font-size: 30px;
      line-height: 140%;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .desc {
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
    }
  }

  .circle {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 50%;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 140px;

    .title {
      max-width: 540px;
      margin-bottom: 24px;
      font-size: 48px;
    }

    .description {
      display: block;
      color: #ffffff;
      margin-bottom: 60px;
    }

    .statistic-container {
      margin-bottom: 60px;
      flex-wrap: wrap;
    }

    .square {
      width: 354px;
      height: 356px;

      .number {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .desc {
        font-size: 16px;
      }
    }

    .circle {
      width: 355px;
      height: 355px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    .title {
      max-width: 100%;
      margin-bottom: 16px;
      font-size: 24px;
    }

    .description {
      font-size: 14px;
      margin-bottom: 40px;
    }

    .statistic-container {
      margin-bottom: 40px;
    }

    .square {
      width: 168px;
      height: 167px;
      padding: 18px;

      .number {
        font-size: 18px;
        margin-bottom: 6px;
      }

      .desc {
        font-size: 14px;
      }
    }

    .circle {
      width: 167px;
      height: 167px;
    }
  }
}

.section_6 {
  padding-top: 240px;
  padding-bottom: 240px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  .title {
    margin-bottom: 40px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
  }

  .description {
    font-weight: 400;
    font-size: 26px;
    line-height: 140%;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 140px;
    flex-direction: column-reverse;

    & > div > img {
      width: 368px;
      height: 289px;
    }

    .title {
      margin-bottom: 24px;
      font-size: 48px;
      max-width: 656px;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    & > div > img {
      width: 335px;
      height: 180px;
    }

    .title {
      margin-bottom: 16px;
      font-size: 24px;
      max-width: 100%;
    }

    .description {
      font-size: 14px;
    }
  }
}

.section_7 {
  text-align: center;
  background: #1e1f21;
  padding-top: 240px;
  padding-bottom: 240px;

  & > p {
    text-align: left;
    max-width: 1200px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 80px;
  }

  .circle_container {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    & > img {
      max-width: 100%;
    }

    & > img:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 140px;

    & > p {
      max-width: 708px;
      font-size: 48px;
      margin-bottom: 60px;
    }

    .circle_container {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    & > p {
      max-width: 322px;
      font-size: 24px;
      margin-bottom: 40px;
    }

    .circle_container {
      margin-bottom: 40px;

      & > img:nth-child(1) {
        display: none;
      }

      & > img:nth-child(2) {
        display: block;
      }
    }
  }
}

.section_8 {
  text-align: center;
}

.section_9 {
  margin-bottom: 260px;

  & > p {
    margin-bottom: 60px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
  }

  .faq {
    &__item {
      display: flex;
      padding-top: 50px;
      padding-bottom: 50px;
      border-top: 1px solid #1e1f21;
      align-items: center;

      &__q {
        width: 100%;
        min-width: 352px;
        max-width: 352px;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        color: #1e1f21;
      }

      &__img {
        margin-left: 40px;
        margin-right: 60px;

        img {
          display: block;
        }
      }

      &__a {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #1e1f21;

        .link {
          border-bottom: 2px solid #12e2b0;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 140px;

    & > p {
      margin-bottom: 60px;
      font-size: 48px;
    }

    .faq {
      &__item {
        display: grid;
        grid-template-columns: 60px 1fr;
        padding: 32px 0;

        &__q {
          min-width: 100%;
          font-size: 24px;
          grid-area: 1 / 2 / 2 / 3;
        }

        &__img {
          grid-area: 1 / 1 / 2 / 2;
          margin: 0;

          img {
            width: 36px;
            height: 36px;
          }
        }

        &__a {
          margin-top: 20px;
          grid-area: 2 / 2 / 3 / 3;
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;

    & > p {
      margin-bottom: 40px;
      font-size: 24px;
    }

    .faq {
      &__item {
        padding: 30px 0;

        &__q {
          min-width: 100%;
          font-size: 18px;
        }

        &__img {
          img {
            width: 24px;
            height: 24px;
          }
        }

        &__a {
          grid-area: 2 / 1 / 3 / 3;
          font-size: 12px;
        }
      }
    }
  }
}

.container {
  padding-left: 8.32%;
  padding-right: 8.32%;
}

.btn_wrap {
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    padding: 26px 64px;
    font-size: 20px;
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 1440px) {
    .btn {
      padding: 20px 50px;
      font-size: 14px;
    }
  }
}

.mark {
  background: #12e2b0;
  color: #1e1f21;
}
</style>
