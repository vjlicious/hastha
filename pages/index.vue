<template>
  <div class="hp">
    <div class="logo"><nuxt-link to='/'>
      <img src="~/assets/img/logo.png">
    </nuxt-link></div>
    <nav class="navbar">
        <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
        <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
        <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
        <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
    </nav>
    <div class="bg">
      <div class="content-left">
        <img src="~/assets/img/hastha.png" width="30%" height="30%">
          <div class="second">
            <p>A Revolutionary</p>
            <p>Company</p>
          </div>
      </div>
      <div class="content-right">
        <h2>
          <nuxt-link id='gs1' to='/illustration'>KNOW MORE</nuxt-link>
        </h2>
      </div>
    </div>
    <div class="bg holla">
      <div class="container">
        <div class="item1">
          <h1 class="heading h_vis">VISION</h1>
          <section class="intro content i_vis">
            <div class="vision">
              To provide training and internship for minimum 200 students every year and to create an
              opportunity to work on live projects.
            </div>
            <div class="vision">To create opportunities for other disciplines having interdependence on real estate
              industry.</div>
            <div class="vision"> To prepare and provide code of AI in all domains of real estate industry.</div>
            <div class="vision">To prepare and write general guidelines for real estate industries which should
              streamline the
              unorganized sector</div>
          </section>
        </div>
        <div class="item2">
          <h1 class="heading h_strat">OBJECTIVE</h1>
          <section class="intro content i_strat">
            <div class="strat">Creating vertical financial growth and horizontal spread across the country.</div>
            <div class="strat">To create a common platform for architects, Planners, Engineers, Interior designers,
              Developers, and also
              for immovable property valuer, dealers, consultants, legal advisers and execute turnkey project
              execution.<br></div>
            <div class="strat">To integrate the technical education with real estate industry.</div>
            <div class="strat">To incubate the innovative startups on real estate platform.</div>
            <div class="strat"> Eventually, turn the company under the public holding format.</div>
          </section>
        </div>
      </div>
      <h2>
        <nuxt-link id='gs1' to='/accolades'>ACCOLADES</nuxt-link>
      </h2>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>

  .hp {
    font-weight: 100;
    font-family: 'Quicksand', sans-serif;
  }
  .logo {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 100;
    top: 10%;
    left: 5%;
  }
  .navbar{
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    position: absolute;
    top:3%;
    right: 3%;
    z-index:100;
  }
  .items {
        text-decoration:none;
        color:rgb(22, 22, 22);
        font-family: 'Quicksand', sans-serif;
        font-weight:100;
        font-size:1.5em;
        padding: 2em;
  }

  .bg {
    height: 91vh;
    width: 95.5vw;
    margin: 3em;
    padding: 2em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.657), rgba(63, 63, 63, 0)), url('~assets/img/bg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 10px 10px 3px #535353b6;
    position:absolute;
    z-index:1;
  }
  .holla{
    z-index:0;
  }

  .content-left {
    position: relative;
    top: 40%;
    left: 20%;
    font-weight: 100;
    font-family: 'Quicksand', sans-serif;
    width: 500px;
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
    padding-top: 0.3em;
    left: 1%;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  .container {
    width: 100%;
    display: flex;
    justify-items: center;
    align-content: space-between;
    padding: 2em;
    padding-top: 6em;
  }

  .item1 {
    width: 50%;
    margin: 1em;
  }

  .item2 {
    width: 50%;
    margin: 1em;
  }

  .heading {
    position: relative;
    font-size: 6em;
    padding-left: 0.2em;
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    text-align: center;
  }

  .intro {
    position: relative;
    box-sizing: border-box;
    padding: 2em;
    width: 100%;
  }

  .content {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    text-justify: center;
  }

  #gs1 {
    position: absolute;
    width: 200px;
    bottom: 0%;
    left: 82%;
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    color: rgb(29, 29, 29);
    font-weight: 100;
  }

</style>
