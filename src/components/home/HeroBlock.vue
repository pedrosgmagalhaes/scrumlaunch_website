<template>
	<div class="hero">

		<div class="hero--text-wrapper">

			<div class="hero--text-wrapper__header">
				<AppearFromMask><p class="header-big">Product Design</p></AppearFromMask>
				<AppearFromMask><p class="header-big">& Software</p></AppearFromMask>
				<AppearFromMask><p class="header-big">Development</p></AppearFromMask>
				<AppearFromMask><p class="header-big">for Startups</p></AppearFromMask>
			</div>
			
			<!-- <inline-svg
				:src="require('@/assets/illustrations/illustration-map.svg')"
				class="hero--text-wrapper--illustration"
			/> -->

			<vLottiePlayer
				class="hero--text-wrapper--illustration"
				name="reliabilityDesktopAnim"
				loop
				renderer="canvas"
				:animationData="
					require('../../assets/animation/pangea2.json')
				"
			/>

		</div>

		<div class="hero--bottom">
			<SocialBlock />
			<inline-svg :src="require('@/assets/icons/scroll-down.svg')" />
		</div>

	</div>
</template>



<script>
import SocialBlock from '@/components/SocialBlock.vue'

export default {
	components: {
		SocialBlock,
	},
}
</script>



<style lang="scss" scoped>
.hero {
	padding: 125px 20px 0;
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: left;

	&--text-wrapper {
		margin-bottom: 80px;
		overflow: hidden;

		h1 {
			text-align: center;
			margin-bottom: 30px;
		}

		&--illustration {
			position: relative;
			margin-left: auto;
			margin-right: auto;
			// width: 280px;
			width: 320px !important;
			height: 272px !important;
			overflow: hidden;

			::v-deep {
				transform: scale(1.18) translateX(-15px);
			}
		}

		&__header {
			position: relative;
			z-index: 1;
		}
	}

	&--bottom {
		display: flex;
		justify-content: space-between;
	}
}

.appear_from_mask {
	&__wrap {
		position: relative;
		height: 70px;
		margin-bottom: 28px;
		overflow: hidden;
	}
}

.animation {
	&__from {
		top: 48px;
	}

	&__active {
		position: relative;
		transition: all 1s;
	}

	&__to {
		top: -2px;
	}
}

@media screen and (min-width: 375px) {
	.hero {
		&--text-wrapper {
			&--illustration {
				width: 375px !important;
				height: 318px !important;
				// top: 40px;
				// left: 50%;
				right: auto;
				// transform: translateX(-50%);

				::v-deep {
					transform: scale(1.18) translateX(-15px);
				}
			}
		}
	}
}

@media screen and (min-width: 425px) {
	.hero {
		&--text-wrapper {
			&--illustration {
				::v-deep {
					transform: scale(1.18) translateX(0px);
				}
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.hero {
		padding: 197px 3.9% 0;

		&--text-wrapper {
			display: flex;
			justify-content: center;
			flex-direction: column;

			h1 {
				margin-bottom: 60px;
			}

			&--illustration {
				position: relative;
				width: 524px !important;
				height: 445px !important;
				top: 40px;
				right: 0;
				left: auto;
				transform: none;

				::v-deep {
					transform: scale(1.3) translateX(-15px);
				}
			}
		}
	}
}

@media screen and (min-width: 1280px) {
	.hero {
		padding: 206px 3.9% 0;

		&--text-wrapper {
			margin-bottom: 100px;

			h1 {
				font-size: 56px;
			}

			&--illustration {
				position: relative;
				width: -webkit-fill-available;
				height: 503px;
				top: 40px;
				right: 0;
			}
		}

		&--bottom {
			display: flex;
			justify-content: space-between;
		}
	}
}

@media screen and (min-width: 1440px) {
	.hero {
		padding: 269px 8.34% 0;
		position: relative;
		display: flex;
		flex-direction: column;

		&--text-wrapper {
			margin-bottom: 208px;

			h1 {
				text-align: left;
				font-size: 70px;
			}

			&--illustration {
				position: absolute;
				top: 243px;
				right: 60px;
				width: auto;
				height: auto;
				margin: 0;
			}
		}

		&--bottom {
			display: flex;
			justify-content: space-between;
		}
	}
}

@media screen and (min-width: 1900px) {
	.header-big {
		font-weight: 900;
		font-size: 90px;
		line-height: 140%;
	}
}
</style>
