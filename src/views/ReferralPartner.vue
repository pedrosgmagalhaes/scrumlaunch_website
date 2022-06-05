<template>
    <div class="referral_partner">
        <div class="wrapper_inner">
            <div>
                <p class="title">Become a SCRUMLAUNCH<br /><span class="mark">Referral Partner</span></p>
                <p class="description">ScrumLaunch is rooted in producing quality work for our clients, which as a result, has led to 7+ years of organic growth powered by referrals. We believe in fostering a robust network of partners with generous payouts and terms.</p>
                <p class="description">Interested in joining our market-leading referral program? Shoot us a quick note and let’s chat.</p>
            </div>
            <div class="img pc">
                <inline-svg :src="require('@/assets/illustrations/illustration-faces.svg')" />
            </div>
        </div>
        <div class="btn-wrapper">
            <router-link :to="{ name: 'ContactUs' }" class="btn">talk to us</router-link>
        </div>
        <div class="img other">
            <inline-svg :src="require('@/assets/illustrations/illustration-faces.svg')" />
        </div>
    </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
    setup() {
        useHead({
            title: "Referral Partner",
        });
    },
};
</script>

<style lang="scss" scoped>
.referral_partner {
    padding-left: 8.32%;
    padding-right: 8.32%;
    padding-top: 266px;
    padding-bottom: 240px;

    @media screen and (max-width: 1440px) {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 200px;
        padding-bottom: 140px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 125px;
        padding-bottom: 80px;
    }
}

.wrapper_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media screen and (max-width: 1440px) {
        flex-direction: column;
    }
}

.btn-wrapper {
    display: flex;
    justify-content: center;

    .btn {
        padding: 28px 130px;
        border-radius: 54px;
        width: auto;
        height: auto;
        min-width: auto;

        @media screen and (max-width: 1440px) {
            padding: 20px 77px;
            font-size: 14px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 80px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
    }
}

.title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    color: #1e1f21;
    text-align: left;
    padding-bottom: 40px;

    .mark {
        background: #12e2b0;
        color: #1e1f21;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
        padding-bottom: 20px;
    }
}

.img {
    & > svg {
        width: 500px;
        height: 388px;

        @media screen and (max-width: 768px) {
            width: 375px;
            height: 291px;
        }

        @media screen and (max-width: 425px) {
            width: auto;
            height: auto;
            max-width: 100%;
        }
    }

    &.pc {
        display: block;

        @media screen and (max-width: 1440px) {
            display: none;
        }
    }

    &.other {
        display: none;

        @media screen and (max-width: 1440px) {
            display: block;
        }
    }
}

.description {
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    text-align: left;
    margin-bottom: 20px;
    max-width: 710px;

    &:last-child {
        margin-bottom: 80px;

        @media screen and (max-width: 1440px) {
            margin-bottom: 60px;
        }

        @media screen and (max-width: 768px) {
            margin-bottom: 40px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-bottom: 12px;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 8px;
    }
}
</style>
