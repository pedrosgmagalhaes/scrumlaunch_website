<template>
	<div class="contact-us">

		<inline-svg
			:src="require('@/assets/illustrations/illustration-faces.svg')"
			class="contact-us--icon"
		/>

		<div class="contact-us--text">

			<TypingEffect type="2"><p class="header-2">Want to talk new projects, collaborations, or just say hello? Get in touch with me.</p></TypingEffect>

			<router-link class="btn" :to="{ name: 'ContactUs' }">Contact Us</router-link>
		</div>

	</div>
</template>



<script>
export default {
}
</script>



<style lang="scss" scoped>

.contact-us {
	padding: 0 19px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;
	margin-bottom: 80px;

	&--icon {
		width: 280px;
		height: auto;
	}

	&--text {
		text-align: left;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			margin-bottom: 40px;
			margin-top: 29px;
			text-align: left;
			width: 101%;
		}
	}
}

.btn {
	font-size: 18px;
}

@media screen and (min-width: 375px) {
	.contact-us--icon {
		width: 334px;
		height: 221px;
	}
}

@media screen and (min-width: 768px) {
	.contact-us {
		padding: 0 30px;
		margin-bottom: 140px;

		&--icon {
			width: 708px;
			height: 462px;
		}

		&--text {
			p {
				margin-bottom: 60px;
				margin-top: 62px;
				width: 100%;
			}
		}
	}
}

@media screen and (min-width: 1140px) {

	.btn {
		min-width: 302px;
		height: 82px;
        width: auto;
	}

	.contact-us {
		flex-direction: row;

		&--icon {
			margin-right: 70px;
			width: 516px;
			height: 338px;
		}

		&--text {
			max-width: 468px;
			align-items: flex-start;

			p {
				margin-top: 0;
				font-size: 30px;
				line-height: 140%;
			}
		}
	}
}

@media screen and (min-width: 1280px) {
	.contact-us {
		padding: 0 8.34% 0;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 240px;

		&--icon {
			width: 596px;
			height: 392px;
		}

		&--text {
			max-width: 39%;
			justify-content: space-around;
			align-items: flex-start;

			p {
				margin-top: 0px;
				margin-bottom: 40px;
			}
		}
	}
}

@media screen and (min-width: 1440px) {
	.contact-us {
		&--icon {
			margin-right: 152px;
		}
	}

	.btn {
		min-width: 302px;
		height: 82px;
        width: auto;
	}
}

@media screen and (min-width: 1900px) {
	.contact-us {
		&--icon {
			margin-right: 200px;
			width: 773px;
			height: 507px;
		}

		&--text {
			p {
				max-width: 626px;
				font-size: 40px;
				line-height: 140%;
			}
		}
	}

	.header-2 {
		font-size: 40px;
		line-height: 140%;
	}

	.btn {
		min-width: 302px;
		height: 82px;
        width: auto;
		font-size: 21.6867px;
		line-height: 150%;
	}
}

</style>
