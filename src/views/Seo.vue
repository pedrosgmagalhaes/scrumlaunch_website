<template>

	<div class="seo">

		<div class="seo__meta">
			<div class="seo__category">{{ article.category }}</div>
			<div class="seo__date">Published on {{ article.date }}</div>
		</div>

		<h1 class="header-big">{{ article.title }}</h1>

		<div class="seo__body" v-if="article" v-html="article.fullText"></div>

		<ProgLangList class="prog_lang_list" v-if="article.slug === '/blog/hire-developers'" />

	</div>

</template>



<script>
import articles from '@/seo/articles.json'
import { /* computed, reactive, */ ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { useHead } from '@vueuse/head'
// import { dateConverter } from '@/utils.js'
import ProgLangList from '@/components/hire-developers/ProgLangList.vue'

export default {

	components: {
		ProgLangList,
	},

	setup() {
		const router = useRouter()
		const route = useRoute()

		const article = ref({})

		function getArticle() {

			if ( route.params.pathMatch !== '' ) {
				article.value = articles.filter((item) => {
					if ( item.slug === '/blog/' + route.params.pathMatch.join('/') ) {
						// item.date = dateConverter(item.date, 2)
						return item
					}
				})[0]
			}
			else {
				router.push({ path: route.path })
			}

			// const metaData = reactive({
			// 	title: article.value.meta_title,
			// 	description: article.value.meta_description,
			// })

			// useHead({
			// 	title: computed(() => metaData.title),
			// 	meta: [
			// 		{
			// 			name: `description`,
			// 			content: computed(() => metaData.description),
			// 		},
			// 		{
			// 			name: `robots`,
			// 			content: 'noindex, nofollow',
			// 		},
			// 	],
			// })

        }

		watch(() => route.path, () => {
			if ( route.name === "Seo" ) {
				getArticle()
			}
		})

		onMounted(() => {
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

.prog_lang_list {
	margin-top: 100px;

	:deep(.langs__item) {
		text-align: left;
	}
}

</style>