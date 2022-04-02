<template>

    <div class="software_design">

        <div class="container">

            <div class="software_design__section_1">

                <div><img src="/images/home/software_design.svg" alt="how_scrumlaunch_works_1" class="software_design__rounded_letters"></div>

                <div class="software_design__text_block">

                    <div class="software_design__header">
                        <div class="header-1">We Build Software</div>
                        <div class="header-1">& Design Teams</div>
                        <div class="header-1">That Help Our</div>
                        <div class="header-1">Clients Succeed</div>
                    </div>

                    <div class="software_design__text">Our software development and design teams played a pivotal role in many client success stories in 2021.</div>

                </div>

            </div>

            <div class="software_design__section_2">
                <div class="software_design__square">7 successful venture capital fundraising rounds (from Seed stage to Series D)</div>
                <div class="software_design__square round">2 acquisitions<br>(by Unicorns)</div>
                <div class="software_design__square">Supported over 100M active monthly users across client products</div>
                <div class="software_design__square">Completed a successful private equity turnaround</div>
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
    font-style: normal;
    font-weight: 900;
    font-size: 75px;
    line-height: 140%;
}

.software_design {
    padding-top: 300px;
    padding-bottom: 300px;

    * {
        box-sizing: border-box;
    }

    &__section_1 {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 120px;
    }

    &__rounded_letters {
        position: relative;
        top: -290px;
        left: -120px;
    }

    &__text_block {
        flex: 0 0 100%;
        max-width: 945px;
        text-align: left;
    }

    &__header {
        margin-bottom: 46px;
    }

    &__text {
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 150%;
    }

    &__section_2 {
        display: flex;
    }

    &__square {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        width: 400px;
        padding: 70px;
        border: 1px solid #1E1F21;
        border-left: 1px solid transparent;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;

        &:first-child {
            border-left: 1px solid #1E1F21;
        }

        &.round {
            background:  #12E2B0;
            border-color: transparent;
            border-radius: 50%;

            & + * {
                border-left: 1px solid #1E1F21;
            }
        }
    }

}

</style>