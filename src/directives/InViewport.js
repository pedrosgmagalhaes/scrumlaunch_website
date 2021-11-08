export const InViewport = {

    beforeMount(el, binding) {

        if ( typeof binding.value === 'object' ) {
            el.classList.add(binding.value.class_from)
            el.classList.add(binding.value.class_active)
        }

    },

    mounted(el, binding) {

        let in_viewport = false

        const scrollHandler = () => {
            let offsetTop = el.offsetTop < el.offsetParent.offsetTop ? el.offsetParent.offsetTop : el.offsetTop
            let scrollTop = document.querySelectorAll('html')[0].scrollTop
            let viewportHeight = window.innerHeight

            if ( (scrollTop + viewportHeight) < offsetTop || in_viewport === true ) return

            in_viewport = true

            if ( typeof binding.value === 'object' ) {
                if ( el.classList.contains(binding.value.class_from) ) {
                    el.classList.remove(binding.value.class_from)
                    el.classList.add(binding.value.class_to)
                }
            }
        }

        setTimeout(() => {
            scrollHandler()
        }, 1000);
        window.addEventListener('scroll', scrollHandler)
    },
}