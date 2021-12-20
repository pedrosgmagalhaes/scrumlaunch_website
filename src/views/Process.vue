<template>
  <div class="process">
    <OurProcess />
    <OurApproach :approachItems="approachItems" />
    <ContactUsBlock />
  </div>
</template>

<script>
import OurProcess from '@/components/process/OurProcess.vue'
import OurApproach from '@/components/process/OurApproach.vue'
import ContactUsBlock from '@/components/leadership/ContactUsBlock.vue'

import { useHead } from '@vueuse/head'

export default {
  components: {
    OurProcess,
    OurApproach,
    ContactUsBlock
  },

  setup() {
		useHead({
			title: 'Process',
			meta: [
				{
					name: `description`,
					content: 'Process',
				},
			],
		})
	},

  data: () => ({
    approachItems: [
      {
        number: '01',
        title: 'Pre-Kick Off',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        number: '02',
        title: 'Comprehensive understanding of product and business objectives',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        number: '03',
        title: 'Kick Off',
        description: 'Set uping digital communication tools; building or integrate into existing project management tools; establishing call standup cadence with appropriate stakeholders are implemented to ensure consistent communication, collaboration and set an appropriate working schedule.'
      },
      {
        number: '04',
        title: 'Post Kick Off',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ]
  }),

}
</script>
