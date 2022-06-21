<template>
    <div v-if="$route.meta.header !== 1">
        <div class="social_proof">
            <div class="social_proof__badge">
                <inline-svg :src="require('@/assets/icons/clutch_badge.svg')" @click="openClutch" />
            </div>
            <p class="social_proof__title">Join <span class="mark">100+ high growth startups</span> and Fortune 500 companies that are building software teams with ScrumLaunch.</p>
            <div class="social_proof__img-conatiner">
                <img src="/images/quiz/community_funded.svg" alt="community_funded" />
                <img src="/images/quiz/harvest.svg" alt="harvest" />
                <img src="/images/quiz/vesta.svg" alt="vesta" />
                <img src="/images/quiz/gipper.svg" alt="gipper" />
                <img src="/images/quiz/campusreel.svg" alt="campusreel" />
                <img src="/images/quiz/heli.svg" alt="heli" />
            </div>
        </div>
        <div class="footer home">
            <div class="footer--menu">
                <router-link :to="{ name: 'Home' }">Portfolio</router-link>
                <router-link :to="{ name: 'Services' }">Services</router-link>
                <router-link :to="{ name: 'Process' }">About us</router-link>
                <router-link :to="{ name: 'ReferralPartner' }">Referral Program</router-link>
                <router-link :to="{ name: 'Leadership' }">Leadership</router-link>
                <router-link :to="{ name: 'ContactUs' }">Contact</router-link>
            </div>
            <div class="footer--contact">
                <div v-if="false" class="footer--contact--item">
                    <p>Phone</p>
                    <a href="tel:+380989999999">+38 (098) 99 99 999</a>
                </div>

                <div class="footer--contact--item">
                    <p>Email</p>
                    <a href="mailto:charlie@scrumlaunch.com" style="color: #ff0000">charlie@scrumlaunch.com</a>
                </div>
            </div>
            <div class="footer--address">
                <p>Portland, OR<br />Los Angeles, CA<br />Ukraine<br />Brazil<br />Poland</p>
            </div>
            <SocialBlock class="footer--social" />
            <span>© ScrumLaunch 2021</span>
            <ScrollToTop />
        </div>
    </div>
</template>

<script>
import SocialBlock from "@/components/SocialBlock.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
    components: {
        SocialBlock,
        ScrollToTop,
    },

    methods: {
        openClutch() {
            window.open("https://clutch.co/profile/scrumlaunch#summary", "_blank");
        },
    },
};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    padding: 0px 20px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #1e1f21;
    position: relative;

    a,
    p {
        line-height: 150%;
        color: #1e1f21;
        text-decoration: none;
        font-family: "Proxima Nova";
        font-weight: bold;
        text-align: left;
    }

    p {
        font-size: 16px;
    }

    a {
        font-size: 18px;
    }

    span {
        font-family: "Proxima Nova";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        text-align: right;
        position: absolute;
        bottom: 40px;
        right: 20px;
    }

    &--menu {
        display: none;
    }

    &--contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        margin-right: 0;
        margin-bottom: 24px;

        &--item {
            text-align: left;
            margin-bottom: 16px;

            &:last-child {
                margin-bottom: 0px;
            }

            p {
                margin-bottom: 4px;
            }

            a {
                font-size: 18px;
            }
        }
    }

    &--address {
        margin-right: 0;
        margin-bottom: 40px;
    }

    &--social {
        position: relative;
        right: inherit;
        bottom: inherit;
    }
}

.social_proof {
    padding-bottom: 240px;
    padding-top: 240px;
    padding-left: 8.32%;
    padding-right: 8.32%;
    background: #1e1f21;
    margin-bottom: 240px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
        color: #fff;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        max-width: 712px;
        margin-top: 60px;
        margin-bottom: 94px;
    }

    .mark {
        background: #12e2b0;
        color: #1e1f21;
    }

    &__img-conatiner {
        display: flex;
        align-items: center;
        gap: 44px;
    }

    &__badge {
        cursor: pointer;
    }

    @media screen and (max-width: 1440px) {
        padding-bottom: 140px;
        padding-top: 140px;
        margin-bottom: 140px;

        &__title {
            font-size: 24px;
            margin-top: 40px;
            margin-bottom: 60px;
            max-width: 665px;
        }

        &__badge > svg {
            width: 230px;
            height: 62px;
        }

        &__img-conatiner {
            flex-wrap: wrap;
            gap: 36px;
            justify-content: space-around;
        }
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 80px;
        padding-top: 80px;
        margin-bottom: 80px;

        &__title {
            font-size: 18px;
            margin-bottom: 40px;
            max-width: initial;
        }

        &__img-conatiner {
            gap: 25px;
        }
    }
}

@media screen and (min-width: 768px) {
    .footer {
        width: 100%;
        height: 278px;
        padding: 0px 30px 120px;
        flex-direction: row;
        justify-content: space-between;

        a,
        p {
            font-size: 18px;
            line-height: 150%;
            color: #1e1f21;
            text-decoration: none;
            font-family: "Proxima Nova";
            font-weight: bold;
            text-align: left;
        }

        span {
            text-align: center;
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
        }

        &--menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
            margin-right: 10.17%;
        }

        &--contact {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
            margin-right: 7.83%;
            margin-bottom: 0;

            &--item {
                text-align: left;
                margin-bottom: 24px;

                p {
                    margin-bottom: 4px;
                }

                a {
                    font-size: 24px;
                }
            }
        }

        &--address {
            margin-right: 0;
            margin-bottom: 0;
        }

        &--social {
            position: absolute;
            right: 30px;
            bottom: 122px;
        }
    }
}

@media screen and (min-width: 1140px) {
    .footer {
        span {
            text-align: right;
            position: absolute;
            bottom: 124px;
            right: 34px;
            left: inherit;
            transform: none;
        }

        &--social {
            position: relative;
            right: inherit;
            bottom: inherit;
        }
    }
}

@media screen and (min-width: 1280px) {
    .footer {
        width: 100%;
        height: 278px;
        padding: 0px 8.34% 60px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: #1e1f21;
        position: relative;

        a,
        p {
            font-size: 18px;
            line-height: 150%;
            color: #1e1f21;
            text-decoration: none;
            font-family: "Proxima Nova";
            font-weight: bold;
            text-align: left;
        }

        span {
            text-align: right;
            position: absolute;
            bottom: 60px;
            right: 8.34%;
            left: inherit;
            transform: none;
        }

        &--menu {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
            margin-right: 14.17%;
        }

        &--contact {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
            margin-right: 7.83%;

            &--item {
                text-align: left;

                p {
                    margin-bottom: 4px;
                }

                a {
                    font-size: 24px;
                }
            }
        }

        &--address {
            margin-right: 11.92%;
        }

        &--social {
            position: relative;
            right: inherit;
            bottom: inherit;
        }
    }
}

@media screen and (min-width: 1900px) {
    .footer {
        &.home {
            .footer--menu {
                a {
                    font-size: 24px;
                    line-height: 150%;
                }
            }

            p {
                font-size: 24px;
                line-height: 150%;
            }

            span {
                font-size: 18px;
                line-height: 150%;
            }

            &--contact--item a {
                font-size: 32px;
                line-height: 150%;
            }
        }
    }
}
</style>
