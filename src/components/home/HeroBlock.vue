<template>
	<div class="hero" ref="hero">

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
				renderer="svg"
				:animationData="
					require('../../assets/animation/pangea2.json')
				"
			/>

		</div>

		<div class="hero--bottom">
			<SocialBlock />
			<inline-svg :src="require('@/assets/icons/scroll-down.svg')" @click="scrollDown()" class="hero--bottom__scroll_down" />
		</div>

	</div>
</template>



<script>
import SocialBlock from '@/components/SocialBlock.vue'

export default {

	components: {
		SocialBlock,
	},

	methods: {
		scrollDown() {

			let top = this.$refs.hero.offsetTop + this.$refs.hero.clientHeight

			window.scrollTo({
                top: top,
                behavior: "smooth"
            })
		}
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
		// margin-bottom: 80px;
		margin-bottom: 0px;
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
		position: relative;
		display: flex;
		justify-content: space-between;

		&__scroll_down {
			cursor: pointer;
		}
	}

	.header-big {
		text-align: center;
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
			margin-bottom: 80px;
			
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
					transform: scale(1.5) translateX(0);
				}
			}
		}
	}
}

@media screen and (min-width: 1140px) {
	.hero {
		&--text-wrapper {
			flex-direction: row;
			justify-content: space-between;

			.header-big {
				text-align: left;
			}

			&--illustration {
				margin-top: -90px;

				::v-deep {
					transform: scale(1.2) translateX(30px);
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
				top: 83px;
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

		.header-big {
			text-align: left;
		}
	}
}

@media screen and (min-width: 1900px) {
	.header-big {
		font-weight: 900;
		font-size: 90px;
		line-height: 140%;
	}

	.hero {
		padding-top: 230px;

		&--text-wrapper {
			margin-bottom: 150px;

			&--illustration {

				::v-deep {
					transform: scale(1.8) translateX(-84px);
					top: 282px;
				}
			}
		}
	}
}
</style>
