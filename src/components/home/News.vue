<template>
	<div class="news">
		<div class="news--icon">

			<div class="news--icon--desktop">
				<vLottiePlayer
					name="reliabilityDesktopAnim"
					loop
					width="100%"
					height="100%"
					:animationData="
						require('../../assets/animation/reliability-desktop.json')
					"
				/>
			</div>

			<div class="news--icon--tablet">
				<vLottiePlayer
					name="reliabilityTabletAnim"
					loop
					width="100%"
					height="100%"
					:animationData="
						require('../../assets/animation/reliability-tablet.json')
					"
				/>
			</div>

			<div class="news--icon--mobile">
				<vLottiePlayer
					name="reliabilityMobileAnim"
					loop
					width="100%"
					height="100%"
					:animationData="
						require('../../assets/animation/reliability-mobile.json')
					"
				/>
			</div>

		</div>

		<AppearFromMask>
			<h2 class="header-1">NEWS & INSIGHTS</h2>
		</AppearFromMask>

		<div class="news--wrapper">
			<div
				class="news--wrapper--item"
				v-for="(news_item, index) in news"
				:key="index"
				v-in-viewport="in_viewport"
			>
				<transition-group name="news">
					<div
						v-if="news_item.in_viewport"
						class="news--wrapper--item--content"
						:key="index"
					>
						<div>
							<p
								class="
									news--wrapper--item--content--header
									header-2
								"
							>
								{{ news_item.title }}
							</p>
							<p
								class="
									news--wrapper--item--content--text
									body-3
								"
							>
								{{ news_item.short_text }}
							</p>
						</div>
						<span class="header-4">{{ news_item.date }}</span>
					</div>
				</transition-group>
				<div class="news--wrapper--item--arrow"></div>
			</div>
		</div>

		<router-link class="btn news--btn" to="/blog">explore more</router-link>
	</div>
</template>



<script>
export default {

	mounted() {
		this.news = this.news.map((item) => {
			item.in_viewport = false
			return item
		})
	},

	data() {
		return {
			news: [
				{
					title: 'How does FGN app help seniors and why is it so important?',
					short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
				{
					title: 'How does FGN app help seniors and why is it so important?',
					short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
				{
					title: 'How does FGN app help seniors and why is it so important?',
					short_text: 'Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive biases is critical when starting a company.',
					date: '02 Dec 21',
				},
			]
		}
	},

	methods: {
		in_viewport(isVisible, key) {
			if (isVisible) {
				this.news[key].in_viewport = true
			}
		}
	},

}
</script>



<style lang="scss" scoped>
.news {
	padding: 172px 20px 0;
	display: flex;
	flex-direction: column;
	margin-bottom: 80px;
	position: relative;
	overflow: hidden;

	&--icon {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 375px;
		height: 300px;
		z-index: -1;

		&--desktop {
			display: none;
		}

		&--tablet {
			display: none;
		}

		&--mobile {
			display: block;
		}
	}

	h2 {
		margin-bottom: 40px;
		text-align: left;
	}

	&--wrapper {
		&--item {
			padding: 30px 0;
			border-top: 1px solid #1e1f21;
			display: flex;
			justify-content: space-between;
			position: relative;

			&:last-child {
				border-bottom: 1px solid #1e1f21;
			}

			&--content {
				text-align: left;

				&--header {
					margin-bottom: 16px;
				}

				&--text {
					margin-bottom: 32px;
				}

				.header-4 {
					font-size: 12px;
				}
			}

			&--arrow {
				width: 30px;
				height: 15px;
				background-image: url("../../assets/icons/union-empty.svg");
				background-size: contain;
				background-repeat: no-repeat;
				transition: all 0.4s ease;
				cursor: pointer;
				position: absolute;
				right: 0;
				bottom: 31px;

				&:hover {
					background-image: url("../../assets/icons/union.svg");
				}
			}
		}
	}

	&--btn {
		margin: 40px auto 0;
	}

	&-enter-from {
		opacity: 0;
		transform: scale(0.5);
	}

	&-enter-active {
		transition: all 1s ease-out 0.3s;
	}

	&-enter-to {
		opacity: 1;
		transform: scale(1);
	}
}

.date {
	&__from {
		opacity: 0;
		transform: scale(0.5);
	}

	&__active {
		display: inline-block;
		transition: all 1s;
	}

	&__to {
		opacity: 1;
		transform: scale(1);
	}
}

@media screen and (min-width: 768px) {
	.news {
		padding: 291px 30px 0;
		margin-bottom: 140px;

		&--icon {
			top: 0px;
			right: 0px;
			width: 768px;
			height: 300px;

			&--desktop {
				display: none;
			}

			&--tablet {
				display: block;
			}

			&--mobile {
				display: none;
			}
		}

		h2 {
			margin-bottom: 60px;
		}

		&--wrapper {
			&--item {
				padding: 32px 0;

				&:last-child {
					border-bottom: 1px solid #1e1f21;
				}

				&--content {
					max-width: 73%;

					&--header {
						margin-bottom: 20px;
					}

					&--text {
						margin-bottom: 40px;
					}

					.header-4 {
						font-size: 14px;
					}
				}

				&--arrow {
					width: 59px;
					height: 29px;
					position: relative;
					top: 0;
				}
			}
		}

		&--btn {
			margin: 60px auto 0;
		}
	}
}

@media screen and (min-width: 1140px) {
	.news {

		&--icon {
			right: -126px;
			width: 1206px;
		}

		h2 {
			margin-bottom: 80px;
		}
	}

	.header-2 {
		font-size: 30px;
	}

	.news--wrapper--item--content {
		max-width: 90%;
	}

	.news--wrapper--item--arrow {
		width: 75px;
		height: 37px;
	}
}

@media screen and (min-width: 1280px) {
	.news {
		padding: 420px 8.34% 0;
		margin-bottom: 240px;

		&--icon {
			top: 110px;
			right: -140px;
			width: 950px;
			height: 250px;

			&--desktop {
				display: block;
			}

			&--tablet {
				display: none;
			}

			&--mobile {
				display: none;
			}
		}

		h2 {
			margin-bottom: 40px;
		}

		&--wrapper {
			&--item {
				padding: 50px 0;

				&--content {
					max-width: 68%;
				}

				&--arrow {
					margin-left: auto;
					width: 75px;
					height: 37px;
				}
			}
		}

		&--btn {
			margin: 80px auto 0;
		}
	}
}

@media screen and (min-width: 1900px) {
	.news {
		h2 {
			margin-bottom: 200px;
		}
	}
	.header-1 {
		font-weight: 900;
		font-size: 75px;
		line-height: 140%;
	}

	.header-2 {
		font-size: 40px;
		line-height: 140%;
	}

	.body-3 {
		font-size: 20px;
		line-height: 150%;
	}

	.news--wrapper--item--content .header-4 {
		font-size: 16px;
	}

	.btn {
		width: 220px;
		height: 220px;
		border-radius: 50%;
		font-size: 21.6867px;
		line-height: 150%;
	}
}
</style>
