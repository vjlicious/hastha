<template>
  <div class="il">
    <Header />
    <div class="bg">
      <NavBar />
          <h1 class="heading h_vis">Vision</h1><br><br>
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
          <h1 class="heading h_strat">Strategic Objective</h1><br><br>
          <div class="intro i_strat">
          <p class="content">• To provide training and internship for minimum 200 students every year and to create an
            opportunity to
            work on live projects.<br>
            • To create opportunities for other disciplines having interdependence on real estate industry.<br>
            • To prepare and provide code of AI in all domains of real estate industry.<br>
            • To prepare and write general guidelines for real estate industries which should streamline the
            unorganized sector.<br>
          </p>
        </div>
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
  .il {
    position: relative;
  }
  .bg {
    height: 90vh;
    margin: 3em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(180, 180, 180, 0.2), rgba(116, 116, 116, 0)), url('~assets/img/bgg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .heading {
    position: absolute;
    font-size: 6em;
    padding-left: 0.2em;
  }
  .h_vis{
    top: 10%;
    left: 10%;
  }
  .h_strat{
    top: 60%;
    right: 10%;
  }
  .intro{
    position: absolute;
    background-color: white;
    width: 50%;
    box-sizing: border-box;
    padding: 3em;
  }
  .i_vis{
    top: 18%;
    left: 10%;
  }
  .i_strat{
    top: 70%;
    left: 40%;
  }
  .content {
    font-size: 1.8em;
  }

</style>
