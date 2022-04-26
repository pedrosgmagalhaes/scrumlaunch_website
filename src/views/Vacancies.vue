<template>

	<div class="vacancies">

		<div class="vacancies__section_1">

			<div class="container">

				<div class="flex jcsb">

					<h1 class="header-big">
						<span>Scrumlaunch</span>
						<span style="color: #12e2b0">Job openings</span>
					</h1>

					<div class=""><img src="/images/vacancies/magnifier.svg" alt=""></div>

				</div>

			</div>

		</div>

		<div class="vacancies__section_2">

			<div class="container">

				<div class="vacancies__filters">

					<div class="vacancies__filter_wrap">
						<div class="vacancies__filter_label">Skill</div>
						<CustomSelect class="vacancies__filter" label="Select skill" emptyValueText="Select All" :items="getAllSkills" v-model="skill" />
					</div>

					<div class="vacancies__filter_wrap">
						<div class="vacancies__filter_label">Location</div>
						<CustomSelect class="vacancies__filter" label="Select location" emptyValueText="Select All" :items="getAllLocations" v-model="location" />
					</div>

				</div>

				<div class="vacancies__items">

					<div class="vacancies__item" v-for="(vacancy, i) in vacancies" :key="i">

						<div class="vacancies__item_skill"><router-link :to="vacancy.slug">{{ vacancy.skill }}</router-link></div>
						<div class="vacancies__item_location">{{ vacancy.location }} <span class="vacancies__item_remote" v-if="vacancy.remote">Remote</span></div>
						<div class="vacancies__item_state open" v-if="vacancy.open">Open</div>
						<div class="vacancies__item_state closed" v-if="!vacancy.open">Closed </div>

					</div>

				</div>

			</div>

		</div>

	</div>
	
</template>



<script>
import CustomSelect from '@/components/Select.vue';
import { mapGetters } from 'vuex'

export default {

	components: {
		CustomSelect,
	},

	computed: {
		...mapGetters(['getAllSkills', 'getAllLocations']),

		vacancies() {
			return this.$store.getters.getVacancies( this.skill, this.location )
		},
	},

	data() {
		return {
			skill: '',
			location: '',
		}
	},
	
}
</script>



<style lang="scss" scoped>

.header-big {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 90px;
	color: #fff;
}

.container {
	padding-left: 8.34%;
	padding-right: 8.34%;
}

.vacancies {
	text-align: left;

	& * {
		box-sizing: border-box;
	}

	&__section_1 {
		padding-top: 266px;
		padding-bottom: 240px;
		background: #1E1F21;
	}

	&__section_2 {
		padding-top: 240px;
		padding-bottom: 240px;
	}

	&__filters {
		display: flex;
		margin-bottom: 56px;
	}

	&__filter_wrap {
		display: flex;
		margin-right: 60px;

		&:last-child {
			margin-right: 0;
		}
	}

	&__filter_label {
		margin-right: 20px;
		font-style: normal;
		font-weight: 900;
		font-size: 48px;
		line-height: 100%;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	&__filter {
		width: 360px;
	}

	&__items {

	}

	&__item {
		display: flex;
		align-items: center;
		min-height: 122px;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 150%;
		border-bottom: 1px solid #1E1F21;

		&:first-child {
			border-top: 1px solid #1E1F21;
		}
	}

	&__item_skill {
		flex: 0 0 47%;
		font-style: normal;
		font-weight: 700;
		font-size: 30px;
		line-height: 140%;
		
		a {
			text-decoration: none;
			color: #1E1F21;

			&:hover {
				color: #12E2B0;
			}
		}
	}

	&__item_location {
		flex: 0 0 47%;
	}

	&__item_remote {
		margin-left: 5px;
		background: #12e2b0;
	}

	&__item_state {
		flex: 1;
		text-align: right;

		&:before {
			content: '';
			position: relative;
			top: -1px;
			display: inline-block;
			margin-right: 10px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
		}

		&.open {
			&:before {
				background: #12E2B0;
			}
		}

		&.closed {
			&:before {
				background: #FF0000;
			}
		}
	}
}

</style>