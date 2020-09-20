<template>
  <body id="app">
    <main>
      <Header/>
      <router-view></router-view>
    </main>
    <Footer/>
  </body>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import '../assets/reset.css'
import '../assets/fonts.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;

  max-width: 1080px;  
  width: 100%;
  margin: auto;
}

main{
  margin: 0 1%;
  min-height: 100vh;
}
</style>
