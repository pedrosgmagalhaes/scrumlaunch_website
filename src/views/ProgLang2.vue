<template>
    <div class="hire_developers">


        <div class="container section_1">
            <div class="flex aife">
                <h1 class="clr-fff">Hire <span class="clr-12e2b0">{{ dev_lang }} expert</span> in minutes</h1>
                <div class="text clr-fff">Hire {{ dev_lang }} developers that are <span class="marked">vetted, trained and managed</span> by Scrumlaunch. We place high-quality {{ dev_lang }} developers across all types of businesses from venture-backed startups to large corporations.</div>
            </div>

            <div class="btn_wrap">
                <router-link class="btn" to="/contact-us">hire {{ dev_lang }} developers</router-link>
            </div>
        </div>


        <div class="container section_2">

            <div class="animation">
				<vLottiePlayer
					name="scrumlaunchMobileAnim"
					loop
					width="100%"
					height="100%"
					:animationData="
						require('../assets/animation/scrumlaunch-mobile.json')
					"
				/>
			</div>

            <h2>Hire {{ dev_lang }}<br> Developers with Ease</h2>

            <div class="text">Scrumlaunch’s {{ dev_lang }} developers are highly skilled software engineers based around the world with deep expertise in full-stack development.</div>

            <div class="btn_wrap">
                <router-link class="btn" to="/contact-us">hire developers</router-link>
            </div>
        </div>


        <div class="container section_3">
            <h2 class="tac">how it works</h2>

            <div class="cards">

                <div class="card">
                    <div class="title">Step 1<div class="icon"><img src="/images/hire-developers/how_it_works__step_1.svg" alt=""></div></div>
                    <div class="subtitle">Book a Free Consulation</div>
                    <div class="text">We want to hear your {{ dev_lang }} needs firsthand to ensure we’re a good fit.</div>
                </div>

                <div class="card">
                    <div class="title">Step 2<div class="icon"><img src="/images/hire-developers/how_it_works__step_2.svg" alt=""></div></div>
                    <div class="subtitle">We Match Talent</div>
                    <div class="text">We  search our pool of hundreds of {{ dev_lang }} developers to identify potential fits for your project.</div>
                </div>

                <div class="card">
                    <div class="title">Step 3<div class="icon"><img src="/images/hire-developers/how_it_works__step_3.svg" alt=""></div></div>
                    <div class="subtitle">You Select {{ dev_lang }} Developers</div>
                    <div class="text">Effortlessly scale your {{ dev_lang }} development needs up and down</div>
                </div>

                <div class="card">
                    <div class="title">Step 4<div class="icon"><img src="/images/hire-developers/how_it_works__step_4.svg" alt=""></div></div>
                    <div class="subtitle">We Start Building</div>
                    <div class="text">We vet all {{ dev_lang }} developers and employ rigorous tests to assess development and English-language competency.</div>
                </div>

            </div>

            <div class="btn_wrap">
                <router-link class="btn" to="/contact-us">hire {{ dev_lang }} developers</router-link>
            </div>
        </div>


        <div class="container section_4">

            <h2>About our {{ dev_lang }} Developers</h2>

            <div class="flex jcfe">
                <div class="text">Hiring {{ dev_lang }} developers can be tricky - Scrumlaunch makes it easy. Your website is the lifeblood of your business. Our team has built and sold multiple companies, and we understand first-hand how important competent software engineers are. That’s why at Scrumlaunch, we vet all {{ dev_lang }} developers and employ rigorous tests to assess development and English-language competency. All clients are assigned a dedicated account manager available at all times to ensure you are meeting your {{ dev_lang }} goals in a timely and cost-effective manner.</div>
            </div>

            <div class="developers">

                <div class="developers__item">
                    <div class="developers__item__img">
                        <img src="/images/hire-developers/tmp_developer_photo_1.jpg" alt="tmp_developer_photo_1">
                    </div>
                    <div class="developers__item__info">
                        <div class="developers__item__name">Jonas Karakoro</div>
                        <ul class="developers__item__skills">
                            <li>{{ dev_lang }} Developer</li>
                            <li>7 years of experience</li>
                        </ul>
                        <div class="developers__item__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magnis sit sed libero. Dolor gravida aliquet platea vitae in.</div>
                        <div class="developers__item__tags">
                            <span>{{ dev_lang }}</span>
                            <span>AWS S3</span>
                            <span>Docker</span>
                            <span>Pandas</span>
                        </div>
                        <div class="developers__item__links">
                            <a href="#"><img src="/images/linkedin-icon.svg" alt=""></a>
                            <a href="#"><img src="/images/right_arr.svg" alt=""></a>
                        </div>
                    </div>
                </div>

                <div class="developers__item">
                    <div class="developers__item__img">
                        <img src="/images/hire-developers/tmp_developer_photo_2.jpg" alt="tmp_developer_photo_2">
                    </div>
                    <div class="developers__item__info">
                        <div class="developers__item__name">Jimmy Blue</div>
                        <ul class="developers__item__skills">
                            <li>{{ dev_lang }} Developer</li>
                            <li>5 years of experience</li>
                        </ul>
                        <div class="developers__item__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magnis sit sed libero. Dolor gravida aliquet platea vitae in.</div>
                        <div class="developers__item__tags">
                            <span>{{ dev_lang }}</span>
                            <span>AWS S3</span>
                            <span>Docker</span>
                            <span>Pandas</span>
                        </div>
                        <div class="developers__item__links">
                            <a href="#"><img src="/images/linkedin-icon.svg" alt=""></a>
                            <a href="#"><img src="/images/right_arr.svg" alt=""></a>
                        </div>
                    </div>
                </div>

                <div class="developers__item">
                    <div class="developers__item__img">
                        <img src="/images/hire-developers/tmp_developer_photo_3.jpg" alt="tmp_developer_photo_3">
                    </div>
                    <div class="developers__item__info">
                        <div class="developers__item__name">Vincent Sean</div>
                        <ul class="developers__item__skills">
                            <li>{{ dev_lang }} Developer</li>
                            <li>10 years of experience</li>
                        </ul>
                        <div class="developers__item__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magnis sit sed libero. Dolor gravida aliquet platea vitae in.</div>
                        <div class="developers__item__tags">
                            <span>{{ dev_lang }}</span>
                            <span>AWS S3</span>
                            <span>Docker</span>
                            <span>Pandas</span>
                        </div>
                        <div class="developers__item__links">
                            <a href="#"><img src="/images/linkedin-icon.svg" alt=""></a>
                            <a href="#"><img src="/images/right_arr.svg" alt=""></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>


        <div class="container section_5">

            <h2>frequently asked questions</h2>

            <div class="faq">

                <div class="faq__item">
                    <div class="faq__item__q">Why should I use Scrumlaunch to Hire {{ dev_lang }} Developers?</div>
                    <div class="faq__item__img"><img src="/images/hire-developers/faq_1.svg" alt="faq_1"></div>
                    <div class="faq__item__a">At Scrumlaunch, we hire and train every member of our team individually. All dedicated {{ dev_lang }} developers (and any developer or designer, for that matter) undergo in-depth assessment and training to test for skill level, adaptability, creativity, system architecture, and other key components of software development. Our {{ dev_lang }} experts have worked on a range of projects from video analysis and machine learning to custom marketplaces. </div>
                </div>

                <div class="faq__item">
                    <div class="faq__item__q">How Quickly can I hire {{ dev_lang }} developers through Scrumlaunch?</div>
                    <div class="faq__item__img"><img src="/images/hire-developers/faq_2.svg" alt="faq_2"></div>
                    <div class="faq__item__a">Many of our clients have been up and running in under 24 hours. Scrumlaunch has the capacity to scale instantly and on-demand. If you already know what you’re building, then book a free consultation with our team to explain your {{ dev_lang }} requirements. We’ll match you with {{ dev_lang }} experts and a project manager on our team in a matter of hours.</div>
                </div>

                <div class="faq__item">
                    <div class="faq__item__q">Is Scrumlaunch well-known for {{ dev_lang }} development?</div>
                    <div class="faq__item__img"><img src="/images/hire-developers/faq_3.svg" alt="faq_3"></div>
                    <div class="faq__item__a">{{ dev_lang }} is one of our primary development languages. Our team has a collective 600 years of development experience, and we’ve built incredibly complex projects in the language</div>
                </div>

                <div class="faq__item">
                    <div class="faq__item__q">How Effective is Offshore or Outsourced {{ dev_lang }} development?</div>
                    <div class="faq__item__img"><img src="/images/hire-developers/faq_4.svg" alt="faq_4"></div>
                    <div class="faq__item__a">Offshore {{ dev_lang }} development is an incredibly cost-effecitve and efficient way to stand up new projects or build out existing ones. However, outsourcing {{ dev_lang }} development offshore should be done with a reputable firm that has a proven track record of success. Read our guide on outsourcing web development here.</div>
                </div>

            </div>

        </div>


        <div class="container section_6">

            <h2 class="tar">looking for another<br> language or skill?</h2>

            <div class="langs">

                <div class="langs__item" v-for="(lang_item, index) in all_langs" :key="index"><router-link :to="'/hire-developers/' + lang_item.url">{{ lang_item.lang }}</router-link></div>

            </div>

            <div class="btn_wrap">
                <button class="btn" @click="getLangsList()">view all</button>
            </div>

        </div>


        <div class="container section_7">

            <div class="flex">

                <div class="image"><img src="/images/hire-developers/rocket.svg" alt=""></div>
                <div class="text">
                    <h2 class="clr-fff">about <span class="clr-12e2b0">scrumlaunch</span></h2>
                    <div class="clr-fff">Scrumlaunch is home to <span class="marked">top developers, designers, engineers,</span> coders, architects, and consultants. Companies choose to work with Scrumlaunch because our team has succeeded with all types of companies and projects, supporting business owners from idea to acquisition.</div>
                </div>

            </div>

        </div>


    </div>
</template>



<script>
import dev_langs from '@/seo/development_languages.json'

export default {

    mounted() {
        this.getDevLang()
        this.getLangsList(18)
    },

    data: () => ({
        dev_lang: null,
        all_langs: null
    }),

    methods: {

        getDevLang() {
            this.dev_lang = dev_langs.filter((item) => {
                return this.$route.params.prog_lang === item.url
            })[0].lang
        },

        getLangsList(num) {
            this.all_langs = num === undefined ? dev_langs : dev_langs.slice(0, num)
        },

    },

    watch: {

        $route: function() {
            if ( this.$route.name === "ProgLang" ) {
                this.getDevLang()
                this.getLangsList(18)
			}
        },

    },
    
}
</script>



<style lang="scss" scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hire_developers {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 150%;
    text-align: left;

    @media screen and (max-width: 1439px) {
        font-size: 26px;
    }
}

.section_1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 120px;
    min-height: 1009px;
    background-color: #1E1F21;

    @media screen and (max-width: 1439px) {
        min-height: 960px;
    }

    h1 {
        max-width: 630px;
    }

    .text {
        flex: 1;
        padding-left: 120px;
        padding-bottom: 30px;

        @media screen and (max-width: 1439px) {
            padding-left: 82px;
        }
    }
    
}

.section_2 {
    position: relative;
    padding-top: 240px;
    min-height: 1009px;
    overflow: hidden;

    .animation {
        position: absolute;
        top: -80px;
        right: 0;
        width: 900px;
        transform: rotate(60deg);
        z-index: -1;
    }
    
    h2 {
        margin-bottom: 40px;
    }

    .text {
        max-width: 1120px;

        @media screen and (max-width: 1439px) {
            max-width: 712px;
        }
    }
    
}

.section_3 {
    position: relative;
    padding-top: 80px;
    min-height: 1009px;
    
    h2 {
        margin-bottom: 60px;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 1200px;
    }

    .card {
        margin-bottom: 20px;
        padding: 60px;
        max-width: 590px;
        background: #FFFFFF;
        border: 1px solid #1E1F21;

        &:nth-child(odd) {
            margin-right: 20px;
        }

        .title {
            margin-bottom: 28px;
            position: relative;
            font-style: normal;
            font-weight: 900;
            font-size: 48px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #fff;
            -webkit-text-stroke: 1px #1E1F21;
        }

        .icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 70px;
            height: 70px;
            transform: translateY(-25%);
        }

        .subtitle {
            margin-bottom: 20px;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 140%;
            color: #1E1F21;
        }

        .text {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            color: #1E1F21;
        }
        


    }

    .btn_wrap {
        margin-top: 60px;
    }
    
}

.section_4 {
    position: relative;
    padding-top: 240px;
    min-height: 1009px;
    
    h2 {
        margin-bottom: 60px;

        @media screen and (max-width: 1023px) {
            
        }
    }

    .text {
        margin-bottom: 80px;
        max-width: 1000px;
    }

    .developers {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;

        &__item{
            max-width: 386px;
            border: 1px solid #1E1F21;

            &__img {
                img {
                    display: block;
                    max-width: 100%;
                }
            }

            &__info {
                padding-top: 26px;
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 30px;
            }

            &__name {
                margin-bottom: 10px;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 140%;
                color: #1E1F21;
            }

            &__skills {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 20px;

                li {
                    position: relative;
                    margin-right: 30px;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 150%;
                    color: #1E1F21;

                    &:after {
                        content: '';
                        position: absolute;
                        top: 8px;
                        right: -19px;
                        display: block;
                        width: 8px;
                        height: 8px;
                        background: #1E1F21;
                        border-radius: 50%;
                    }

                    &:last-child {
                        margin-right: 0;

                        &:after {
                            display: none;
                        }
                    }
                }
            }

            &__desc {
                margin-bottom: 16px;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 150%;
                color: #1E1F21;
            }

            &__tags {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 12px;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 150%;
                color: #1E1F21;

                span {
                    margin-right: 12px;
                    margin-bottom: 12px;
                    padding: 4px 10px;
                    border: 1px solid #1E1F21;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            &__links {
                display: flex;
                justify-content: space-between;

                img {
                    display: block;
                }
            }
        }

    }
    
}

.section_5 {
    position: relative;
    padding-top: 240px;
    min-height: 1009px;
    
    h2 {
        margin-bottom: 60px;
    }

    .faq {

        &__item {
            display: flex;
            padding-top: 50px;
            padding-bottom: 50px;
            border-top: 1px solid #1E1F21;

            &__q {
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 140%;
                color: #1E1F21;
            }

            &__img {
                margin-left: 60px;
                margin-right: 60px;

                img {
                    display: block;
                }
            }

            &__a {
                max-width: 1000px;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 150%;
                color: #1E1F21;
            }
        }
    }
    
}

.section_6 {
    position: relative;
    padding-top: 240px;
    padding-bottom: 240px;
    min-height: 1009px;
    
    h2 {
        margin-bottom: 80px;
    }

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
    
}

.section_7 {
    display: flex;
    align-items: center;
    margin-bottom: 240px;
    min-height: 656px;
    background-color: #1E1F21;

    .image {
        margin-right: 60px;

        img {
            display: block;
        }
    }

    h2 {
        margin-bottom: 40px;
    }
    
}

h1 {
    font-weight: 900;
    font-size: 90px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @media screen and (max-width: 1439px) {
        font-size: 56px;
    }
}

h2 {
    @extend h1;
}

h3 {

}

.container {
    padding-left: 8.34%;
    padding-right: 8.34%;
}

.marked {
    padding-left: 5px;
    padding-right: 5px;
    color: #1E1F21;
    background-color: #12E2B0;
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

.flex {
    display: flex;
}

.jcc {
    justify-content: center;
}

.jcfe {
    justify-content: flex-end;
}

.aife {
    align-items: flex-end;
}

.aic {
    align-items: center;
}

.bgc-12e2b0 {
    background-color: #12E2B0;
}

.clr-fff {
    color: #fff;
}

.clr-12e2b0 {
    color: #12E2B0;
}

.clr-1e1f21 {
    color: #1E1F21;
}

.tal {
    text-align: left;
}

.tac {
    text-align: center;
}

.tar {
    text-align: right;
}

</style>