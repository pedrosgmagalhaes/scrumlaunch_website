<template>
	<div class="articles">

		<div class="articles__main_block">

			<h1 class="header-big">
				Get more of our<br>
				ideas, insights,<br>
				and guides
			</h1>

			<div class="articles__book">
				<inline-svg
					:src="require('@/assets/icons/book.svg')"
					class="articles__book_icon"
				/>
			</div>

		</div>


		<ul class="articles__categories" @click="scrollToCategories">
			<ArticleLink to="/blog">All Articles <span class="articles__category_counter">124</span></ArticleLink>
			<ArticleLink to="/blog/category/guides">Guides</ArticleLink>
			<ArticleLink to="/blog/category/insights">Insights</ArticleLink>
			<ArticleLink to="/blog/category/development">Development</ArticleLink>
			<ArticleLink to="/blog/category/enterpreunership">Enterpreunership</ArticleLink>
			<ArticleLink to="/blog/category/faq">F.A.Q.</ArticleLink>
		</ul>


		<div v-if="getFirstArticle">
			<ArticlePreview :item="getFirstArticle" :first="true" />

			<div class="articles__preview_list">
				<ArticlePreview v-for="(item, index) in getRestArticles" :key="index" :item="item" />
			</div>

			<div class="articles__all_articles_btn_wrapper">
				<router-link class="btn" to="/blog">View all</router-link>
			</div>
		</div>

		<div v-else>
			<p>There are no articles in this section</p>
		</div>

	</div>
</template>



<script>
import { onMounted, watch } from 'vue'
import { mapGetters, useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ArticlePreview from '@/components/articles/ArticlePreview'
import ArticleLink from '@/components/articles/ArticleLink'
import * as Contentful from 'contentful'
import { dateConverter } from '@/utils.js'
import { useHead } from '@vueuse/head'
import articles from '@/seo/articles.json'

export default {

	components: {
		ArticlePreview,
		ArticleLink,
	},

	setup() {
		const route = useRoute()
		const store = useStore()

		const client = Contentful.createClient({
			space: 'sxsg65tutm19',
			accessToken: 'HMMSTPlxFlk94f-Y0QweBu61NlBG2gqzW8y8nxAQIB8'
		})

		onMounted(() => {
			getArticles()
		})

		watch(route, () => {
			getArticles()
		})
		
		useHead({
			title: 'Blog',
			meta: [
				{
					name: `description`,
					content: 'Blog',
				},
				{
					name: `robots`,
					content: 'noindex, nofollow',
				},
			],
		})

		function getArticles() {

			if ( route.params.cat_id === 'faq' ) {

				let seoArticles = []

				seoArticles = articles.map((item) => {
					let newItem = {}
					newItem.title = item.title
					newItem.previewImage = {
						url: ''
					}
					newItem.shortText = null
					newItem.author = null
					newItem.category = 'F.A.Q.'
					newItem.slug = item.url
					newItem.date = null
					return newItem
				})
				
				store.dispatch('setArticles', seoArticles)

			}
			else {

				let query = {
					content_type: 'blog',
					limit: 3,
				}
				if ( route.params.cat_id !== undefined ) {
					query['fields.category'] =  route.params.cat_id[0].toUpperCase() + route.params.cat_id.substr(1)
				}

				client.getEntries(query).then((res) => {

					let news = []

					news = res.items.map((item) => {
						let newItem = {}
						newItem.title = item.fields.title
						newItem.previewImage = getAsset(item.fields.previewImage.sys.id, res.includes.Asset)
						newItem.shortText = item.fields.shortText
						newItem.author = item.fields.author
						newItem.category = item.fields.category
						newItem.slug = '/blog/' + item.fields.slug
						newItem.date = dateConverter(item.fields.date, 1)
						return newItem
					})
					
					store.dispatch('setArticles', news)
				})

			}

		}

		function getAsset( id, assetsArr ) {

			let assetObj = assetsArr.filter((item) => {
				return id === item.sys.id
			})[0]

			return {
				url: assetObj.fields.file.url,
				title: assetObj.fields.title,
			}
		}

		function scrollToCategories(e) {
			setTimeout(() => {
				e.target.scrollIntoView({ block: 'start', behavior: 'smooth' })
			}, 150);
		}

		return {
			scrollToCategories,
		}
	},

	computed: {
		...mapGetters(['getFirstArticle', 'getRestArticles']),
	},

}
</script>



<style lang="scss" scoped>

.articles {
	margin: 0 auto;
	padding-top: 266px;
	padding-bottom: 240px;
	padding-left: 8.34%;
	padding-right: 8.34%;
	width: 100%;
	max-width: 1586px;

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
		text-align: left;
		font-size: 90px;
		line-height: 140%;

		@media screen and (max-width: 1900px) {
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

	&__main_block {
		display: flex;
		justify-content: space-between;
		margin-bottom: 240px;

		@media screen and (max-width: 1140px) {
			margin-bottom: 140px;
		}

		@media screen and (max-width: 768px) {
			flex-direction: column;
			margin-bottom: 100px;
		}
	}

	&__book {

	}

	&__book_icon {
		transform: scale(1.6) translateY(50px);

		@media screen and (max-width: 1900px) {
			transform: scale(1) translateY(0);
		}
	}

	&__categories {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 60px;
	}

	&__category_counter {
		position: relative;
		top: -15px;
		font-size: 16px;
		line-height: 140%;
		font-weight: 600;

		@media screen and (max-width: 768px) {
			top: -10px;
			font-size: 10px;
		}
	}


	&__preview_list {
		display: flex;
		flex-wrap: wrap;
	}

	&__all_articles_btn_wrapper {
		display: flex;
		justify-content: flex-end;
		margin-top: 40px;
	}
}

</style>