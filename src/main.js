import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InlineSvg from 'vue-inline-svg'
import VueLottiePlayer from 'vue-lottie-player'
import AppearFromMask from '@/components/animations/AppearFromMask.vue'
import TypingEffect from '@/components/animations/TypingEffect.vue'
import {InViewport} from './directives/InViewport';

createApp(App).use(store).use(router).component('inline-svg', InlineSvg).use(VueLottiePlayer).component('AppearFromMask', AppearFromMask).component('TypingEffect', TypingEffect).directive('in-viewport', InViewport).mount('#app')
