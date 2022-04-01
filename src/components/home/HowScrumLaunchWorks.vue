<template>

    <div class="how_scrumlaunch_works">

        <div class="container">

            <div class="header-1 how_scrumlaunch_works__title">How ScrumLaunch Works</div>

            <div class="how_scrumlaunch_works__items">

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title">Discovery</div>
                    <div><img src="/images/home/how_scrumlaunch_works_1.svg" alt="how_scrumlaunch_works_1" class="how_scrumlaunch_works__item_icon"></div>
                    <div class="how_scrumlaunch_works__item_text">We develop a detailed understanding of your product roadmap, business objectives and ongoing software development & design needs.  These insights help us to match you with the right talent for the long run.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title">Recruit & Hire</div>
                    <div><img src="/images/home/how_scrumlaunch_works_2.svg" alt="how_scrumlaunch_works_2" class="how_scrumlaunch_works__item_icon"></div>
                    <div class="how_scrumlaunch_works__item_text">Candidates are sourced through our internal talent pool or by our HR team in technical hubs around the world.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title">Onboard</div>
                    <div><img src="/images/home/how_scrumlaunch_works_3.svg" alt="how_scrumlaunch_works_3" class="how_scrumlaunch_works__item_icon"></div>
                    <div class="how_scrumlaunch_works__item_text">Our onboarding process is high communication and hands on so we can ensure new team members are up to speed and performing at a high level as quickly as possible.  We also ensure high quality documentation of the onboarding process so it can be used to make things faster for future resources.</div>
                </div>

                <div class="how_scrumlaunch_works__item">
                    <div class="how_scrumlaunch_works__item_title">Manage</div>
                    <div><img src="/images/home/how_scrumlaunch_works_4.svg" alt="how_scrumlaunch_works_4" class="how_scrumlaunch_works__item_icon"></div>
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
}

.how_scrumlaunch_works {
    padding-top: 300px;
    padding-bottom: 300px;
    text-align: left;

    &__title {
        margin-bottom: 120px;
        font-size: 75px;
        text-align: right;
    }

    &__item {
        display: flex;
        align-items: center;
        padding: 40px 0;
        min-height: 238px;
        border-top: 1px solid #1E1F21;

        &:last-child {
            border-bottom: 1px solid #1E1F21;
        }
    }

    &__item_title {
        flex: 0 0 500px;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 140%;
    }

    &__item_icon {
        margin-right: 80px;
    }

    &__item_text {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 150%;
    }
}

</style>