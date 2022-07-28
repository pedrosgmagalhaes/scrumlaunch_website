<template>
  <Locations :lc="location" :is_city="is_city" />
</template>

<script>
import locations from '@/seo/locations.json'
import Locations from '@/components/locations/Locations.vue'

export default {
  components: { Locations },
  data() {
    return {
      is_city: false,
      location: { state_name: '', city: '', state_id: '' },
    }
  },

  head() {
    return {
      title: this.is_city
        ? `Hire Software Developers in ${this.location.city}, ${this.location.state_id} | ScrumLaunch`
        : `Hire Software Developers in ${
            this.location?.state_name || ''
          } | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content: this.is_city
            ? `ScrumLaunch is a top-rated software development and design firm serving customers in ${this.location.city} and across the U.S and world. Whether you’re looking for mobile app development, website design, or any other type of software development, ScrumLaunch can easily adapt and scale with your needs.`
            : `ScrumLaunch is a top-rated software development and design firm serving customers in ${
                this.location?.state_name || ''
              } and across the U.S and world. Whether you’re looking for mobile app development, website design, or any other type of software development, ScrumLaunch can easily adapt and scale with your needs.`,
        },
      ],
    }
  },

  watch: {
    $route() {
      this.location = this.getLocation()
      this.is_city = this.IsCity()
    },
  },

  beforeMount() {
    this.location = this.getLocation()
    this.is_city = this.IsCity()
  },

  methods: {
    IsCity() {
      return this.$route.params.city_slug !== undefined
    },

    getLocation() {
      let location_obj = null

      if (!this.$route.params.city_slug && !this.$route.params.state_slug) {
        this.$router.push({ path: '/' })
      }

      if (this.$route.params.city_slug === undefined) {
        location_obj = locations.filter((item) => {
          return this.$route.params.state_slug === item.state_slug
        })[0]

        if (location_obj === undefined) {
          this.$router.push({ path: '/' })
        }
      } else {
        location_obj = locations.filter((item) => {
          return this.$route.params.state_slug === item.state_slug
        })[0]

        if (location_obj === undefined) {
          this.$router.push({ path: '/' })
        } else {
          for (const key in location_obj.state_cities) {
            if (this.$route.params.city_slug === key) {
              location_obj.city = location_obj.state_cities[key]
            }
          }

          if (location_obj.city === undefined) {
            this.$router.push({ path: '/' })
          }
        }
      }

      return location_obj
    },
  },
}
</script>
