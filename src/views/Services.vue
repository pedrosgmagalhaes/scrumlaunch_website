<template>
  <div class="services">
    <AppearFromMask><h1 class="header-big">Our services</h1></AppearFromMask>
    <div class="services--desc">
      <AppearFromMask><p class="body-1">Our goal is simple &mdash; to help your business succeed.  We have a proven track record of building technical and design teams that help our clients to scale, raise money and get acquired.</p></AppearFromMask>
    </div>
    <div class="services--wrapper">
      <ServiceItem v-for="(service, i) in services" :key="i" :service="service" />
    </div>
  </div>
  <ContactUsBlock />
</template>

<script>
import ServiceItem from '@/components/services/ServiceItem.vue'
import ContactUsBlock from '@/components/leadership/ContactUsBlock.vue'

import { useHead } from '@vueuse/head'

export default {
  components: {
    ServiceItem,
    ContactUsBlock
  },

  setup() {
		useHead({
			title: 'Services',
			meta: [
				{
					name: `description`,
					content: 'Services',
				},
			],
		})
	},

  data: () => ({
    services: [
      {
        title: 'Software Development',
        icon: 'software',
        description: 'We pride ourselves on having talent rich and very high performance software development teams.  We architect & build scalable software applications that support millions of users.  If you have a question about a technology stack or specific type of application, please ask us.'
      },
      {
        title: 'UI/UX Design',
        icon: 'design',
        description: 'Our design team works closely with clients across the spectrum of user journey mapping, UI/UX design, illustration, animation and brand development.'
      },
      {
        title: 'User Research & Product Analitycs',
        icon: 'research',
        description: 'Our product development philosophy is built on “lean principles”.  We believe in talking directly with users, data drive analysis and rapid iteration.  This helps us get to the core of the problem our client is trying to solve and develop the ideal solution.  “The faster you realize why you are wrong, the sooner you will be right.”'
      },
      {
        title: 'Brand Design',
        icon: 'brand',
        description: 'Building a brand is hard & creative work.  Our process involves working closely with our clients to understand their mission, vision and values so we can empower them to share their message with the world in a way that best reflects who they are as a company and what they stand for.'
      },
      {
        title: 'Pitch Deck Creation',
        icon: 'pitch',
        description: 'As founders ourselves, we are all too familiar with the painstaking process of creating a perfect investor or sales presentation.  Our leadership and design team can work with you to build the right deck for each audience.'
      },
      {
        title: 'Strategy',
        icon: 'strategy',
        description: 'Do you have a clear GTM and growth strategy?  Are you struggling to prioritize your product roadmap? Trying to figure out user acquisition?  We have developed successful playbooks in every facet of digital strategy over 5 years of working with our clients to build high growth businesses.'
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.services {
  padding: 125px 20px 0;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
    margin-bottom: 40px;
  }

  &--desc {
    display: flex;
    justify-content: flex-end;

    p {
      text-align: left;
      width: 67.25%;
      margin-bottom: 40px;
    }
  }

  &--wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 347px;
  }
}

@media screen and (min-width: 768px) {
  .services {
    padding: 197px 30px 0;

    h1 {
      margin-left: 30px;
    }

    &--wrapper {
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 140px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .services {
    padding: 270px 8.34% 0;

    h1 {
      margin-left: 0px;
    }

    &--desc {
      display: flex;
      justify-content: flex-end;

      p {
        width: 52.25%;
        margin-bottom: 80px;
      }
    }

    &--wrapper {
      margin-bottom: 240px;
    }
  }
}

@media screen and (min-width: 1440px) {
  .services {
    &--desc {
      p {
        width: 59.25%;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .services {
    &--desc {
      p {
        width: 59.25%;
      }
    }
  }
}
</style>
