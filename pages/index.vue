<template>
  <div class="hp">
    <div class="logo">
      <img src="~/assets/img/logo.png" width="100%" height="100%">
    </div>
    <div class="bg">
      <NavBar />
      <div class="content-left">
      <img src="~/assets/img/hastha.png" width="30%" height="30%">
        <div class="second">
          <p>A Revolutionary</p>
          <p>Company</p>
        </div>
      </div>
      <div class="content-right">
        <div class="banner">
             <Banner />
        </div>

        <h2>
          <nuxt-link id='gs1' to='/illustration'>GET STARTED</nuxt-link>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  import Banner from '@/components/Banner.vue'
  export default {
    components: {
      NavBar,Banner
    },
    mounted(){
      console.log()
    }
  }
</script>
<style scoped>
  .hp {
    position: relative;
    overflow: hidden;
      font-weight: 100;
    font-family: 'Quicksand', sans-serif;
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
    background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.657), rgba(63, 63, 63, 0)), url('~assets/img/bg.jpg');
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
    font-weight: 100;
    font-family: 'Quicksand', sans-serif;

  }

  .content-right {
    position: absolute;
    top: 85%;
    left: 82%;
  }

  .second {
    position: absolute;
    font-family: 'Quicksand', sans-serif;
    font-weight: 100;
    font-size: 2em;
    padding-top:0.3em;
    left:1%;
  }

  #gs1 {
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    color: rgb(29, 29, 29);
    font-weight: 100;
  }
  p{
    margin:0;
    padding:0;
    font-family: 'Quicksand', sans-serif;
  }
  .banner{
    position: absolute;
    bottom:800%;
    right:0%;
  }
</style>
