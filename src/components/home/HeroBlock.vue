<template>
	<div class="hero" ref="hero">

		<div class="hero--text-wrapper">

			<div class="hero--text-wrapper__header">
				<AppearFromMask><p class="header-big">Software</p></AppearFromMask>
				<AppearFromMask><p class="header-big">Development &</p></AppearFromMask>
				<AppearFromMask><p class="header-big">Design Teams</p></AppearFromMask>
				<AppearFromMask><p class="header-big mark">On Demand</p></AppearFromMask>
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
					require('../../assets/animation/map.json')
				"
			/>

		</div>

		<div class="btn_wrap">
			<router-link :to="{ path: '/quiz' }" class="btn on_dark_bg">Hire Talent</router-link>
		</div>

		<div class="hero--bottom">
			<SocialBlock iconSufix="-white" />
			<inline-svg :src="require('@/assets/icons/scroll-down-white.svg')" @click="scrollDown()" class="hero--bottom__scroll_down" />
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
	padding: 125px 20px 20px 20px;
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: left;
	background: #1E1F21;

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
			display: flex;
			flex-direction: column;
			align-self: center;
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
		color: #FFFFFF;

		&.mark {
			background: #12E2B0;
			color: #1E1F21;
		}
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

.btn_wrap {
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
}

.btn {
	min-width: 302px;
	height: 82px;
	width: auto;
	font-size: 18px;
}

@media screen and (min-width: 375px) {
	.hero {
		padding-bottom: 20px;

		&--text-wrapper {
			&--illustration {
				width: 375px !important;
				height: 318px !important;
				// top: 40px;
				// left: 50%;
				right: auto;
				// transform: translateX(-50%);

				::v-deep {
					transform: scale(0.9) translateX(-23px);
				}
			}
		}
	}
}

@media screen and (min-width: 425px) {
	.hero {
		padding-bottom: 40px;

		&--text-wrapper {
			// margin-bottom: 80px;
			
			&--illustration {
				::v-deep {
					transform: scale(1) translateX(0px);
				}
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.hero {
		padding: 197px 3.9% 40px 3.9%;

		&--text-wrapper {
			display: flex;
			justify-content: center;
			flex-direction: column;
			margin-bottom: 80px;

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
					transform: scale(1.2) translateX(0);
				}
			}
		}
	}
}

@media screen and (min-width: 1140px) {
	.hero {
		padding-bottom: 42px;

		&--text-wrapper {
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 60px;

			&__header {
				align-items: flex-start;
			}

			.header-big {
				text-align: left;
			}

			&--illustration {
				margin-top: -90px;

				::v-deep {
					transform: scale(1) translateX(0);
				}
			}
		}
	}

	.btn_wrap {
		justify-content: flex-start;
		margin-bottom: 60px;
	}
}

@media screen and (min-width: 1280px) {
	.hero {
		padding: 206px 3.9% 82px 3.9%;

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

				::v-deep {
					top: 50px;
					transform: scale(1) translateX(0);
				}
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
		padding: 269px 8.34% 82px 8.34%;
		position: relative;
		display: flex;
		flex-direction: column;

		&--text-wrapper {
			margin-bottom: 80px;

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

				::v-deep {
					top: 220px;
					transform: scale(1.2) translateX(-80px);
				}
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

	.btn_wrap {
		margin-bottom: 80px;
	}
}

@media screen and (min-width: 1900px) {
	.header-big {
		font-weight: 900;
		font-size: 90px;
		line-height: 140%;
	}

	.hero {
		padding-top: 180px;
		padding-bottom: 60px;

		&--text-wrapper {
			margin-bottom: 80px;

			&--illustration {

				::v-deep {
					transform: scale(1.4) translateX(-100px);
					top: 282px;
				}
			}
		}
	}

	.btn_wrap {
		margin-bottom: 60px;
	}

	.btn {
		font-size: 21.6867px;
		line-height: 150%;
	}
}
</style>
