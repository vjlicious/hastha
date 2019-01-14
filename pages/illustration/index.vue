<template>
  <div class="home-page">
    <div class="bg">
      <Header />
<<<<<<< HEAD
      <NavBar/>
=======
      <NavBar />
>>>>>>> 74bd714461ca9465de4847bc650943bfea0db75d
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
    background-image: url('~assets/img/illus.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #holla{
    color: red;
  }
</style>
