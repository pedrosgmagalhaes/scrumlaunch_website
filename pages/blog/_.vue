<template>
  <div class="seo">
    <div class="seo__meta">
      <div class="seo__category">{{ article.category }}</div>
      <div class="seo__date">Published on {{ article.date }}</div>
    </div>

    <h1 class="header-big">{{ article.title }}</h1>
    <div v-show="article" class="seo__body" v-html="article.fullText"></div>
    <ProgLangList
      v-show="article.slug === '/hire-developers'"
      class="prog_lang_list"
    />
  </div>
</template>

<script>
import articles from '@/seo/articles.json'
import ProgLangList from '@/components/hire-developers/ProgLangList.vue'

export default {
  components: {
    ProgLangList,
  },
  data() {
    return {
      article: [],
    }
  },

  watch: {
    $route() {
      if (this.$route.name === 'blog-slug') {
        this.getArticle()
      }
    },
  },

  mounted() {
    this.getArticle()
  },

  methods: {
    getArticle() {
      this.article = articles.filter(
        (item) => item.slug === this.$route.path
      )[0]

      if (this.article === undefined) {
        this.$route.push({ path: '/' })
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
    },
  },
}
</script>

<style lang="scss">
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

    h2 {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    h3 {
      margin-bottom: 21px;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 140%;
      color: #1e1f21;
    }

    p {
      margin-bottom: 23px;

      @media screen and (max-width: 1900px) {
        margin-bottom: 20px;
      }
    }

    img {
      display: block;
      max-width: 100%;
    }

    blockquote {
      margin-top: 40px;
      margin-bottom: 40px;
      padding-left: 212px;
      min-height: 127px;
      font-style: italic;
      font-weight: normal;
      font-size: 26px;
      line-height: 150%;
      background: url('@/assets/icons/quotes.svg') 0 0 no-repeat;
    }

    b {
      font-weight: bold;
    }

    i {
      font-style: italic;
    }

    ul {
      padding-left: 30px;
      list-style: initial;
    }

    ul p {
      margin-bottom: 0;
    }

    ul a {
      text-decoration: none;
    }

    a {
      color: currentColor;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.prog_lang_list {
  margin-top: 100px;

  .langs__item {
    text-align: left;
  }
}
</style>
