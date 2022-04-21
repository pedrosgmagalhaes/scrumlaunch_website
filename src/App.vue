<template>
	<div id="nav">
		<Menu />
	</div>
	<router-view />
	<Footer />
</template>



<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {

	components: {
		Menu,
		Footer
	},

	mounted () {

		if ( window.location.hostname.indexOf('scrumlaunch.com') !== -1 ) {
			let ScriptSrc = document.createElement('script')
			ScriptSrc.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-146499571-1')
			ScriptSrc.setAttribute('async', '')

			let ScriptInit = document.createElement('script')
			ScriptInit.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-146499571-1');`

			document.head.appendChild(ScriptSrc);
			document.head.appendChild(ScriptInit);
		}

	},
}
</script>



<style lang="scss">
@import "@/assets/css/main.scss";
#app {
	font-family: "Proxima Nova";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #1e1f21;
	position: relative;
}

#nav {
	position: absolute;
	width: 100%;
	z-index: 100;
}
</style>
