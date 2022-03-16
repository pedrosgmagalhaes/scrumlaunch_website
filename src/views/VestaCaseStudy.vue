<template>
	<div class="case-study">

		<div class="case-study__hero">
			<inline-svg :src="require('@/assets/images/case-study/vesta/hero.svg')" class="case-study__hero_icon" />
		</div>

		<ProjectInfo :projectInfo="projectInfo" />

		<div class="case-study__divider-1"></div>
		<div class="case-study__divider-2"></div>
        <MainGoal :mainInfo="mainInfo" />
		<div class="case-study__divider-3"></div>
		<div class="case-study__divider-4"></div>

		<MoreProjects :moreProjects="moreProjects" />

	</div>
</template>



<script>
import ProjectInfo from '@/components/case-study/ProjectInfo.vue'
import MainGoal from '@/components/case-study/MainGoal.vue'
import MoreProjects from '@/components/case-study/MoreProjects.vue'

export default {

	components: {
		ProjectInfo,
        MainGoal,
		MoreProjects,
	},

	data: () => ({

		projectInfo: {
			name: 'Vesta Home',
			description: 'Vesta Home is a leading luxury home staging company that is powered by a sophisticated logistics and e-commerce platform.  The platform is dual purpose– it acts as an inventory management and booking system for the internal team to coordinate, schedule and reserve furniture items from its collection for use in home staging events.  It also enables consumers to buy gently used luxury furniture.',
			details: '2020-2021',
			work: ['React', 'Swift', 'RubyOnRails', 'Shopify', 'Heroku', 'Product Management', 'UI', 'UX Design'],
			team: ['Yulia Hlushkina', 'Denis Didenko', 'Anton Kharytonov']
		},

        mainInfo: {
            title: 'Product Objective',
            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl dolor sit erat neque, tellus elit elementum, ultricies. Donec vivamus lacus risus, neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl dolor sit erat neque, tellus elit elementum, ultricies.'
            ]
        },

		moreProjects: [
            {
				order: 'Previous',
				name: 'Helmm',
				image: 'helmm-preview',
				url: 'HelmmCaseStudy'
			},
			{
				order: 'Next',
				name: 'CampusReel',
				image: 'campus-reel-preview',
				url: 'CampusReelCaseStudy'
			},
		],

	}),

}
</script>



<style lang="scss" scoped>

.case-study {

	&__hero {
		height: 800px;
		box-sizing: border-box;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 20px;
	}

	&__divider-1 {
		margin-bottom: 50px;
		height: 1080px;
		background: #ECF0F3 url('../assets/images/case-study/vesta/divider-1.png') center 0/cover no-repeat;
	}

	&__divider-2 {
		margin-bottom: 50px;
		height: 1080px;
		background: #0B2850 url('../assets/images/case-study/vesta/divider-2.png') center 0/cover no-repeat;
	}

	&__divider-3 {
        margin-bottom: 50px;
		height: 1080px;
		background: #ECF0F3 url('../assets/images/case-study/vesta/divider-3.png') center 0/cover no-repeat;
	}

    &__divider-4 {
		height: 1080px;
		background: #ECF0F3 url('../assets/images/case-study/vesta/divider-4.png') center 0/cover no-repeat;
	}

}

@media screen and (max-width: 768px) {

	.case-study {

		&__hero {
			height: 612px;
		}

		&__hero_icon {
			max-width: 526px;
		}

		&__divider-1 {
			margin-bottom: 25px;
			height: 576px;
		}

		&__divider-2 {
			margin-bottom: 25px;
			height: 576px;
		}

		&__divider-3 {
            margin-bottom: 25px;
			height: 576px;
		}

        &__divider-4 {
			height: 576px;
		}

	}
}

@media screen and (max-width: 375px) {

	.case-study {

		&__hero {
			height: 392px;
		}

		&__hero_icon {
			max-width: 310px;
		}

		&__divider-1 {
			margin-bottom: 10px;
			height: 281px;
		}

		&__divider-2 {
			margin-bottom: 10px;
			height: 281px;
		}

		&__divider-3 {
            margin-bottom: 10px;
			height: 281px;
		}

        &__divider-4 {
			height: 281px;
		}

	}
}

</style>
