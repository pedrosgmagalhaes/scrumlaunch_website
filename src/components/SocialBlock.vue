<template>
	<div class="social" :class="{ home: $route.name === 'Home' }">

		<a href="https://www.behance.net/code_catalyst" target="_blank" class="social--icon_wrap">
			<inline-svg
				:src="require('@/assets/icons/behance.svg')"
				class="social--icon"
			/>
		</a>

		<a href="https://www.linkedin.com/company/scrumlaunch/" target="_blank" class="social--icon_wrap">
			<inline-svg
				:src="require('@/assets/icons/linkedin.svg')"
				class="social--icon"
			/>
		</a>

		<a href="https://dribbble.com/scrumlaunch" target="_blank" class="social--icon_wrap">
			<inline-svg
				:src="require('@/assets/icons/dribbble.svg')"
				class="social--icon"
			/>
		</a>

	</div>
</template>



<style lang="scss" scoped>

.social {
	display: flex;
	width: 129px;

	&--icon_wrap {
		margin-right: 18.6%;
	}

	&--icon {
		flex: none;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}
	}
}

@media screen and (min-width: 1900px) {
	.social {
		$root: &;

		&.home {

			#{$root}--icon_wrap {
				margin-right: 31px;
			}

			#{$root}--icon {
				width: 40px;
				height: 40px;
			}
		}
	}
}

</style>
