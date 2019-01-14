<template>
  <div class="home-page">
    <div class="bg">
      <Header />
<<<<<<< HEAD
      <NavBar id="holla" />
=======
<<<<<<< HEAD
      <NavBar/>
=======
      <NavBar />
>>>>>>> 74bd714461ca9465de4847bc650943bfea0db75d
>>>>>>> 1a47b4a6df53d5b6b7daeecff3ffbe2fa927a696
    </div>
  </div>
</template>



<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    Header, NavBar
  } 
}
</script>


<style scoped>
  .home-page {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .bg {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
  }
</style>
