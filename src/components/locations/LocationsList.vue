<template>
    <div>

        <div class="state" v-for="(state, i) in showed_locations" :key="i">
            <div class="state__name"><router-link :to="'/locations/' + state.state_slug">{{ state.state_name }}</router-link></div>

            <div class="cities">
                <div class="cities__item" v-for="(city, i2) in state.state_cities" :key="i2"><router-link :to="'/locations/' + state.state_slug + '/' + city.city_slug">{{ city.city_name }}</router-link></div>
            </div>
        </div>

        <div class="btn_wrap">
            <button class="btn" @click="getLocationsList()">view all</button>
        </div>

    </div>
</template>



<script>
import locations from '@/seo/locations.json'

export default {

    props: {
        locations_num: {
            type: Number,
            default: 3
        },
    },

    mounted() {
        this.initLocationsList()
        this.getLocationsList(this.locations_num)
    },

    data: () => ({
        all_locations: null,
        showed_locations: null
    }),

    methods: {

        initLocationsList() {
            let locs = []

            locations.forEach((state) => {
                let st = {
                    'state_name': state.state_name,
                    'state_slug': state.state_slug
                }
                st['state_cities'] = []
                for (const key in state.state_cities) {
                    st['state_cities'].push({ city_name: state.state_cities[key], city_slug: key })
                }
                locs.push(st)
            })

            this.all_locations = locs
        },

        getLocationsList(num) {
            this.showed_locations = num === undefined ? this.all_locations : this.all_locations.slice(0, num)
        },

    },

    watch: {

        $route: function() {
            if ( this.$route.name === "LocationState" || this.$route.name === "LocationCity" ) {
                this.getLocationsList(3)
			}
        },

    },
    
}
</script>



<style lang="scss" scoped>
.state {
    margin: 0 auto 80px auto;
    max-width: 1200px;

    &__name {
        margin-bottom: 40px;

        a {
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 140%;
            color: #1E1F21;
            text-decoration: none;

            &:hover {
                color: #12E2B0;
            }
        }
    }
}

.cities {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1200px;


    &__item {
        flex: 0 0 33.33333%;
        margin-bottom: 40px;

        &:nth-child(3n) {
            // max-width: 270px;
        }

        a {
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 140%;
            color: #1E1F21;
            text-decoration: none;

            &:hover {
                color: #12E2B0;
            }
        }
    }
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
</style>