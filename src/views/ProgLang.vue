<template>
    <div class="dev_langs">

		<h1 class="header-big">Hire {{ dev_lang }} Developers with Ease</h1>

		<div class="dev_langs__body">

            <h2>Scrumlaunch’s {{ dev_lang }} developers are highly skilled software engineers based around the world with deep expertise in full-stack development.</h2>

            <h3>How it Works</h3>

            <h3>1. Book a Free Consultation</h3>
            <p>We want to hear you {{ dev_lang }} needs firsthand to ensure we’re a good fit.</p>

            <h3>2. We Match Talent</h3>
            <p>We  search our pool of hundreds of {{ dev_lang }} developers to identify potential fits for your project</p>

            <h3>3. You Select {{ dev_lang }}</h3>
            <p>Effortlessly scale your development needs up and down</p>

            <h3>4. We Start Building!</h3>


            <h2>About our Python Developers</h2>

            <p>Hiring {{ dev_lang }} can be tricky - Scrumlaunch makes it easy. Your website is the lifeblood of your business. Our team has built and sold multiple companies, and we understand first-hand how important competent software engineers are. That’s why at Scrumlaunch, we vet all {{ dev_lang }} and employ rigorous tests to assess development and English-language competency. All clients are assigned a dedicated account manager available at all times to ensure you are meeting your {{ dev_lang }} goals in a timely and cost-effective manner.</p>

            <h2>Frequently Asked Questions</h2>

            <div itemscope="" itemtype="https://schema.org/FAQPage">

                <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 itemprop="name">Why should I use Scrumlaunch to Hire {{ dev_lang }}?</h3>
                    <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>At Scrumlaunch, we hire and train every member of our team individually. All dedicated {{ dev_lang }} (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our {{ dev_lang }} experts have worked on a range of projects from video analysis and machine learning to custom marketplaces.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div itemscope="" itemtype="https://schema.org/FAQPage">

                <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 itemprop="name">How Quickly can I hire {{ dev_lang }} through Scrumlaunch?</h3>
                    <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Many of our clients have been up and running in under 24 hours. Scrumlaunch has the capacity to scale instantly and on-demand. If you already know what you’re building, then book a free consultation with our team to explain your {{ dev_lang }} requirements. We’ll match you with {{ dev_lang }} experts and a project manager on our team in a matter of hours.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div itemscope="" itemtype="https://schema.org/FAQPage">

                <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 itemprop="name">Is Scrumlaunch well-known for {{ dev_lang }}?</h3>
                    <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>{{ dev_lang }} is one of our primary development languages. Our team has a collective 600 years of development experience, and we’ve built incredibly complex projects in the language</p>
                        </div>
                    </div>
                </div>

            </div>
            <div itemscope="" itemtype="https://schema.org/FAQPage">

                <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h3 itemprop="name">How Effective if Offshore or Outsourced {{ dev_lang }}?</h3>
                    <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">
                            <p>Offshore {{ dev_lang }} development is an incredibly cost-effecitve and efficient way to stand up new projects or build out existing ones. However, outsourcing {{ dev_lang }} development offshore should be done with a reputable firm that has a proven track record of success. Read our guide on outsourcing web development here.</p>
                        </div>
                    </div>
                </div>

            </div>
            <p>&nbsp;</p>

            <h2>About Scrumlaunch</h2>
            <p>Scrumlaunch is home to top developers, designers, engineers, coders, architects, and consultants. Companies choose to work with Scrumlaunch because our team has succeeded with all types of companies and projects, supporting business owners from idea to acquisition.</p>

        </div>

	</div>
</template>



<script>
import dev_langs from '@/seo/development_languages.json'

export default {

    mounted() {
        this.getDevLang()
    },

    data: () => ({
        dev_lang: null
    }),

    methods: {
        getDevLang() {
            this.dev_lang = dev_langs.filter((item) => {
                return this.$route.params.prog_lang === item.url
            })[0].lang
        }
    },
    
}
</script>



<style lang="scss" scoped>

.dev_langs {
	margin: 0 auto;
	padding-top: 240px;
	padding-bottom: 240px;
	padding-left: 8.34%;
	padding-right: 8.34%;
	width: 100%;
	max-width: 1586px;

	@media screen and (max-width: 1900px) {
		padding-top: 186px;
		padding-bottom: 220px;
	}

	* {
		box-sizing: border-box;
	}

	@media screen and (max-width: 1440px) {
		max-width: 1200px;
	}

	@media screen and (max-width: 1140px) {
		padding-left: 44px;
		padding-right: 44px;
		padding-top: 197px;
		padding-bottom: 197px;
		max-width: 100%;
		width: auto;
	}

	.header-big {
		margin-bottom: 60px;
		text-align: left;
		font-size: 90px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			margin-bottom: 40px;
			font-size: 70px;
		}

		@media screen and (max-width: 1140px) {
			font-size: 56px;
		}

		@media screen and (max-width: 768px) {
			margin-bottom: 60px;
			text-align: center;
		}
	}

	&__meta {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 60px;

		@media screen and (max-width: 1900px) {
			margin-bottom: 40px;
		}
	}

	&__category {
		margin-right: 20px;
		font-weight: bold;
		font-size: 20px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}
	}

	&__date {
		font-weight: 500;
		font-size: 20px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}
	}

	&__body {
		margin: 0 auto;
		max-width: 1200px;
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 150%;
		text-align: left;

		@media screen and (max-width: 1900px) {
			font-size: 16px;
		}

		@media screen and (max-width: 1440px) {
			max-width: 900px;
		}

		:deep(h2) {
			margin-bottom: 40px;
			font-style: normal;
			font-weight: 900;
			font-size: 48px;
			line-height: 140%;
			letter-spacing: 0.02em;
			text-transform: uppercase;
		}

		:deep(h3) {
			margin-bottom: 21px;
			font-style: normal;
			font-weight: bold;
			font-size: 30px;
			line-height: 140%;
			color: #1E1F21;
		}

		:deep(p) {
			margin-bottom: 23px;
			
			@media screen and (max-width: 1900px) {
				margin-bottom: 20px;
			}
		}

		:deep(img) {
			display: block;
			max-width: 100%;
		}

		:deep(blockquote) {
			margin-top: 40px;
			margin-bottom: 40px;
			padding-left: 212px;
			min-height: 127px;
			font-style: italic;
			font-weight: normal;
			font-size: 26px;
			line-height: 150%;
			background: url(../assets/icons/quotes.svg) 0 0 no-repeat;
		}

		:deep(b) {
			font-weight: bold;
		}

		:deep(i) {
			font-style: italic;
		}

		:deep(ul) {
			padding-left: 30px;
			list-style: initial;
		}

		:deep(ul p) {
			margin-bottom: 0;
		}

		:deep(ul a) {
			text-decoration: none;
		}

		:deep(a) {
			color: currentColor;

			&:hover {
				text-decoration: none;
			}
		}
	}
	
}

</style>