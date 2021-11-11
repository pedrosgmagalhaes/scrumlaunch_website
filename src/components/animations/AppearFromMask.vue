<template>
    <div class="wrap" ref="wrap">
        <slot></slot>
        <div class="mask" ref="mask"></div>
    </div>
</template>



<script>
export default {

    name: 'AppearFromMask',

    props: {
        duration: {
            type: String,
            default: '1'
        },
    },

    mounted() {
        this.$slots.default()[0].el.style.opacity = '0'
        this.init()
        window.addEventListener('scroll', this.play)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.play)
    },

    data() {
        return {
            blockMarginBottom: null,
            blockHeight: null,
            is_played: false,
        }
    },

    methods: {

        init() {

            document.fonts.ready.then(() => {
                this.blockMarginBottom = window.getComputedStyle(this.$slots.default()[0].el, null).getPropertyValue('margin-bottom')
                this.blockHeight = window.getComputedStyle(this.$slots.default()[0].el, null).getPropertyValue('height')
                this.$slots.default()[0].el.style.position = 'relative'
                this.$slots.default()[0].el.style.top = this.blockHeight
                this.$slots.default()[0].el.style.marginBottom = 0
                this.$slots.default()[0].el.style.transition = 'none'
                this.$slots.default()[0].el.style.opacity = '1'
                this.$refs.mask.style.height = this.blockHeight
                this.$refs.wrap.style.marginBottom = this.blockMarginBottom
                this.is_played = false
            })

            setTimeout(() => {
                this.play(true)
            }, 1000)

        },

        play(init = false) {

            let offsetTop = this.getTopPosition(this.$slots.default()[0].el)
            let scrollTop = document.querySelectorAll('html')[0].scrollTop
            let viewportHeight = window.innerHeight
            if ( (scrollTop + viewportHeight) < offsetTop || this.is_played === true ) return
            
            if ( !init ) {
                this.is_played = true
            }

            this.$slots.default()[0].el.style.transition = 'top ' + this.duration + 's'
            this.$slots.default()[0].el.style.top = '0'
        },

        getTopPosition(element) {
            return element.getBoundingClientRect().top + document.querySelectorAll('html')[0].scrollTop
        },
    },
    
}
</script>



<style lang="scss" scoped>

.wrap {
    position: relative;
    text-align: left;
}

.mask {
    position: absolute;
    width: 100%;
    background: #fff;
}

</style>