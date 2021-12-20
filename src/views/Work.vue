<template>
	<div class="work">

		<HeroBlock />

		<div class="work--wrapper">
			<WorkItem v-for="(project, i) in getAllProjects" :key="i" :item="project" />
		</div>

	</div>
</template>



<script>
import HeroBlock from '@/components/work/HeroBlock.vue'
import WorkItem from '@/components/work/WorkItem.vue'
import { mapGetters } from 'vuex'
import { useHead } from '@vueuse/head'

export default {

	components: {
		HeroBlock,
		WorkItem
	},

	setup() {
		useHead({
			title: 'Work',
			meta: [
				{
					name: `description`,
					content: 'Work',
				},
			],
		})
	},

	computed: {
		...mapGetters(['getAllProjects']),
	},

}
</script>



<style lang="scss" scoped>

.work {
	&--wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 80px;
		margin-left: auto;
		margin-right: auto;
		max-width: 375px;
	}
}

@media screen and (min-width: 768px) {
	.work {
		&--wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 140px;
			max-width: 768px;
		}
	}
}

@media screen and (min-width: 1280px) {
	.work {
		&--wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 240px;
			max-width: 1280px;
		}
	}
}

@media screen and (min-width: 1440px) {
	.work {
		&--wrapper {
			max-width: 1440px;
		}
	}
}

@media screen and (min-width: 1880px) {
	.work {
		&--wrapper {
			max-width: 1920px;
		}
	}
}

</style>
