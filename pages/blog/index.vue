<template>
  <div class="articles">
    <div class="articles__main_block">
      <h1 class="header-big">
        Get more of our<br />
        ideas, insights,<br />
        and guides
      </h1>

      <div class="articles__book">
        <img
          :src="require('@/assets/icons/book.svg')"
          class="articles__book_icon"
        />
      </div>
    </div>

    <ul class="articles__categories" @click="scrollToCategories">
      <ArticleLink to="/blog"
        >All Articles
        <!-- <span class="articles__category_counter">124</span> --></ArticleLink
      >
      <!-- <ArticleLink to="/blog/category/guides">Guides</ArticleLink>
			<ArticleLink to="/blog/category/insights">Insights</ArticleLink>
			<ArticleLink to="/blog/category/development">Development</ArticleLink>
			<ArticleLink to="/blog/category/enterpreunership">Enterpreunership</ArticleLink>
			<ArticleLink to="/blog/category/faq">F.A.Q.</ArticleLink> -->
    </ul>

    <div v-if="this['articles/getFirstArticle']">
      <ArticlePreview :item="this['articles/getFirstArticle']" :first="true" />

      <div class="articles__preview_list">
        <ArticlePreview
          v-for="(item, index) in this['articles/getRestArticles']"
          :key="index"
          :item="item"
        />
      </div>

      <div class="articles__all_articles_btn_wrapper">
        <NuxtLink class="btn" to="/blog">View all</NuxtLink>
      </div>
    </div>

    <div v-else>
      <p>There are no articles in this section</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as Contentful from 'contentful'
import ArticlePreview from '@/components/articles/ArticlePreview'
import ArticleLink from '@/components/articles/ArticleLink'
import { dateConverter } from '@/utils.js'
import articles from '@/seo/articles.json'

export default {
  components: {
    ArticlePreview,
    ArticleLink,
  },

  head: {
    title: 'Blog',
    meta: [
      {
        name: 'description',
        content: 'Blog',
      },
      {
        name: `robots`,
        content: 'noindex, nofollow',
      },
    ],
  },

  computed: {
    ...mapGetters(['articles/getFirstArticle', 'articles/getRestArticles']),
  },

  watch: {
    $route() {
      this.getArticles()
    },
  },

  mounted() {
    this.getArticles()
  },

  methods: {
    scrollToCategories(e) {
      setTimeout(() => {
        e.target.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, 150)
    },

    getAsset(id, assetsArr) {
      const assetObj = assetsArr.filter((item) => {
        return id === item.sys.id
      })[0]

      return {
        url: assetObj.fields.file.url,
        title: assetObj.fields.title,
      }
    },

    getArticles() {
      const client = Contentful.createClient({
        space: 'sxsg65tutm19',
        accessToken: 'HMMSTPlxFlk94f-Y0QweBu61NlBG2gqzW8y8nxAQIB8',
      })

      if (this.$route.params.cat_id === 'faq') {
        let seoArticles = []

        seoArticles = articles.map((item) => {
          const newItem = {}
          newItem.title = item.title
          newItem.previewImage = {
            url: '',
          }
          newItem.shortText = null
          newItem.author = null
          newItem.category = 'F.A.Q.'
          newItem.slug = item.url
          newItem.date = null
          return newItem
        })

        this.$store.dispatch('setArticles', seoArticles)
      } else {
        const query = {
          content_type: 'blog',
          limit: 9,
        }
        if (this.$route.params.cat_id !== undefined) {
          query['fields.category'] =
            this.$route.params.cat_id[0].toUpperCase() +
            this.$route.params.cat_id.substr(1)
        }

        client.getEntries(query).then((res) => {
          let news = []

          news = res.items.map((item) => {
            const newItem = {}
            newItem.title = item.fields.title
            newItem.previewImage = this.getAsset(
              item.fields.previewImage.sys.id,
              res.includes.Asset
            )
            newItem.shortText = item.fields.shortText
            newItem.author = item.fields.author
            newItem.category = item.fields.category
            newItem.slug = '/blog/' + item.fields.slug
            newItem.date = dateConverter(item.fields.date, 1)
            return newItem
          })

          this.$store.dispatch('articles/setArticles', news.concat(articles))
        })
      }
    },
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
