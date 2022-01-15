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
        description: 'Your team is assembled from our highly vetted talent pool based on your resourcing needs.'
      },
      {
        number: '02',
        title: 'Comprehensive understanding of product and business objectives',
        description: 'We collaboratively review your business goals & product requirements to build a clear understanding of your vision, key metrics and desired product outcomes.'
      },
      {
        number: '03',
        title: 'Kick Off',
        description: 'We adhere to your desired project management workflow so our team can seamlessly fit into your larger organization. Our goal is to become an important part of your ongoing team and plans.'
      },
      {
        number: '04',
        title: 'Post Kick Off',
        description: 'Frequent communication and transparency are the keys to success in any engagement. We strive to produce high quality work output and be responsive to your ongoing business needs.'
      },
    ]
  }),

}
</script>
