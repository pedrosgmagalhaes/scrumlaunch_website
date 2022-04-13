<template>

    <div class="how_scrumlaunch_works">

        <div class="container">

            <div class="header-1 how_scrumlaunch_works__title">How ScrumLaunch Works</div>

            <div class="how_scrumlaunch_works__items">

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title_wrap">
                        <div class="how_scrumlaunch_works__item_title">Discovery</div>
                        <div><img src="/images/home/how_scrumlaunch_works_1.svg" alt="how_scrumlaunch_works_1" class="how_scrumlaunch_works__item_icon"></div>
                    </div>
                    <div class="how_scrumlaunch_works__item_text">We develop a detailed understanding of your product roadmap, business objectives and ongoing software development & design needs.  These insights help us to match you with the right talent for the long run.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title_wrap">
                        <div class="how_scrumlaunch_works__item_title">Recruit & Hire</div>
                        <div><img src="/images/home/how_scrumlaunch_works_2.svg" alt="how_scrumlaunch_works_2" class="how_scrumlaunch_works__item_icon"></div>
                    </div>
                    <div class="how_scrumlaunch_works__item_text">Candidates are sourced through our internal talent pool or by our HR team in technical hubs around the world.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title_wrap">
                        <div class="how_scrumlaunch_works__item_title">Onboard</div>
                        <div><img src="/images/home/how_scrumlaunch_works_3.svg" alt="how_scrumlaunch_works_3" class="how_scrumlaunch_works__item_icon"></div>
                    </div>
                    <div class="how_scrumlaunch_works__item_text">Our onboarding process is high communication and hands on so we can ensure new team members are up to speed and performing at a high level as quickly as possible.  We also ensure high quality documentation of the onboarding process so it can be used to make things faster for future resources.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title_wrap">
                        <div class="how_scrumlaunch_works__item_title">Manage</div>
                        <div><img src="/images/home/how_scrumlaunch_works_4.svg" alt="how_scrumlaunch_works_4" class="how_scrumlaunch_works__item_icon"></div>
                    </div>
                    <div class="how_scrumlaunch_works__item_text">We want your business to succeed.  Our goal is to be your software development and design partner throughout your entire project lifecycle.</div>
                </div>

            </div>

        </div>


    </div>

</template>



<script>
export default {
    
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
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        max-width: 708px;
    }
}

.how_scrumlaunch_works {
    padding-top: 300px;
    padding-bottom: 300px;
    padding-left: 20px;
    padding-right: 20px;
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
    }

    & * {
        box-sizing: border-box;
    }

    &__title {
        margin-bottom: 120px;
        font-size: 75px;
        text-align: right;

        @media screen and (max-width: 1440px) {
            margin-bottom: 80px;
            font-size: 56px;
        }

        @media screen and (max-width: 768px) {
            margin-bottom: 60px;
            max-width: 530px;
            font-size: 48px;
            text-align: left;
        }

        @media screen and (max-width: 425px) {
            margin-bottom: 40px;
            font-size: 24px;
        }
    }

    &__items {
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        padding: 60px 0;
        min-height: 277px;
        border-top: 1px solid #1E1F21;

        @media screen and (max-width: 1440px) {
            min-height: 210px;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            padding: 32px 0;
            min-height: 183px;
        }

        @media screen and (max-width: 425px) {
            padding: 30px 0;
            min-height: 166px;
        }

        &:last-child {
            border-bottom: 1px solid #1E1F21;
        }
    }

    &__item_title_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        margin-right: 80px;
        max-width: 570px;

        @media screen and (max-width: 1440px) {
            margin-right: 63px;
            max-width: 425px;
        }

        @media screen and (max-width: 768px) {
            flex: 0 0 auto;
            flex-direction: row-reverse;
            margin-bottom: 20px;
            align-items: flex-start;
            margin-right: auto;
        }

        @media screen and (max-width: 425px) {
            margin-bottom: 17px;
        }
    }

    &__item_title {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 140%;

        @media screen and (max-width: 1440px) {
            font-size: 30px;
        }

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }

        @media screen and (max-width: 425px) {
            font-size: 18px;
        }
    }

    &__item_icon {
        max-width: 55px;

        @media screen and (max-width: 768px) {
            max-width: 35px;
            margin-right: 20px;
        }

        @media screen and (max-width: 425px) {
            max-width: 25px;
            margin-right: 18px;
        }
    }

    &__item_text {
        flex: 1;
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 150%;

        @media screen and (max-width: 1440px) {
            font-size: 20px;
        }

        @media screen and (max-width: 768px) {
            flex: 0 0 auto;
            max-width: 520px;
            font-size: 14px;
            align-self: flex-end;
        }

        @media screen and (max-width: 425px) {
            font-size: 12px;
        }
    }
}

</style>