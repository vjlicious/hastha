<template>
  <div class="au">
    <Header />
    <div class="bg">
      <NavBar />
      <div class="heading__container">
        <h1 class="heading">ABOUT US</h1>
      </div>
      <div class="intro">
        <p class="content">
          Hastha Alternate Building Technology & Research Private Limited, is an innovative company that is
          constantly
          striving to provide Eco friendly, cost effective solutions to the modern-day construction challenges.
          Hastha is pioneer in the field of construction of GFRG/ Rapid-wall Buildings. It’s on the forefront of this
          domain for more than 7 years. It has designed and constructed over 100 RapidWall buildings in various parts
          of Karnataka (including Bangalore), Goa, Kerala, Andhra Pradesh to mention a few.
        </p>
      </div>
    </div>
    <div class="bg holla">
      <div class="sirhead__container">
        <h1 class="heading sir">
          Sudhir Acharya
        </h1>
      </div>
      <div class="img_s">
          <img src="@/assets/img/sa.jpg" alt="@/assets/img/sa.jpg">
      </div>
      <div class="intro sir_i">
        <p class="content">
          Sudhir Acharya is a result oriented professional engineer with close to two decades of experience in
          construction as well as in the architecture field in India and Middle East. He is well experienced in
          planning,
          construction, conceptualization and implementation of various strategies to meet client’s needs. He is also
          the
          proprietor of Srusti consulting engineering bureau.
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
    },

  }

</script>

<style scoped>
  .au {
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
    top: 15%;
    left: 10%;
    font-size: 6em;
    padding-left: 0.2em;
  }

  .intro {
    position: absolute;
    background-color: white;
    width: 50%;
    top: 22%;
    left: 10%;
    box-sizing: border-box;
    padding: 3em;
  }

  .content {
    font-size: 1.8em;
    opacity: 1;
  }

  .sirintro {
    position: absolute;
    background-color: white;
    width: 50%;
  }
  .sir{
      top:60%;
      right:10%;
  }
  .sir_i{
      top:75%;
      left:40%;
  }
  .img_s{
      position: absolute;
      top:68%;
      left:10%;
  }
  img{
      width:300px;
      height:300px;
  }

</style>
