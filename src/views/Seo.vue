<template>

	<div class="seo">

		<div class="seo__body" v-if="article" v-html="article.html"></div>

	</div>

</template>



<script>
import articles from '@/seo/articles.json'
import { computed, reactive, ref, onMounted, onBeforeUpdate } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

export default {

	setup() {
		const route = useRoute()



		const article = ref({})

		function getArticle() {

            article.value = articles.filter((item) => {
                if ( item.url === '/seo/' + route.params.pathMatch.join('/') ) {
                    return item
                }
            })[0]

			const metaData = reactive({
				title: article.value.meta_title,
				description: article.value.meta_description,
			})

			useHead({
				title: computed(() => metaData.title),
				meta: [
					{
						name: `description`,
						content: computed(() => metaData.description),
					},
					{
						name: `robots`,
						content: 'noindex, nofollow',
					},
				],
			})
        }

		onMounted(() => {
			getArticle()
		})

		onBeforeUpdate(() => {
			getArticle()
		})



		return {
			article,
		}

	},

}
</script>



<style lang="scss" scoped>

.seo {
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

        :deep(h1) {
			margin-bottom: 40px;
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
			margin-bottom: 6px;
			font-style: normal;
			font-weight: 900;
			font-size: 34px;
			line-height: 140%;
			letter-spacing: 0.02em;
			text-transform: uppercase;
		}

		:deep(p) {
			margin-bottom: 23px;
			
			@media screen and (max-width: 1900px) {
				margin-bottom: 20px;
			}
		}

        :deep(p + h2) {
            margin-top: 60px;
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

        :deep(strong) {
            font-weight: 800;
        }

        :deep([itemtype="https://schema.org/Question"]) {
            margin-bottom: 40px;
        }

        :deep(ol) {
            padding-left: 22px;
            list-style: decimal;
        }

        :deep(ol li) {
            margin-bottom: 20px;
        }

        :deep(ol li p) {
            margin-bottom: 0;
        }

        :deep(ul) {
            padding-left: 22px;
            list-style: disc;
        }

        :deep(ul li) {
            margin-bottom: 20px;
        }

        :deep(ul li p) {
            margin-bottom: 0;
        }
	}
	
}

</style>