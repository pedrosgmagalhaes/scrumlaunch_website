<template>
	<div class="contact-form">

		<AppearFromMask><p class="header-big">HeLLO,</p></AppearFromMask>

		<div class="contact-form--wrapper">
			<TypingEffect delay="0.05"><label class="header-1" for="name">MY name is</label></TypingEffect>
			<div class="contact-form__input_wrap">
				<InputComponent
					class="contact-form--wrapper--input"
					:modelValue="name"
					@update:modelValue="handleFieldChange('name', $event)"
					placeholder="Enter your name here"
					id="name"
					name="name"
					:errorMessage="nameError"
				/>
				<inline-svg
					:src="require('@/assets/icons/pencil_separate.svg')"
					class="contact-form__pencil_separate"
				/>
				<inline-svg
					:src="require('@/assets/icons/pencil_line.svg')"
					class="contact-form__pencil_line"
				/>
			</div>
		</div>

		<div class="contact-form--wrapper">
			<TypingEffect delay="0.05"><label class="header-1" for="email">HERE are my contacts</label></TypingEffect>
			<InputComponent
				class="contact-form--wrapper--input input-email"
				:modelValue="email"
				@update:modelValue="handleFieldChange('email', $event)"
				placeholder="Enter your email or phone number here"
				id="email"
				name="email"
				:errorMessage="emailError"
			/>
		</div>

		<div class="contact-form--wrapper">
			<TypingEffect delay="0.05"><label class="header-1" for="email">I’m interested in</label></TypingEffect>
			<InputComponent
				class="contact-form--wrapper--input input-project"
				:modelValue="project"
				@update:modelValue="handleFieldChange('project', $event)"
				placeholder="Enter your project details here"
				id="project"
				name="project"
				:errorMessage="projectError"
			/>
		</div>

		<div class="contact-form--wrapper-btn">
			<button class="btn" @click="validateForm()">Send</button>
		</div>

	</div>
</template>



<script>
import InputComponent from '@/components/contact/InputComponent.vue'
import axios from 'axios'

export default {

	components: {
		InputComponent
	},

	data: () => ({
		name: '',
		nameError: null,
		email: '',
		emailError: null,
		project: '',
		projectError: null,
	}),

	methods: {

		handleFieldChange(name, value) {
			this[name] = value;
		},

		sendForm() {
			axios({
				method: 'POST',
				url: '/contact-us',
				data: {
					name: this.name,
					email: this.email,
					details: this.project,
				}
			})
				.then((res) => {
					console.log(res);
					this.name = ''
					this.email = ''
					this.project = ''
				})
		},

		validateForm() {
			let emailRegEx = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$','i')
			this.nameError = this.name === '' ? 'Please, add your name here' : null
			this.emailError = !emailRegEx.test(this.email) ? 'Please, enter your correct email' : null
			this.projectError = this.project === '' ? 'Please, specify your project details here' : null

			if ( this.nameError === null && this.emailError === null && this.projectError === null ) {
				this.sendForm()
			}
		},
	}
}
</script>



<style lang="scss" scoped>

.contact-form {
	position: relative;
	background: #fff;
	padding: 80px 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: #1e1f21;
	position: relative;

	&--icon {
		position: absolute;
		width: 114px;
		height: 130px;
		top: 43px;
		right: 30px;
		z-index: 2;
	}

	& .header-big {
		margin-bottom: 60px;
	}

	&--wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		margin-bottom: 40px;

		&:deep(.wrap.typing_1) {
			flex: initial;
		}

		label {
			margin-bottom: 16px;
		}

		&--input {
			width: 100%;
		}
	}

	&--wrapper-btn {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	&__input_wrap {
		position: relative;
		width: 100%;

		.input-item {
			width: 100%;
		}
	}

	&__pencil_separate {
		position: absolute;
		right: 0;
		bottom: 40px;
		width: 88px;
		z-index: 1;
		transform: translate(0px, 0px);
		animation: pencil 1s linear infinite;
	}

	&__pencil_line {
		position: absolute;
		top: -154px;
		right: 76px;
		width: 50px;
		z-index: 1;
	}
}

@media screen and (min-width: 768px) {
	.contact-form {
		padding: 140px 30px;

		&--icon {
			position: absolute;
			width: 225px;
			height: 257px;
			top: 51px;
			right: 90px;
		}

		&--wrapper {
			margin-bottom: 50px;

			label {
				margin-bottom: 20px;
			}

			&--input {
				width: 50.4%;

				&.input-project {
					width: 83.76%;
				}
			}
		}

		&__input_wrap {
			position: relative;
			width: 39%;

			.input-item {
				width: 100%;
			}
		}

		&__pencil_separate {
			position: absolute;
			right: -418px;
			bottom: 96px;
			width: 239px;
			z-index: 1;
			transform: translate(0px, 0px);
			animation: pencil 1s linear infinite;
		}

		&__pencil_line {
			position: absolute;
			top: -190px;
			right: -204px;
			width: 107px;
			z-index: 1;
		}
	}
}

@media screen and (min-width: 1140px) {

	.contact-form {

		& :deep(.header-big) {
			margin-bottom: 30px;
		}

		&--wrapper {
			position: relative;
			align-items: flex-start;
			margin-bottom: 10px;
			flex-direction: row;
			align-items: center;

			& :deep(.header-1) {
				flex-wrap: nowrap !important;
				margin-right: 15px;
				margin-top: 27px;
			}

			& :deep(.contact-form--wrapper--input) {
				width: 100%;
			}

			& :deep(.input-item--input-wrapper--input) {
				// padding-left: 80px;
				text-align: center;
			}
		}

		&--wrapper-btn {
			margin-top: 40px;
		}

		&__input_wrap {
			position: relative;
			width: 39%;

			.input-item {
				width: 100%;
			}
		}

		&__pencil_separate {
			position: absolute;
			right: -216px;
			bottom: 55px;
			z-index: 1;
			transform: translate(0px, 0px);
			animation: pencil 1s linear infinite;
		}

		&__pencil_line {
			position: absolute;
			top: -79px;
			right: -10px;
			z-index: 1;
		}
	}
}

@media screen and (min-width: 1280px) {
	.contact-form {
		padding: 240px 8.34%;

		&--icon {
			position: absolute;
			width: 312.38px;
			height: 353px;
			top: 156px;
			right: 177px;
		}

		&--wrapper {
			position: relative;
			align-items: flex-start;
			margin-bottom: 40px;
			flex-direction: row;
			align-items: center;

			label {
				margin-bottom: 0px;
				margin-right: 20px;
			}

			&--input {
				// width: 47%;

				&.input-project {
					width: 48%;
				}

				&.input-email {
					width: 39%;
				}
			}
		}

		&--wrapper-btn {
			margin-top: 40px;
		}

		&__input_wrap {
			position: relative;
			width: 39%;

			.input-item {
				width: 100%;
			}
		}

		&__pencil_separate {
			position: absolute;
			right: -216px;
			bottom: 58px;
			z-index: 1;
			transform: translate(0px, 0px);
			animation: pencil 1s linear infinite;
		}

		&__pencil_line {
			position: absolute;
			top: -76px;
			right: -10px;
			z-index: 1;
		}
	}
}

@keyframes pencil {
	0% {
		transform: translate(0px, 0px);
	}

	25% {
		transform: translate(3px, 0px);
	}

	50% {
		transform: translate(3px, -3px);
	}

	75% {
		transform: translate(0px, -3px);
	}

}

</style>
