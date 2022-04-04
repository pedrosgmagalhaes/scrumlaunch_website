<template>
	<div class="home">
		<HeroBlock />
		<SecondBlock />
		<ExtensiveVetting />
		<SoftwareDesign />
		<ClientTestimonials />
		<HowScrumLaunchWorks />
		<TickerBlock />
		<Projects />
		<HistoryBlock />
		<!-- <News /> -->
		<OurServices />
		<OurTechnologies />
		<ContactUs />
	</div>
</template>



<script>
// @ is an alias to /src
import HeroBlock from '@/components/home/HeroBlock.vue'
import SecondBlock from '@/components/home/SecondBlock.vue'
import Projects from '@/components/home/Projects.vue'
import HistoryBlock from '@/components/home/HistoryBlock.vue'
// import News from '@/components/home/News.vue'
import TickerBlock from '@/components/home/TickerBlock.vue'
import OurServices from '@/components/home/OurServices.vue'
import ContactUs from '@/components/home/ContactUs.vue'
import ExtensiveVetting from '@/components/home/ExtensiveVetting.vue'
import OurTechnologies from '@/components/home/OurTechnologies.vue'
import HowScrumLaunchWorks from '@/components/home/HowScrumLaunchWorks.vue'
import SoftwareDesign from '@/components/home/SoftwareDesign.vue'
import ClientTestimonials from '@/components/home/ClientTestimonials.vue'

import { useHead } from '@vueuse/head'

export default {

	name: 'Home',

	components: {
		HeroBlock,
		SecondBlock,
		Projects,
		HistoryBlock,
		// News,
		TickerBlock,
		OurServices,
		ContactUs,
		ExtensiveVetting,
		OurTechnologies,
		HowScrumLaunchWorks,
		SoftwareDesign,
		ClientTestimonials,
	},

	setup() {
		useHead({
			title: 'Home',
			meta: [
				{
					name: `description`,
					content: 'Home',
				},
			],
		})
	},


}
</script>
