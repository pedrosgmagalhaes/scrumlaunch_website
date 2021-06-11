import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InlineSvg from 'vue-inline-svg'
import VueLottiePlayer from 'vue-lottie-player'

createApp(App).use(store).use(router).component('inline-svg', InlineSvg).use(VueLottiePlayer).mount('#app')
