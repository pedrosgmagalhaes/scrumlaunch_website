<template>
	<div class="hero">

		<h1 class="header-big">
			<AppearFromMask><span>WE DESIGN</span></AppearFromMask>
			<AppearFromMask><span>A LOT OF THINGS</span></AppearFromMask>
		</h1>

		<AppearFromMask>
			<p class="body-3">
				We master digital production and development. What we also master is the fine art of listening. Truly listening.
			</p>
		</AppearFromMask>

		<div class="hero--wrapper">
			<inline-svg
				:src="require('@/assets/icons/planet.svg')"
				class="hero--wrapper--icon"
			/>
		</div>

	</div>
</template>



<script>
export default {
}
</script>



<style lang="scss" scoped>

.header-big {
	span {
		display: inline-block;
	}
}

.body-3 {
	position: relative;
}

.hero {
	padding: 125px 20px 80px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	text-align: left;
	position: relative;

	h1 {
		margin-bottom: 16px;
		letter-spacing: 0.01em;
	}

	p {
		margin-bottom: 30px;
	}

	&--wrapper {
		width: 100%;
		display: flex;
		justify-content: center;

		&--icon {
			width: 335px;
			height: 315px;
		}
	}
}

@media screen and (min-width: 768px) {
	.hero {
		padding: 197px 30px 140px;

		h1 {
			margin-bottom: 24px;
			// width: 80%;
			max-width: 100%;
		}

		p {
			margin-bottom: 60px;
			font-size: 20px;
		}

		&--wrapper {
			&--icon {
				width: 708px;
				height: 667px;
			}
		}
	}
}

@media screen and (min-width: 1280px) {
	.hero {
		padding: 197px 8.34% 140px;

		h1 {
			margin-bottom: 40px;
			// width: 60%;
			width: 100%;
			max-width: 750px;
		}

		p {
			margin-bottom: 180px;
			// width: 51%;
			width: 100%;
			max-width: 750px;
		}

		&--wrapper {
			position: absolute;
			top: 166px;
			right: 77px;
			width: auto;

			&--icon {
				width: 429px;
				height: 404px;
			}
		}
	}
}

</style>
