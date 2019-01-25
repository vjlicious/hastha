<template>
  <div class="ac">
    	<nuxt-link to='/'><div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div></nuxt-link>
    <div class="bg">
      <NavBar/>
      <h1 class="heading h_strat">ACCOLADES</h1><br><br>
      <div class="content">
        <div class="acc">Pioneer in field of construction of GFRG/RapidWall Buildings.
        </div>
        <div class="acc">Demonstrated the capability of GFRG based house by creating first ever house in India.
          Designed
          and constructed more than 100 RapidWall buildings across India.
        </div>
        <div class="acc"> Recently built 40 RapidWall affordable housing society at Nellore, in AP State for BMTPC,
          Govt of India (Ministry of Housing and Poverty alleviation),New Delhi. <br> Office Building for Kerala State
          Electricity Board, Kerala, Villas for Ayurvedic Hospital in Coorg and multiple house constructions for
          individuals.
        </div>
        <div class="acc"> Training of semi skilled / skilled workers/construction technicians to handle all aspects
          specific to GFRG panel.
        </div>
        <div class="acc">Has launched Hastha innovation and Incubation center, to identify and groom budding
          talent in Architecture domain.
        </div>
        <div class="acc">Highly qualified and frequently sought for Assisting on Immovable Property valuation for
          Nationalized banks, Financial Institutions.
        </div>
        <div class="acc">Has extensive exposure to large scale projects both national and international. Have worked
          in many states of India, Al Areen , Diraz , Mugaba in UAE, ranging from Golf course
          community to Shopping Malls, to name a few.
        </div>
        <div class="acc">Has a clear vision of innovating new technology that would help the society to minimize the
          cost/time of construction and continue to be the Industry leader.
        </div>
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

<style>
  .ac {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
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
    .logo{
    padding:0;
    margin:0;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:10%;
    left:5%;
  }

  .heading {
    position: relative;
    font-size: 6em;
    padding-left: 0.2em;
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    text-align: center;
  }

  .content {
    width:50%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    text-align: left;
    padding: 1em;
  }



</style>
