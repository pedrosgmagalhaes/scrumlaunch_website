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

			// googletagmanager
			let ScriptSrc = document.createElement('script')
			ScriptSrc.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-146499571-1')
			ScriptSrc.setAttribute('async', '')

			let ScriptInit = document.createElement('script')
			ScriptInit.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-146499571-1');`

			document.head.appendChild(ScriptSrc);
			document.head.appendChild(ScriptInit);
			// googletagmanager


			// intercom
			let intercomSettings = document.createElement('script')
			intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

			let intercomScript = document.createElement('script')
			intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

			document.body.appendChild(intercomSettings);
			document.body.appendChild(intercomScript);
			// intercom

		}

		if ( window.location.hostname.indexOf('scrumlaunch-staging.herokuapp.com') !== -1 ) {

			// intercom
			let intercomSettings = document.createElement('script')
			intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

			let intercomScript = document.createElement('script')
			intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

			document.body.appendChild(intercomSettings);
			document.body.appendChild(intercomScript);
			// intercom

		}

		if ( window.location.hostname.indexOf('localhost') !== -1 ) {

			// intercom
			let intercomSettings = document.createElement('script')
			intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

			let intercomScript = document.createElement('script')
			intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

			document.body.appendChild(intercomSettings);
			document.body.appendChild(intercomScript);
			// intercom

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
