<template>
    <div>

        <div class="langs">
            <div class="langs__item" v-for="(lang_item, index) in all_langs" :key="index"><router-link :to="'/hire-developers/' + lang_item.url">{{ lang_item.lang }}</router-link></div>
        </div>

        <div class="btn_wrap">
            <button class="btn" @click="getLangsList()">view all</button>
        </div>

    </div>
</template>



<script>
import dev_langs from '@/seo/development_languages.json'

export default {

    props: {
        langs_num: {
            type: Number,
            default: 18
        },
    },

    mounted() {
        this.getLangsList(this.langs_num)
    },

    data: () => ({
        all_langs: null
    }),

    methods: {

        getLangsList(num) {
            this.all_langs = num === undefined ? dev_langs : dev_langs.slice(0, num)
        },

    },

    watch: {

        $route: function() {
            if ( this.$route.name === "ProgLang" ) {
                this.getLangsList(this.langs_num)
			}
        },

    },
    
}
</script>



<style lang="scss" scoped>
.langs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;


    &__item {
        flex: 0 0 33.33333%;
        margin-bottom: 40px;

        &:nth-child(3n) {
            max-width: 270px;
        }

        a {
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 140%;
            color: #1E1F21;
            text-decoration: none;

            &:hover {
                color: #12E2B0;
            }
        }
    }
}

.btn_wrap {
    display: flex;
    justify-content: center;
    margin-top: 80px;
}

.btn {
    text-align: center;

    @media screen and (min-width: 1900px) {
        padding: 16px;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        font-size: 21.6867px;
        line-height: 150%;
    }
}
</style>