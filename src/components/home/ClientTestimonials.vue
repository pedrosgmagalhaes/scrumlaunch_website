<template>

    <div class="client_testimonials">

        <div class="container">

            <div class="header-1">Client Testimonials</div>

            <div class="client_testimonials__testimonials_section">

                <div class="client_testimonials__testimonials_pencil"></div>

                <Swiper
                    v-if="window_width > 425"
                    :slides-per-view="1"
                    :space-between="50"
                    :modules="modules"
                    :navigation="{
                        prevEl: '.client_testimonials__testimonials_nav_prev',
                        nextEl: '.client_testimonials__testimonials_nav_next',
                    }"
                >
                    <SwiperSlide class="client_testimonials__testimonials_items" v-for="(item, i) in 3" :key="i">

                        <div class="client_testimonials__testimonials_item">
                            <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/gipper.png" alt="gipper"></div>
                            <div class="client_testimonials__testimonials_item__text">“I have been working with ScrumLaunch for the past 5 years since even before my product was launched.  Since then, we’ve built a business that supports thousands of customers and recently raised venture capital funding.”</div>
                            <div class="flex jcsb">
                                <div class="client_testimonials__testimonials_item__person">– Matthew Glick, CEO</div>
                                <div class="client_testimonials__testimonials_item__site">www.gogipper.com</div>
                            </div>
                        </div>

                        <div class="client_testimonials__testimonials_item">
                            <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/heli.png" alt="heli"></div>
                            <div class="client_testimonials__testimonials_item__text">“ScrumLaunch has been an amazing software partner.  After a bad experience with a different team a few years ago, we started working with ScrumLaunch from a personal referral.  Their developers are really talented and work very efficiently.  They care about our business success and I would recommend working with them to anyone.”</div>
                            <div class="flex jcsb">
                                <div class="client_testimonials__testimonials_item__person">– Andy Culp, CEO</div>
                                <div class="client_testimonials__testimonials_item__site">www.heli.life</div>
                            </div>
                        </div>

                        <div class="client_testimonials__testimonials_item">
                            <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/campusreel.png" alt="campusreel"></div>
                            <div class="client_testimonials__testimonials_item__text">“I have been working with ScrumLaunch for the past 5 years since even before my product was launched.  Since then, we’ve built a business that supports thousands of customers and recently raised venture capital funding.”</div>
                            <div class="flex jcsb">
                                <div class="client_testimonials__testimonials_item__person">– Rob Carroll</div>
                                <div class="client_testimonials__testimonials_item__site">www.campusreel.org</div>
                            </div>
                        </div>

                        <div class="client_testimonials__testimonials_item">
                            <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/vesta.png" alt="vesta"></div>
                            <div class="client_testimonials__testimonials_item__text">“ScrumLaunch has been an amazing software partner.  After a bad experience with a different team a few years ago, we started working with ScrumLaunch from a personal referral.  Their developers are really talented and work very efficiently.  They care about our business success and I would recommend working with them to anyone.”</div>
                            <div class="flex jcsb">
                                <div class="client_testimonials__testimonials_item__person">– Matthew Glick, CEO</div>
                                <div class="client_testimonials__testimonials_item__site">www.vestahome.com</div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>

                <Swiper
                    v-if="window_width <= 425"
                    :slides-per-view="1"
                    :space-between="50"
                    :modules="modules"
                    :navigation="{
                        prevEl: '.client_testimonials__testimonials_nav_prev',
                        nextEl: '.client_testimonials__testimonials_nav_next',
                    }"
                    class="client_testimonials__testimonials_items"
                >
                    <SwiperSlide class="client_testimonials__testimonials_item">
                        <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/gipper.png" alt="gipper"></div>
                        <div class="client_testimonials__testimonials_item__text">“I have been working with ScrumLaunch for the past 5 years since even before my product was launched.  Since then, we’ve built a business that supports thousands of customers and recently raised venture capital funding.”</div>
                        <div class="flex jcsb">
                            <div class="client_testimonials__testimonials_item__person">– Matthew Glick, CEO</div>
                            <div class="client_testimonials__testimonials_item__site">www.gogipper.com</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide class="client_testimonials__testimonials_item">
                        <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/heli.png" alt="heli"></div>
                        <div class="client_testimonials__testimonials_item__text">“ScrumLaunch has been an amazing software partner.  After a bad experience with a different team a few years ago, we started working with ScrumLaunch from a personal referral.  Their developers are really talented and work very efficiently.  They care about our business success and I would recommend working with them to anyone.”</div>
                        <div class="flex jcsb">
                            <div class="client_testimonials__testimonials_item__person">– Andy Culp, CEO</div>
                            <div class="client_testimonials__testimonials_item__site">www.heli.life</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide class="client_testimonials__testimonials_item">
                        <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/campusreel.png" alt="campusreel"></div>
                        <div class="client_testimonials__testimonials_item__text">“I have been working with ScrumLaunch for the past 5 years since even before my product was launched.  Since then, we’ve built a business that supports thousands of customers and recently raised venture capital funding.”</div>
                        <div class="flex jcsb">
                            <div class="client_testimonials__testimonials_item__person">– Rob Carroll</div>
                            <div class="client_testimonials__testimonials_item__site">www.campusreel.org</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide class="client_testimonials__testimonials_item">
                        <div class="client_testimonials__testimonials_item_logo"><img src="/images/home/client_testimonials/vesta.png" alt="vesta"></div>
                        <div class="client_testimonials__testimonials_item__text">“ScrumLaunch has been an amazing software partner.  After a bad experience with a different team a few years ago, we started working with ScrumLaunch from a personal referral.  Their developers are really talented and work very efficiently.  They care about our business success and I would recommend working with them to anyone.”</div>
                        <div class="flex jcsb">
                            <div class="client_testimonials__testimonials_item__person">– Matthew Glick, CEO</div>
                            <div class="client_testimonials__testimonials_item__site">www.vestahome.com</div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="client_testimonials__testimonials_nav">
                    <div class="client_testimonials__testimonials_nav_prev"></div>
                    <div class="client_testimonials__testimonials_nav_next"></div>
                </div>

            </div>

        </div>

    </div>

</template>



<script>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.min.css';

export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    created () {
        this.window_width = window.outerWidth
    },

    data() {
        return {
            window_width: null,
            modules: [Navigation],
        }
    },

}
</script>



<style lang="scss" scoped>

.container {
    margin: 0 auto;
    max-width: 1600px;

    @media screen and (max-width: 1440px) {
        max-width: 1200px;
    }

    @media screen and (max-width: 768px) {
        max-width: 708px;
    }
}

.header-1 {
    margin-bottom: 120px;
    font-style: normal;
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
    color: #fff;

    @media screen and (max-width: 1440px) {
        margin-bottom: 80px;
        font-size: 56px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
        max-width: 500px;
        font-size: 48px;
    }

    @media screen and (max-width: 425px) {
        margin-bottom: 40px;
        max-width: 250px;
        font-size: 24px;
    }
}

.client_testimonials {
    padding-top: 300px;
    padding-bottom: 300px;
    padding-left: 30px;
    padding-right: 30px;
    background: #1E1F21;
    text-align: left;

    @media screen and (max-width: 1440px) {
        padding-top: 240px;
        padding-bottom: 240px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 140px;
        padding-bottom: 140px;
    }

    @media screen and (max-width: 425px) {
        padding-top: 80px;
        padding-bottom: 80px;
        padding-left: 20px;
        padding-right: 20px;
    }

    & * {
        box-sizing: border-box;
    }

    &__testimonials_section {
        position: relative;
    }

    &__testimonials_pencil {
        position: absolute;
        top: -416px;
        right: 0;
        width: 355px;
        height: 416px;
        background-image: url(/images/home/client_testimonials_1.svg);
        background-size: contain;

        @media screen and (max-width: 1440px) {
            top: -313px;
            width: 267px;
            height: 313px;
        }

        @media screen and (max-width: 768px) {
            top: -288px;
            width: 247px;
            height: 288px;
        }

        @media screen and (max-width: 425px) {
            top: -151px;
            width: 128px;
            height: 151px;
        }
    }

    &__testimonials_items {
        display: flex;
        flex-wrap: wrap;
    }

    &__testimonials_item {
        flex: 0 0 calc(50% - 30px);
        margin-bottom: 60px;
        padding: 60px 40px;
        background: #fff;

        &:nth-child(odd) {
            margin-right: 60px;

            @media screen and (max-width: 1440px) {
                margin-right: 40px;
            }

            @media screen and (max-width: 768px) {
                margin-right: 0;
            }
        }

        @media screen and (max-width: 1440px) {
            flex: 0 0 calc(50% - 20px);
            margin-bottom: 40px;
            padding: 40px 26px;
        }

        @media screen and (max-width: 768px) {
            flex: 0 0 100%;
            margin-bottom: 30px;
            padding: 40px 24px;
        }

        @media screen and (max-width: 425px) {
            padding: 26px 16px;
        }
    }

    &__testimonials_item_logo {
        margin-bottom: 40px;

        img {
            display: block;
            max-width: 100%;
        }

        @media screen and (max-width: 1440px) {
            margin-bottom: 26px;

            img {
                height: 40px;
            }
        }

        @media screen and (max-width: 768px) {
            margin-bottom: 24px;
        }

        @media screen and (max-width: 425px) {
            margin-bottom: 16px;

            img {
                height: 30px;
            }
        }
    }

    &__testimonials_item__text {
        margin-bottom: 40px;
        min-height: 234px;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 150%;

        @media screen and (max-width: 1440px) {
            min-height: 180px;
            font-size: 20px;
        }

        @media screen and (max-width: 768px) {
            min-height: 135px;
            font-size: 18px;
        }

        @media screen and (max-width: 425px) {
            min-height: 216px;
            font-size: 16px;
        }
    }

    &__testimonials_item__person {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;

        @media screen and (max-width: 1440px) {
            font-size: 18px;
        }

        @media screen and (max-width: 425px) {
            font-size: 16px;
        }
    }

    &__testimonials_item__site {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;

        @media screen and (max-width: 1440px) {
            font-size: 18px;
        }
    }

    &__testimonials_nav {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 250px;
    }

    &__testimonials_nav_prev {
        width: 95px;
        height: 37px;
        background-image: url(/images/home/arrow_active.svg);
        transform: scale(-1, 1);
        cursor: pointer;

        &.swiper-button-disabled {
            background-image: url(/images/home/arrow_not_active.svg);
            transform: scale(1, 1);
        }
    }

    &__testimonials_nav_next {
        width: 95px;
        height: 37px;
        background-image: url(/images/home/arrow_active.svg);
        cursor: pointer;

        &.swiper-button-disabled {
            background-image: url(/images/home/arrow_not_active.svg);
            transform: scale(-1, 1);
        }
    }
    
}

</style>