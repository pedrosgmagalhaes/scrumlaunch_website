export const InViewport = {
  beforeMount(el, binding) {
    if (typeof binding.value === 'object') {
      el.classList.add(binding.value.class_from ? binding.value.class_from : '')
      el.classList.add(
        binding.value.class_active ? binding.value.class_active : ''
      )
    }
  },

  mounted(el, binding, vnode) {
    let in_viewport = false

    const scrollHandler = () => {
      const offsetTop =
        el.getBoundingClientRect().top +
        document.querySelectorAll('html')[0].scrollTop
      const scrollTop = document.querySelectorAll('html')[0].scrollTop
      const viewportHeight = window.innerHeight

      if (scrollTop + viewportHeight < offsetTop || in_viewport === true) return

      in_viewport = true

      if (typeof binding.value === 'object') {
        if (el.classList.contains(binding.value.class_from)) {
          el.classList.remove(binding.value.class_from)
          el.classList.add(binding.value.class_to ? binding.value.class_to : '')
        }
      } else if (typeof binding.value === 'function') {
        binding.value(in_viewport, vnode.key)
      }
    }

    setTimeout(() => {
      scrollHandler()
    }, 1000)
    window.addEventListener('scroll', scrollHandler)
  },
}
