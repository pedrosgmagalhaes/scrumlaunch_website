<template>
  <div id="nav">
    <Menu />
  </div>
  <router-view/>
  <Footer />
</template>
<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Menu,
    Footer
  },
}
</script>
<style lang="scss">
@import "@/assets/css/main.scss";
#app {
  font-family: 'Proxima Nova';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1E1F21;
  position: relative;
}

#nav {
  position: absolute;
}

</style>
