import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InlineSvg from 'vue-inline-svg'
import VueLottiePlayer from 'vue-lottie-player'
import AppearFromMask from '@/components/animations/AppearFromMask.vue'
import TypingEffect from '@/components/animations/TypingEffect.vue'
import { InViewport } from './directives/InViewport'
import { createHead } from '@vueuse/head'
// import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createHead())
app.component('inline-svg', InlineSvg)
app.use(VueLottiePlayer)
app.component('AppearFromMask', AppearFromMask)
app.component('TypingEffect', TypingEffect)
app.directive('in-viewport', InViewport)


// app.use(VueGtag, {
//     property: {
//         id: "UA-123456-7"
//     }
// })


app.mount('#app')
