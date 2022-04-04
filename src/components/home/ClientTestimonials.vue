<template>

    <div class="client_testimonials">

        <div class="container">

            <div class="header-1">Client Testimonials</div>

            <div class="client_testimonials__testimonials_section">

                <div class="client_testimonials__testimonials_pencil"></div>

                <div class="client_testimonials__testimonials_items">

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

                </div>

                <div class="client_testimonials__testimonials_nav"></div>

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

.header-1 {
    margin-bottom: 120px;
    font-style: normal;
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
    color: #fff;
}

.client_testimonials {
    padding-top: 300px;
    padding-bottom: 300px;
    background: #1E1F21;
    text-align: left;

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
        background: url(/images/home/client_testimonials_1.svg);
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
        }
    }

    &__testimonials_item_logo {
        margin-bottom: 40px;
    }

    &__testimonials_item__text {
        margin-bottom: 40px;
        min-height: 234px;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 150%;
    }

    &__testimonials_item__person {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
    }

    &__testimonials_item__site {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
    }

    &__testimonials_nav {

    }
    
}

</style>