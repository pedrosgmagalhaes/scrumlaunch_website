<template>
    <div class="hire_developers">

        <div v-if="!is_city">
            <div class="container section_1">
                <div class="flex aife">
                    <h1 class="clr-fff">Hire Software Developers in <span class="clr-12e2b0"> {{ location.state_name }} </span></h1>
                    <div class="text clr-fff">
                        <p>Scrumlaunch is a U.S.-based website design development firm, with <span class="marked">operations in {{ location.state_name }}</span>, specializing in web-based development, mobile applications, UI/UX design and prototyping, QA automation, and more.</p>
                        <p>Finding qualified software development <span class="marked">agencies in {{ location.state_name }}</span> can be difficult for a variety of reasons. For example, you may require a very specific skillset for your software needs or you may need to increase and decrease staffing quickly. Scrumlaunch works with all types of <span class="marked">clients in {{ location.state_name }}</span> and across the U.S. and succeeds due to our highly selective hiring and recruitment process.</p>
                        <p>Each of our <span class="marked">{{ location.state_name }} clients</span> has a dedicated project manager responsible for your success.</p>
                    </div>
                </div>

                <div class="btn_wrap">
                    <router-link class="btn" to="/contact-us">hire  developers</router-link>
                </div>
            </div>

            <div class="container section_5">

                <h2>Frequently asked questions</h2>

                <div class="faq">

                    <div class="faq__item">
                        <div class="faq__item__q">What makes a good {{ location.state_name }} software development company?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_1.svg" alt="faq_1"></div>
                        <div class="faq__item__a">Most software companies in {{ location.state_name }} suffer from scale. For example, providing mobile app development, NodeJS or Ruby development, and designs services can take a large toll on a small software company. Scrumlaunch has more than 200 highly skilled developers specializing in nearly three hundred different languages. Additionally, we have worked with all types of companies from publicly traded corporations to venture-backed startups. We know what it takes to turn your idea into a reality.</div>
                    </div>

                    <div class="faq__item">
                        <div class="faq__item__q">Do you offer mobile app development for {{ location.state_name }} clients?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_2.svg" alt="faq_2"></div>
                        <div class="faq__item__a">Yes! We specialize in both iOS and Android native mobile app development. Additionally, we offer software development services in hundreds of other computer programming languages and specialities. Schedule a free consultation with us to learn more about our capabilities.</div>
                    </div>

                    <div class="faq__item">
                        <div class="faq__item__q">Is your entire company based in {{ location.state_name }}?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_3.svg" alt="faq_3"></div>
                        <div class="faq__item__a">Our primary headquarters is Austin, TX, with larger remote offices in Los Angeles and Washington. At any given time, we may have a handful of team members in {{ location.state_name }}. However, even prior to the pandemic we had sophisticated remote capabilities set up, which allows us to tap into our global talent pool to provide high-quality yet affordable software development to {{ location.state_name }} companies.</div>
                    </div>

                </div>

            </div>
        </div>


        <div v-if="is_city">
            <div class="container section_1">
                <div class="flex aife">
                    <h1 class="clr-fff">Hire Software Developers in <span class="clr-12e2b0">{{ location.city }}, {{ location.state_name }}</span></h1>
                    <div class="text clr-fff">
                        <p>Scrumlaunch is a U.S.-based website design development firm, with <span class="marked">operations in {{ location.city }}</span>, specializing in web-based development, mobile applications, UI/UX design and prototyping, QA automation, and more.</p>
                        <p>Finding qualified software development <span class="marked">agencies in {{ location.city }}</span> can be difficult for a variety of reasons. For example, you may require a very specific skillset for your software needs or you may need to increase and decrease staffing quickly. Scrumlaunch works with all types of clients in across the U.S. and can easily cater to <span class="marked">the needs of {{ location.city }}-based business</span>. We succeed due to our highly selective hiring and recruitment process.</p>
                        <p>Each of our clients has a dedicated project manager responsible for your success.</p>
                    </div>
                </div>

                <div class="btn_wrap">
                    <router-link class="btn" to="/contact-us">hire  developers</router-link>
                </div>
            </div>

            <div class="container section_5">

                <h2>Frequently asked questions</h2>

                <div class="faq">

                    <div class="faq__item">
                        <div class="faq__item__q">What makes a good {{ location.city }} software development company?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_1.svg" alt="faq_1"></div>
                        <div class="faq__item__a">Most software companies in {{ location.city }} and {{ location.state_name }} suffer from scale. For example, providing mobile app development, NodeJS or Ruby development, and designs services can take a large toll on a small software company. Scrumlaunch has more than 200 highly skilled developers specializing in nearly three hundred different languages. Additionally, we have worked with all types of companies from publicly traded corporations to venture-backed startups. We know what it takes to turn your idea into a reality.</div>
                    </div>

                    <div class="faq__item">
                        <div class="faq__item__q">Do you offer mobile app development for {{ location.city }} clients?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_2.svg" alt="faq_2"></div>
                        <div class="faq__item__a">Yes! We specialize in both iOS and Android native mobile app development. Additionally, we offer software development services in hundreds of other computer programming languages and specialities. Schedule a free consultation with us to learn more about our capabilities.</div>
                    </div>

                    <div class="faq__item">
                        <div class="faq__item__q">Is your entire company based in {{ location.city }}?</div>
                        <div class="faq__item__img"><img src="/images/hire-developers/faq_3.svg" alt="faq_3"></div>
                        <div class="faq__item__a">Our primary headquarters is Austin, TX, with larger remote offices in Los Angeles and Washington. At any given time, we may have a handful of team members in {{ location.state_name }}. However, even prior to the pandemic we had sophisticated remote capabilities set up, which allows us to tap into our global talent pool to provide high-quality yet affordable software development to {{ location.state_name }} companies.</div>
                    </div>

                </div>

            </div>

        </div>


    </div>
</template>



<script>
import locations from '@/seo/locations.json'

import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

export default {

    setup() {
        const router = useRouter()
        const route = useRoute()

        let location = ref({})
        let is_city = ref(null)

        function IsCity() {
            return route.params.city_slug !== undefined ? true : false
        }

        function getLocation() {

            let location_obj = null

            if ( route.params.city_slug === undefined ) {
                location_obj = locations.filter((item) => {
                    return route.params.state_slug === item.state_slug
                })[0]

                if ( location_obj === undefined ) {
                    router.push({ path: '/' })
                }
            }
            else {

                location_obj = locations.filter((item) => {
                    return route.params.state_slug === item.state_slug
                })[0]

                if ( location_obj === undefined ) {
                    router.push({ path: '/' })
                }
                else {
                    for (const key in location_obj.state_cities) {
                        if ( route.params.city_slug === key) {
                            location_obj['city'] = location_obj.state_cities[key]
                        }
                    }

                    if ( location_obj.city === undefined ) {
                        router.push({ path: '/' })
                    }
                }

            }

            return location_obj
        }

        onMounted(() => {
			location.value = getLocation()
            is_city.value = IsCity()
		})

        watch(() => route.path, () => {
			if ( route.name === "LocationState" ) {
				location.value = getLocation()
                is_city.value = IsCity()
			}
		})

        useHead({
			title: computed(() => 'Hire state_name Developers - Top Rated |Scrumlaunch'),
			meta: [
				{
					name: `description`,
					content: computed(() => 'Hire and scale state_name developers with the best-in-class website development and design consulting firm. Book a free consultation now.'),
				},
				{
					name: `robots`,
					content: 'noindex, nofollow',
				},
			],
		})

        return {
            location,
            is_city,
        }

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

.section_5 {
    position: relative;
    padding-top: 240px;
    padding-bottom: 240px;
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
            justify-content: space-evenly;

            &__q {
                max-width: 20%;
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
    padding-left: 8.32%;
    padding-right: 8.32%;
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
    padding: 16px 40px;
    min-width: 360px;
    height: 82px;
    width: auto;
    border-radius: 54px;
    font-size: 21.6867px;
    line-height: 150%;
    text-align: center;

    @media screen and (max-width: 1899px) {
        font-size: 18px;
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