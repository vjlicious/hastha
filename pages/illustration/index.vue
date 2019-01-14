<template>
  <div class="home-page">
    <div class="bg">
      <Header />
      <div class="nav">
        <NavBar />
      </div>

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
.nav {
  position: absolute;
  bottom:0%;
  display:flex;
}
</style>
