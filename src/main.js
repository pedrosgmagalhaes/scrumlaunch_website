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
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createHead())
app.component('inline-svg', InlineSvg)
app.use(VueLottiePlayer)
app.component('AppearFromMask', AppearFromMask)
app.component('TypingEffect', TypingEffect)
app.directive('in-viewport', InViewport)

// gtag
let gtag_id = ''

if ( window.location.hostname.indexOf('scrumlaunch-staging.herokuapp.com') !== -1 ) {
    gtag_id = 'G-MDM13CZTDC'
}

if ( window.location.hostname.indexOf('scrumlaunch.com') !== -1 ) {
    // gtag_id = 'UA-216538520'
    gtag_id = 'UA-146499571-7'
    
    app.use(VueGtag, {
        property: {
            id: gtag_id
        }
    })
}
// gtag


app.mount('#app')
