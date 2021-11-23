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

export default {
	components: {
		HeroBlock,
		WorkItem
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
	}
}

@media screen and (min-width: 768px) {
	.work {
		&--wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 140px;
		}
	}
}

@media screen and (min-width: 1280px) {
	.work {
		&--wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 240px;
		}
	}
}

</style>
