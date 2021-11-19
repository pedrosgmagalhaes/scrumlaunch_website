<template>

	<div class="projects">

		<TypingEffect>
			<h2 class="header-1">Latest projects</h2>
		</TypingEffect>

		<div class="projects--wrapper">
			<ProjectItem
				v-for="(item, i) in getAllProjects"
				:key="i"
				class="projects--wrapper--item"
				:item="item"
			/>
		</div>

		<div class="projects--btn-wrapper">
			<router-link class="btn" :to="{ name: 'Work' }"
				>View all</router-link
			>
		</div>

	</div>

</template>



<script>
import ProjectItem from '@/components/home/ProjectItem.vue'
import { mapGetters } from 'vuex'

export default {

	components: {
		ProjectItem,
	},

	computed: {
		...mapGetters(['getAllProjects']),
	},

}
</script>



<style lang="scss" scoped>

.projects {
	padding: 0 20px;
	margin: 0 0 80px;

	h2 {
		text-align: left;
		margin-bottom: 20px;
	}

	&--wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 40px;

		&--item {
			margin-bottom: 30px;
		}
	}

	&--btn-wrapper {
		display: flex;
		justify-content: flex-end;
	}
}

@media screen and (min-width: 768px) {
	.projects {
		padding: 0 30px;
		margin: 0 0 140px;

		h2 {
			margin-bottom: 30px;
		}

		&--wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 30px;

			&--item {
				margin-bottom: 30px;

				&:nth-child(2n + 1) {
					margin-top: 30px;
					margin-bottom: 0px;
				}
			}
		}
	}
}

@media screen and (min-width: 1280px) {
	.projects {
		padding: 0 8.34% 0;
		margin: 0 0 240px;

		h2 {
			text-align: left;
			margin-bottom: 40px;
		}

		&--wrapper {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			&--item {
				margin-bottom: 80px;

				&:nth-child(2n + 1) {
					margin-top: 80px;
					margin-bottom: 0px;
				}
			}
		}

		&--btn-wrapper {
			display: flex;
			justify-content: flex-end;
		}
	}
}

@media screen and (min-width: 1281px) {
	.projects {
		&--wrapper {
			justify-content: space-around;
		}
	}
}

@media screen and (min-width: 1900px) {
	.header-1 {
		font-weight: 900;
		font-size: 75px;
		line-height: 140%;
	}

	.projects {
		&--wrapper {
			justify-content: space-between;
		}
	}
}

@media screen and (min-width: 1920px) {
	.projects {
		&--wrapper {
			justify-content: space-between;
		}
	}
}

</style>
