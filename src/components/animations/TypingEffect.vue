<template>
    <div class="wrap" :class="{ 'typing_1': type === '1', 'typing_2': type === '2' }" ref="wrap">
        <slot></slot>
    </div>
</template>



<script>
export default {

    props: {
        type: {
            type: String,
            default: '1'
        },
    },

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

            let offsetTop = this.getTopPosition(this.$slots.default()[0].el)
            let scrollTop = document.querySelectorAll('html')[0].scrollTop
            let viewportHeight = window.innerHeight
            if ( (scrollTop + viewportHeight) < offsetTop || this.is_played === true ) return
            
            this.is_played = true

            this.$slots.default()[0].el.style.display = 'flex'
            this.$slots.default()[0].el.style.flexWrap = 'wrap'

            let delay = 0
            let text_arr =  this.$slots.default()[0].el.innerText.split('')
            text_arr = text_arr.map(item => {
                item = item === ' ' ? '&nbsp;' : item
                if ( this.type === '1' ) {
                    delay += 0.1
                }
                else if ( this.type === '2' ) {
                    delay += 0.015
                }
                else {
                    delay += 0.1
                }
                return '<span style="animation-delay: '+delay.toFixed(2)+'s">'+item+'</span>'
            })
            this.$slots.default()[0].el.innerHTML = text_arr.join('')
        },

        getTopPosition(element) {
            return element.getBoundingClientRect().top + document.querySelectorAll('html')[0].scrollTop
        },

    },
    
}
</script>



<style lang="scss" scoped>

.typing_1 {

    ::v-deep(span) {
        position: relative;
        top: 50px;
        transform: rotateX(60deg);
        opacity: 0;
        animation: typing_1 0.08s linear forwards;
    }
}

.typing_2 {

    ::v-deep(span) {
        position: relative;
        opacity: 0;
        animation: typing_2 0.01s linear forwards;
    }
}

@keyframes typing_1 {
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

@keyframes typing_2 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>