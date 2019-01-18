<template>
  <div class="il">
    <div class="logo">
      <img src="~/assets/img/logo.png" width="100%" height="100%">
    </div>
    <div class="bg">
      <NavBar />
      <h1 class="heading h_vis">VISION</h1><br><br>
      <div class="intro i_vis">
        <p class="content">• Creating vertical financial growth and horizontal spread across the country.<br>
          • To create a common platform for architects, Planners, Engineers, Interior designers, Developers, and also
          for immovable property valuer, dealers, consultants, legal advisers and execute turnkey project execution.<br>
          • To integrate the technical education with real estate industry.<br>
          • To incubate the innovative startups on real estate platform.<br>
          • Eventually, turn the company under the public holding format.<br>
          • To make company turnover of 333 crore in next 7 years.<br>
          • To sell building like a car.<br>
        </p>
      </div>
    </div>
    <div class="bg holla">
      <h1 class="heading h_strat">STRATEGIC OBJECTIVE</h1><br><br>
      <div class="intro i_strat">
        <p class="content">• To provide training and internship for minimum 200 students every year and to create an
          opportunity to work on live projects.<br>
          • To create opportunities for other disciplines having interdependence on real estate industry.<br>
          • To prepare and provide code of AI in all domains of real estate industry.<br>
          • To prepare and write general guidelines for real estate industries which should streamline the
          unorganized sector.<br>
        </p>
      </div>
    </div>
    <div class="bg">
      <h1 class="heading h_vis">ACCOMPLISHMENTS</h1><br><br>
      <div class="intro content i_vis">
        <ul>
          <li>Pioneer in field of construction of GFRG/ RapidWall Buildings</li>
          <li>Demonstrated the capability of GFRG based house by creating first ever house in India, for residential
            purpose at Rajeevnagar, Manipal</li>
          <li>Designed and constructed more than 100 RapidWall buildings across India</li>
          <li>Undergone training from experts at IIT Madras & RBS India</li>
          <li>Recently built 40 RapidWall affordable housing society at Nellore, in AP State for BMTPC, Govt of India
            (Ministry of Housing and Poverty alleviation),New Delhi.</li>
        </ul>
      </div>
    </div>
    <div class="bg">
      <h1 class="heading h_as">ACCOMPLISHMENTS</h1><br><br>
      <div class="intro i_as content ">
        <ul>
          <li>Ongoing projects are Office Building for Kerala State Electricity Board, Kerala, Villas for Ayurvedic
            Hospital in Coorg and multiple house constructions for individuals</li>
          <li>Demonstrated the capability of GFRG based house by creating first ever house in India, for residential
            purpose at Rajeevnagar, Manipal</li>
          <li>Highly specialized workshops were conducted for Professional architects, structural engineers and
            construction engineers of consultants firm/ construction companies or builders or real estate developers to
            get an exposure on GFRG construction.</li>
        </ul>
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
      NavBar,Banner
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
    width: 55%;
  }

  .h_vis {
    top: 18%;
    left: 10%;
  }

  .h_strat {
    top: 20%;
    left: 40%;
  }

  .h_as {
    top: 10%;
    left: 40%;
  }

  .i_as {
    top: 0%;
    left: 70%;
  }

  .intro {
    position: relative;
    background-color: white;
    width: 50%;
    box-sizing: border-box;
    padding: 3em;
  }

  .i_vis {
    top: 15%;
    left: 10%;
  }

  .i_strat {
    top: 20%;
    left: 40%;
  }

  .i_as {
    top: 15%;
    left: 10%;

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
  .foot{
    width:50%;

  }
  .items{
    display:flex;


  }

</style>
