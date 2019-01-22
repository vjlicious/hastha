<template>
  <div class="il">
    <div class="logo">
      <img src="~/assets/img/logo.png" width="100%" height="100%">
    </div>
    <div class="bg">
      <NavBar />
      <div class="container">
        <div class="item1">
          <h1 class="heading h_vis">VISION</h1><br><br>
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
          <h1 class="heading h_strat">OBJECTIVE</h1><br><br>
          <section class="intro content i_strat">
            <div class="strat">Creating vertical financial growth and horizontal spread across the country.</div>
            <div class="strat">To create a common platform for architects, Planners, Engineers, Interior designers, Developers, and also
          for immovable property valuer, dealers, consultants, legal advisers and execute turnkey project execution.<br></div>
          <div class="strat">To integrate the technical education with real estate industry.</div>
            <div class="strat">To incubate the innovative startups on real estate platform.</div>
            <div class="strat"> Eventually, turn the company under the public holding format.</div>
          </section>
        </div>
      </div>
    </div>

    <div class="bg footer">
      <div class="foot_items">
        <div class="foot links">
          <nav class="navbar">
            <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
            <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
            <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
            <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
          </nav>
        </div>
        <div class="foot copyright">
          ©2018 by Hastha - Alternate Building Technology and Research Pvt Ltd.
        </div>
        <div class="foot address">
          Hastha Alternate Building Technology & Research Pvt Ltd
          +91 98-86-456000.
          # 287/A, 7 A Main Road, HRBR Layout,1st Block,
          Subbaiahnapalya, Banaswadi, Bengaluru, Karnataka - 560 043
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  import Banner from '@/components/Banner.vue'

  export default {
    components: {
      NavBar,
      Banner
    }
  }

</script>
<style scoped>
  .il {
    position: relative;
  }

  .logo {
    position: absolute;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    top: 2%;
    left: 5%;
  }

  .bg {
    height: 93vh;
    margin: 3em;
    padding: 2em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(180, 180, 180, 0.2), rgba(116, 116, 116, 0)), url('~assets/img/bgg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    box-shadow: 0 10px 10px 3px #535353b6;
  }

  .heading {
    position: relative;
    font-size: 6em;
    padding-left: 0.2em;
    font-family: 'Roboto Slab', serif;
    font-weight: 100;
    text-align: center;
  }


  .intro {
    position: relative;
    background-color: white;
    box-sizing: border-box;
    padding: 3em;
    width:100%;
  }
  .item1{
    width:50%;
    margin:1em;
  }
  .item2{
    width:50%;
    margin:1em;
  }

  .container {
    width:100%;
    display: flex;
    justify-items: center;
    align-content: space-around;
    padding:3em;
  }

  .content {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    font-weight: 100;
    text-justify: auto;
    text-align: left;
  }

  .foot_items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
  }

  .foot {
    width: 50%;

  }

  .items {
    display: flex;
  }

</style>
