<template>
<div class="cu">
    <Header />
    <div class="bg">
      <NavBar />
      </div>
</div>
    
</template>
<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
  export default {
    components: {
      Header,
      NavBar
    }
}
</script>
<style scoped>
  .bg {
    height: 90vh;
    margin: 3em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(180, 180, 180, 0.2), rgba(116, 116, 116, 0)), url('~assets/img/bgg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    overflow:hidden;
  }
</style>

