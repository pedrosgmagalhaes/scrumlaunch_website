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


		<ul class="articles__categories">
			<li class="articles__category_item active"><router-link to="/blog" class="articles__category_item_a">All Articles <span class="articles__category_counter">124</span></router-link></li>
			<li class="articles__category_item"><router-link to="/blog/category/guides" class="articles__category_item_a">Guides</router-link></li>
			<li class="articles__category_item"><router-link to="/blog/category/insights" class="articles__category_item_a">Insights</router-link></li>
			<li class="articles__category_item"><router-link to="/blog/category/development" class="articles__category_item_a">Development</router-link></li>
			<li class="articles__category_item"><router-link to="/blog/category/enterpreunership" class="articles__category_item_a">Enterpreunership</router-link></li>
		</ul>


		<ArticlePreview :item="getFirstArticle" :first="true" />

		<div class="articles__preview_list">
			<ArticlePreview v-for="(item, index) in getRestArticles" :key="index" :item="item" />
		</div>

		<div class="articles__all_articles_btn_wrapper">
			<router-link class="btn" to="/blog">View all</router-link>
		</div>

	</div>
</template>



<script>
import { mapGetters } from 'vuex'
import ArticlePreview from '@/components/articles/ArticlePreview'
// import * as Contentful from 'contentful'
// import { dateConverter } from '@/utils.js'

export default {

	components: {
		ArticlePreview,
	},

	mounted() {

		// const client = Contentful.createClient({
		// 	space: 'sxsg65tutm19',
		// 	accessToken: 'HMMSTPlxFlk94f-Y0QweBu61NlBG2gqzW8y8nxAQIB8'
		// })

		// let query = {
		// 	content_type: 'blog',
		// 	limit: 3,
		// }

		// client.getEntries(query).then((res) => {
		// 	let news = []
		// 	news = res.items.map((item) => {
		// 		let newItem = {}
		// 		newItem.title = item.fields.title
		// 		newItem.previewImage = item.fields.previewImage
		// 		newItem.shortText = item.fields.shortText
		// 		newItem.author = item.fields.author
		// 		newItem.category = item.fields.category
		// 		newItem.slug = item.fields.slug
		// 		newItem.date = dateConverter(item.fields.date, 1)
		// 		return newItem
		// 	})
			
		// 	this.$store.dispatch('setArticles', news)
		// })
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

	&__category_item {
		margin-right: 64px;

		&.active {
			background: #12E2B0;
		}

		&:last-child {
			margin-right: 0;
		}
	}

	&__category_item_a {
		font-size: 30px;
		line-height: 140%;
		font-weight: 700;
		text-decoration: none;
		color: #1E1F21;

		@media screen and (max-width: 768px) {
			font-size: 18px;
		}
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