<template>

	<div class="contact-us">

		<div class="contact-us--hero">

			<h1 class="header-big">
				<AppearFromMask maskBg="#1E1F21"><span>Let’s </span></AppearFromMask>
				<AppearFromMask maskBg="#1E1F21"><span style="color: #12e2b0">talk</span></AppearFromMask>
			</h1>

			<AppearFromMask maskBg="#1E1F21">
				<p class="header-2">
					Interested in working with us?
					<span style="color: #1e1f21; background: #12e2b0">Send us an email</span>
					or start a conversation by filling out the form below.
				</p>
			</AppearFromMask>

		</div>

		<ContactForm />

	</div>

</template>



<script>
import ContactForm from '@/components/contact/ContactForm.vue'

export default {

	components: {
		ContactForm
	}

}
</script>



<style lang="scss" scoped>

.header-big {
	span {
		display: inline-block;
	}
}

.contact-us {
	&--hero {
		padding: 125px 20px 80px;
		background: #1e1f21;
		color: #ffffff;
		display: flex;
		justify-content: space-between;

		p {
			margin-top: 74px;
			text-align: left;
			width: 90%;
		}
	}
}

@media screen and (min-width: 768px) {
	.contact-us {
		&--hero {
			padding: 157px 30px 100px;

			p {
				margin-top: 134px;
				width: 90%;
				max-width: 100%;
			}
		}
	}
}

@media screen and (min-width: 1140px) {
	::deep(.header-2) {
		margin-top: 0 !important;
	}
}

@media screen and (min-width: 1280px) {
	.contact-us {
		&--hero {
			padding: 206px 8.34% 124px;
			justify-content: flex-start;

			p {
				margin-top: 97px;
				margin-left: 146px;
				width: 62%;
				max-width: 100%;
			}
		}
	}
}

</style>
