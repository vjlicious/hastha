<template>
  <div class="home-page">
    <div class="bg">
      <Header />
      <NavBar />
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
  min-height: 100vh;
  overflow: hidden;
}

.bg {
  position: relative;
  height: 90vh;
  margin: 3em;
  box-sizing:border-box;
  background-image: url('~assets/img/bgg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
