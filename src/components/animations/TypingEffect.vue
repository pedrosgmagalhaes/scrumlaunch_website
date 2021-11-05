<template>
    <div class="wrap" ref="wrap">
        <slot></slot>
    </div>
</template>



<script>
export default {

    mounted () {
        window.addEventListener('scroll', this.wrap)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.wrap)
    },

    data() {
        return {
            is_played: false,
        }
    },

    methods: {

        wrap() {

            let offsetTop = this.$refs.wrap.offsetTop
            let scrollTop = document.querySelectorAll('html')[0].scrollTop
            let viewportHeight = window.innerHeight
            if ( (scrollTop + viewportHeight) < offsetTop || this.is_played === true ) return
            
            this.is_played = true

            this.$slots.default()[0].el.style.display = 'flex'

            let delay = 0
            let text_arr =  this.$slots.default()[0].el.innerText.split('')
            text_arr = text_arr.map(item => {
                item = item === ' ' ? '&nbsp;' : item
                delay += 0.1
                return '<span style="animation-delay: '+delay.toFixed(2)+'s">'+item+'</span>'
            })
            this.$slots.default()[0].el.innerHTML = text_arr.join('')
        },

    },
    
}
</script>



<style lang="scss" scoped>

.wrap {

    ::v-deep(span) {
        position: relative;
        top: 50px;
        transform: rotateX(60deg);
        opacity: 0;
        animation: typing 0.08s linear forwards;
    }
}

@keyframes typing {
    0% {
        top: 30px;
        transform: rotateX(60deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    80% {
        top: 20px;
        transform: rotateX(30deg);
    }

    100% {
        transform: rotateX(0deg);
        top: 0px;
        opacity: 1;
    }
}

</style>