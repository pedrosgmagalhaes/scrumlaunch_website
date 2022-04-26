<template>

    <div class="vacancy">

        <div class="container">

            <div class="vacancy__section_1">

                <div class="vacancy__skill header-big">{{ vacancy.skill }}</div>

                <div class="vacancy__info">
                    <div class="vacancy__location">{{ vacancy.location }} <span class="vacancy__remote" v-if="vacancy.remote">Remote</span></div>
                    <div class="vacancy__state open" v-if="vacancy.open">Open</div>
                    <div class="vacancy__state closed" v-if="!vacancy.open">Closed</div>
                </div>

            </div>

            <div class="vacancy__section_2" v-if="vacancy.details && vacancy.details.length > 0">

                <div class="vacancy__details_items">

                    <div class="vacancy__details_item" v-for="(section, i) in vacancy.details" :key="i">

                        <div class="vacancy__details_title_wrap">
                            <div class="vacancy__details_title">{{ section.section_name }}</div>
                            <div><img src="" alt=""></div>
                        </div>

                        <div class="vacancy__details_desc_wrap">
                            <ul class="vacancy__details_desc" v-if="section.section_list && section.section_list.length > 0">
                                <li class="vacancy__details_desc_item" v-for="(section_list_item, i2) in section.section_list" :key="i2">— {{ section_list_item }}</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>



<script>
export default {

    created () {
        this.vacancy = this.$store.getters.getVacancies('','').filter((item) => {
            return item.slug === this.$route.path
        })[0]
    },

    data() {
        return {
            vacancy: null,
        }
    },

}
</script>



<style lang="scss" scoped>

.header-big {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 90px;
}

.container {
	padding-left: 8.34%;
	padding-right: 8.34%;
}

.vacancy {
    text-align: left;

    &__section_1 {
        padding-top: 320px;
        padding-bottom: 80px;
    }

    &__skill {
        margin-bottom: 40px;
    }

    &__info {
        display: flex;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 150%;
    }

    &__location {
        flex: 1;
        max-width: 488px;
    }

    &__remote {
        margin-left: 10px;
        padding: 0 3px;
        background: #12e2b0;
    }

    &__state {
        flex: 1;

		&:before {
			content: '';
			position: relative;
			top: -4px;
			display: inline-block;
			margin-right: 10px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
		}

		&.open {
			&:before {
				background: #12E2B0;
			}
		}

		&.closed {
			&:before {
				background: #FF0000;
			}
		}
    }

    &__section_2 {
        margin-bottom: 300px;
    }

    &__details_items {

    }

    &__details_item {
        display: flex;
        padding: 60px 0;
        border-bottom: 1px solid #1E1F21;

        &:first-child {
            border-top: 1px solid #1E1F21;
        }
    }

    &__details_title_wrap {
        flex: 1;
        max-width: 488px;
    }

    &__details_title {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
    }

    &__details_desc_wrap {

    }

    &__details_desc {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 180%;
    }

    &__details_desc_item {

    }

}

</style>