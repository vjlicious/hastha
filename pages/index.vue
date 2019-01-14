<template>
  <div class="home-page">
    <div class="background">
      <div class="row content">
        <header>
          <img src="'~/assests/img/'" alt="" srcset="">
        </header>
        <div class="col-sm content-left">
          <h1>HASTHA</h1>
          <div class="second">
          <h3>A Revolutionary</h3>
          <h3>Company</h3>
          </div>
        </div>
        <div class="col-sm content-right">
            <h2><nuxt-link id='gs1' to='/illustration'>GET STARTED</nuxt-link></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
  .home-page {
    overflow: hidden;
    margin:0;
    padding:0;
  }

  .background {
    position:relative;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing:border-box;
    background-image: url('~assets/img/bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content-left{
    position: absolute;
    top:40%;
    left:20%;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
  }
  .content-right{
    position:absolute;
    top:90%;
    left:80%; 
    font-weight: 700;
  }
  .second{
      font-family: 'Raleway', sans-serif;
      font-size: 30px;
  }
  #gs1{
    text-decoration: none;
    color:rgb(29, 29, 29);
    font-weight:100;
  }
</style>
