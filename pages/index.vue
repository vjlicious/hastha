<template>
  <div class="hp">
     <div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div>
    <div class="bg">
      <NavBar />
        <div class="content-left">
          <h1>HASTHA</h1>
          <div class="second">
          <h3>A Revolutionary</h3>
          <h3>Company</h3>
          </div>
        </div>
        <div class="content-right">
            <h2><nuxt-link id='gs1' to='/illustration'>GET STARTED</nuxt-link></h2>
        </div>
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
  .hp {
    position: relative;
    overflow:hidden;
  }

  .logo {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 9%;
    left: 4.9%;
  }

  .bg {
    height: 90vh;
    margin: 3em;
    padding: 2em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.657), rgba(63, 63, 63, 0)),url('~assets/img/bg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    box-shadow: 0 10px 10px 3px #535353b6;

  }

  .content-left {
    position: absolute;
    top: 40%;
    left: 20%;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
  }

  .content-right {
    position: absolute;
    top: 85%;
    left: 82%;
  }

  .second {
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
  }

  #gs1 {
    text-decoration: none;
    color: rgb(29, 29, 29);
    font-weight: 100;

  }
</style>
