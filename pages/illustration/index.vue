<template>
  <div class="home-page">
    <Header />
    <div class="bg">
      <NavBar />
      <div class="container vm">
        <div ref="vis" class="content vision">
          <h1 class="heading">Vision</h1><br><br>
          <p class="one">• Creating vertical financial growth and horizontal spread across the country.<br>
            • To create a common platform for architects, Planners, Engineers, Interior designers, Developers, and also
            for immovable property valuer, dealers, consultants, legal advisers and execute turnkey project execution.<br>
            • To integrate the technical education with real estate industry.<br>
            • To incubate the innovative startups on real estate platform.<br>
            • Eventually, turn the company under the public holding format.<br>
            • To make company turnover of 333 crore in next 7 years.<br>
            • To sell building like a car.<br>
          </p>
        </div>
        <div class="content strat" ref="stat" >
          <h1 id="heading">Strategic Objective</h1><br><br>
          <p>• To provide training and internship for minimum 200 students every year and to create an opportunity to
            work on live projects.<br>
            • To create opportunities for other disciplines having interdependence on real estate industry.<br>
            • To prepare and provide code of AI in all domains of real estate industry.<br>
            • To prepare and write general guidelines for real estate industries which should streamline the
            unorganized sector.<br>
          </p>
        </div>
        </div>
      </div>
    </div>
</template>


<script>
  import Header from '@/components/Header.vue'
  import NavBar from '@/components/NavBar.vue'
  import Banner from '@/components/Banner.vue'


  import { TimelineLite, TimelineMax} from 'gsap'
  import TweenMax from 'gsap'


  let ScrollMagic;
  if(process.browser){
    ScrollMagic = require('scrollmagic');
  }
  

  export default {
    components: {
      Header,
      NavBar
    },
    mounted(){

      const tl = new TimelineMax()
      const tl2 = new TimelineMax()
      const controller = new ScrollMagic.Controller()
      tl.from(".vision", 1,{
        opacity:1,
      })
      tl.to(".vision", 2,{
        opacity:0
      })
      tl.from(".strat", 3,{
        opacity:0,
      })
      const scene = new ScrollMagic.Scene({
        triggerElement: ".bg",
        triggerHook: "onLeave",
      })
      .setPin(".vm")
      .setTween(tl)
      .addTo(controller)
    }

}
</script>


<style scoped>
  .home-page {
    min-height: 100vh;
    overflow:hidden;
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
    overflow:hidden;
  }
  .vm {
    position: absolute;
    left: 80px;
    top: 180px;
    width: 600px;
    height: 380px;
    background-color: rgba(255, 255, 255, 0.671);
  }
  .content{
    padding: 3em;
    padding-bottom: 1em;
    box-sizing: border-box;

  }

  #heading {
    font-size: 4em;
  }

  p {
    font-size: 1.6em;
  }
  .vison{
    position: absolute;
    z-index:1;
  }
  .strat{
    position: absolute;
    z-index: 2;
  }

</style>
