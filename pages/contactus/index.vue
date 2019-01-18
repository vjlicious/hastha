<template>
<div class="cu">
<div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div>
    <div class="bg">
      <NavBar />
      </div>
</div>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue'
  export default {
    components: {
      NavBar
    }
}
</script>
<style scoped>
.logo{
    padding:0;
    margin:0;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:5%;
    left:5%;
  }
  .bg {
    height: 90vh;
    margin: 3em;
    padding: 2em;
    box-sizing:border-box;
    background-image: url('~assets/img/bg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    box-shadow: 0 10px 10px 3px  #535353b6;
  }
</style>

