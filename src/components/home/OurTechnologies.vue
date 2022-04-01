<template>

    <div class="our_technologies">

        <div class="our_technologies__header">
            <div class="our_technologies__line">
                <div v-for="i in 3" :key="i">
                    <dir v-if="i % 2" class="header-1 header-1-stroke-2">Our Technologies</dir>
                    <dir v-else class="header-1">Our Technologies</dir>
                </div>
            </div>
        </div>

        <div class="our_technologies__technologies_list_block">
            <div class="our_technologies__technologies_list_row">
                <router-link to="" class="our_technologies__technologies_list_item green">Python</router-link>
                <router-link to="" class="our_technologies__technologies_list_item">PHP</router-link>
                <router-link to="" class="our_technologies__technologies_list_item green">NodeJS</router-link>
                <img src="/images/home/our_technologies_1.svg" alt="our_technologies_1" class="our_technologies__technologies_list_icon">
                <router-link to="" class="our_technologies__technologies_list_item">RubyOnRails</router-link>
            </div>
            <div class="our_technologies__technologies_list_row">
                <router-link to="" class="our_technologies__technologies_list_item">Solidity</router-link>
                <img src="/images/home/our_technologies_2.svg" alt="our_technologies_2" class="our_technologies__technologies_list_icon">
                <router-link to="" class="our_technologies__technologies_list_item green">ReactJS</router-link>
                <router-link to="" class="our_technologies__technologies_list_item">ReactNative</router-link>
                <router-link to="" class="our_technologies__technologies_list_item green">.NET</router-link>
                <router-link to="" class="our_technologies__technologies_list_item">Vue</router-link>
            </div>
            <div class="our_technologies__technologies_list_row">
                <router-link to="" class="our_technologies__technologies_list_item green">Angular</router-link>
                <router-link to="" class="our_technologies__technologies_list_item">Swift</router-link>
                <router-link to="" class="our_technologies__technologies_list_item green">Kotlin</router-link>
                <img src="/images/home/our_technologies_3.svg" alt="our_technologies_3" class="our_technologies__technologies_list_icon">
                <router-link to="" class="our_technologies__technologies_list_item">Flutter</router-link>
                <router-link to="" class="our_technologies__technologies_list_item green">DevOps</router-link>
            </div>
            <div class="our_technologies__technologies_list_row">
                <router-link to="" class="our_technologies__technologies_list_item">Machine Learning</router-link>
                <img src="/images/home/our_technologies_4.svg" alt="our_technologies_4" class="our_technologies__technologies_list_icon">
                <router-link to="" class="our_technologies__technologies_list_item green">AWS</router-link>
                <router-link to="" class="our_technologies__technologies_list_item">UI/UX Design</router-link>
                <router-link to="" class="our_technologies__technologies_list_item green">Agile Development</router-link>
            </div>
        </div>

    </div>

</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>

.header-1 {
    margin: 0;
    padding: 0 25px;
    font-weight: 900;
    font-size: 75px;
    line-height: 100%;
    color: #fff;
    white-space: nowrap;
}

.our_technologies {
    padding-top: 300px;
    padding-bottom: 300px;
    background: #1E1F21;
    box-sizing: border-box;

    &__header {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        margin-bottom: 120px;
        height: 105px;
        overflow: hidden;
    }

    &__line {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    &__technologies_list_block {
        
    }

    &__technologies_list_row {
        display: flex;
        justify-content: center;
        margin-bottom: 26px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__technologies_list_item {
        margin-right: 26px;
        padding: 10px 26px;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 140%;
        color: #fff;
        border: 1px solid #FFFFFF;
        text-decoration: none;

        &:hover {
            color: #12e2b0;
        }

        &:last-child {
            margin-right: 0;
        }

        &.green {
            color: #12e2b0;

            &:hover {
                color: #fff;
            }
        }
    }

    &__technologies_list_icon {
        display: block;
        margin-right: 26px;
    }

}

</style>