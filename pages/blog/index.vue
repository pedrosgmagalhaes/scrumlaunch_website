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

    <div v-if="articles[0]">
      <ArticlePreview :item="articles[0]" :first="true" />

      <div class="articles__preview_list">
        <ArticlePreview
          v-for="(item, index) in articles.slice(1)"
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
import { mapMutations } from 'vuex'
import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ArticlePreview from '@/components/articles/ArticlePreview'
import ArticleLink from '@/components/articles/ArticleLink'

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
    articles() {
      return this.$store.state.articles.articles.length
        ? this.$store.state.articles.articles
        : false
    },
  },

  mounted() {
    this.getArticles()
  },

  methods: {
    ...mapMutations({
      SET_ARTICLES: 'articles/SET_ARTICLES',
    }),

    scrollToCategories(e) {
      setTimeout(() => {
        e.target.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, 150)
    },

    getArticles() {
      const client = Contentful.createClient({
        space: 'psyys3eoga8f',
        accessToken: 'bOobZ65YNxX9q52-lWtWpmOmQZgdsjAR5sWkhJopKfg',
      })

      client.getEntries({ content_type: 'blog' }).then((res) => {
        const posts = res.items.map((el) => ({
          category: el.fields.category,
          date: el.fields.date,
          metaDescription: el.fields.metaDescription,
          metaTitle: el.fields.metaTitle,
          shortText: el.fields.shortText,
          title: el.fields.title,
          previewImage: {
            url: `https:${el.fields.previewImage.fields.file.url}`,
          },
          slug: el.fields.slug,
          text: documentToHtmlString(el.fields.ttt),
        }))

        this.$store.commit('articles/SET_ARTICLES', posts)
      })
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
