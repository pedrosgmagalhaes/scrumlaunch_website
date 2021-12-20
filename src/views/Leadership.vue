<template>

	<div class="leadership">

		<h1 class="header-big">
			<AppearFromMask><span>OUR Leadership</span></AppearFromMask
			><AppearFromMask><span>team</span></AppearFromMask>
		</h1>

		<div class="leadership--desc">
			<AppearFromMask duration="0.5">
				<p class="body-1">
					ScrumLaunch was built based on our founding team’s experience as both founders and leaders at startups &amp; growth companies.
				</p>
			</AppearFromMask>
		</div>

		<div class="leadership--team">
			<TeamMember
				v-for="(member, i) in getAllTeam"
				:key="i"
				:member="member"
			/>
		</div>

	</div>

	<ContactUsBlock />

</template>



<script>
import TeamMember from '@/components/leadership/TeamMember.vue'
import ContactUsBlock from '@/components/leadership/ContactUsBlock.vue'
import { mapGetters } from 'vuex'

import { useHead } from '@vueuse/head'

export default {

	components: {
		TeamMember,
		ContactUsBlock
	},

	setup() {
		useHead({
			title: 'Leadership',
			meta: [
				{
					name: `description`,
					content: 'Leadership',
				},
			],
		})
	},

	computed: {
		...mapGetters(['getAllTeam']),
	},
}
</script>



<style lang="scss" scoped>

.header-big {
	span {
		display: inline-block;
	}
}

.leadership {
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

	&--team {
		position: relative;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 296px;
	}
}

@media screen and (min-width: 768px) {
	.leadership {
		padding: 197px 30px 0;

		h1 {
			margin-left: 30px;
		}

		&--team {
			justify-content: flex-start;
			flex-wrap: wrap;
			margin-bottom: 140px;
			// margin: 0 -10px;
		}
	}
}

@media screen and (min-width: 1280px) {
	.leadership {
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

		&--team {
			margin: 0 -10px 240px;
		}
	}
}

@media screen and (min-width: 1920px) {
	.leadership--team {
		// margin: 0 -8px;
	}
}

</style>
