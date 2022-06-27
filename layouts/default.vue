<template>
  <div>
    <div id="nav">
      <Menu />
    </div>
    <Nuxt :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Menu,
    Footer,
  },

  mounted() {
    if (window.location.hostname.includes('scrumlaunch.com')) {
      // googletagmanager
      const ScriptSrc = document.createElement('script')
      ScriptSrc.setAttribute(
        'src',
        'https://www.googletagmanager.com/gtag/js?id=UA-146499571-1'
      )
      ScriptSrc.setAttribute('async', '')

      const ScriptInit = document.createElement('script')
      ScriptInit.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-146499571-1');`

      document.head.appendChild(ScriptSrc)
      document.head.appendChild(ScriptInit)
      // googletagmanager

      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom

      // linkedin
      const linkedinSettings = document.createElement('script')
      linkedinSettings.innerHTML = `_linkedin_partner_id = "3906108"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`

      const linkedinScript = document.createElement('script')
      linkedinScript.innerHTML = `(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);`

      document.body.appendChild(linkedinSettings)
      document.body.appendChild(linkedinScript)
      // linkedin
    }

    if (
      window.location.hostname.includes('scrumlaunch-staging.herokuapp.com')
    ) {
      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom
    }

    if (window.location.hostname.includes('localhost')) {
      // intercom
      const intercomSettings = document.createElement('script')
      intercomSettings.innerHTML = `window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "oli4locx" };`

      const intercomScript = document.createElement('script')
      intercomScript.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/oli4locx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`

      document.body.appendChild(intercomSettings)
      document.body.appendChild(intercomScript)
      // intercom
    }
  },
}
</script>
