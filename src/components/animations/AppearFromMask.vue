<template>
    <div class="wrap" ref="wrap">
        <slot></slot>
        <div class="mask" ref="mask"></div>
    </div>
</template>



<script>
export default {

    mounted () {
        this.init()
        window.addEventListener('scroll', this.play)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.play)
    },

    data() {
        return {
            fontSize: null,
            lineHeight: null,
            is_played: false,
        }
    },

    methods: {

        init() {

            this.fontSize = window.getComputedStyle(this.$slots.default()[0].el, null).getPropertyValue('font-size')
            this.lineHeight = window.getComputedStyle(this.$slots.default()[0].el, null).getPropertyValue('line-height')
            this.$slots.default()[0].el.style.position = 'relative'
            this.$slots.default()[0].el.style.lineHeight = this.fontSize
            this.$slots.default()[0].el.style.top = this.fontSize
            // this.$slots.default()[0].el.style.transition = 'top 1s'
            this.$refs.mask.style.height = this.lineHeight
            this.$refs.wrap.style.marginBottom = (parseInt(this.lineHeight) - parseInt(this.fontSize)) + 'px'

            setTimeout(() => {
                this.play()
            }, 1000);

        },

        play() {

            let offsetTop = this.$refs.wrap.offsetTop
            let scrollTop = document.querySelectorAll('html')[0].scrollTop
            let viewportHeight = window.innerHeight
            if ( (scrollTop + viewportHeight) < offsetTop || this.is_played === true ) return
            
            this.is_played = true

            this.$slots.default()[0].el.style.top = '0'
        }
    },
    
}
</script>



<style lang="scss" scoped>

.wrap {
    position: relative;
    text-align: left;

    ::v-slotted(p) {
        position: relative;
        text-align: left;
        transition: all 1s;
    }
}

.mask {
    position: absolute;
    width: 100%;
    background: #fff;
}

</style>