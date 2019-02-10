<template>
  <div class="hp">
    <div class="scrolldiv">
      <div class="logo">
        <nuxt-link to='/'>
          <img src="~/assets/img/logo.png" height="100%" width="100%">
        </nuxt-link>
      </div>
      <nav class="navbar">
        <nuxt-link class="items" to='/services'>SERVICES</nuxt-link>
        <nuxt-link class="items" to='/projects'>PROJECTS</nuxt-link>
        <nuxt-link class="items" to='/aboutus'>ABOUT US</nuxt-link>
        <nuxt-link class="items" to='/contactus'>CONTACT US</nuxt-link>
      </nav>
      <div class="toggle-btn" @click="togglebtn">
        <span class="one"></span>
        <span class="two"></span>
      </div>
      <div class="menu" style="display:none">
        <div class="data">
          <ul>
            <li>
              <nuxt-link class="hitems" to='/services'>SERVICES</nuxt-link>
            </li>
            <li>
              <nuxt-link class="hitems" to='/projects'>PROJECTS</nuxt-link>
            </li>
            <li>
              <nuxt-link class="hitems" to='/aboutus'>ABOUT US</nuxt-link>
            </li>
            <li>
              <nuxt-link class="hitems" to='/contactus'>CONTACT US</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg molla" v-scroll="hs_molla">
        <div class="content-left">
          <img src="~/assets/img/hastha.png" width="30%" height="30%">
          <div class="second">
            <p>A Revolutionary</p>
            <p>Company</p>
          </div>
        </div>
        <div class="content-right">
          <h2>
            <button id='button' @click="onclick">KNOW MORE</button>
          </h2>
        </div>
      </div>
      <div class="bg holla" v-scroll="hs_holla">
        <h1 class="heading h_vis">VISION</h1>
        <div class="intro i_vis">
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
        </div>

      </div>
      <div class="bg kolla">
        <div class="item">
          <h1 class="heading h_strat">OBJECTIVE</h1>
          <section class="intro i_strat">
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
    </div>
  </div>
</template>
<script>
  import {
    TimelineMax,
    TweenMax,
    Back
  } from 'gsap'

  export default {
    data() {
      return {
        sw: false,
        sw2: false
      }
    },
    methods: {
      onclick() {
        const tl = new TimelineMax()
        tl.add('enter')
        tl.fromTo('.molla', 1, {
          opacity: 1

        }, {
          delay: 2,
          transform: "translate(-200%)"
        }, 'enter')
      },
      hs_molla(evt, el) {
        if (window.scrollY > 500) {
          const tl = new TimelineMax()
          tl.add('enter')

          tl.fromTo('.molla', 1, {
            opacity: 1,
            delay: -1
          }, {
            transform: "translate(-130%)"
          }, 'enter')

          tl.to('.toggle-btn', 0.5, {
            display: "block",
            delay: -1
          })
          tl.to('.navbar', 0.5, {
            display: "none",
            delay: -1,
            opacity: 0
          })
        }

        if (window.scrollY < 500) {
          const tl = new TimelineMax()
          tl.add('enter')
          tl.fromTo('.molla', 1, {
            opacity: 1,
            delay: -1
          }, {
            transform: "translate(0)"
          }, 'enter')

          tl.to('.toggle-btn', 0.05, {
            display: "none",
            delay: -1
          })
          tl.to('.navbar', 0.5, {
            display: "flex",
            delay: -1,
            opacity: 1
          })
        }
      },
      hs_holla(evt, el) {
        if (window.scrollY > 1000) {
          const tl = new TimelineMax()
          tl.add('.enter')
          tl.fromTo('.holla', 1, {
            opacity: 1,
            delay: 1
          }, {
            transform: 'translate(-130%)'
          }, 'enter')
        }

        if (window.scrollY < 1000) {
          const tl = new TimelineMax()
          tl.add('.enter')
          tl.fromTo('.holla', 1, {
            opacity: 1,
            delay: -1
          }, {
            transform: 'translate(0)'
          }, 'enter')
        }
      },
    },
    togglebtn() {
      let tl2 = new TimelineMax()
      if (this.sw == false) {
        tl2.add('enter')
        tl2.to(".menu", 1, {
          display: "block",
          top: "0%",
          ease: Expo.easeInOut,
          delay: -1
        })
        this.sw = true
      } else {
        tl2.add('enter')
        tl2.to(".menu", 1, {
          display: "none",
          delay: -1
        })
        this.sw = false
      }
    }
  }

</script>
<style scoped>
  .hp {
    font-weight: 100;
    font-family: 'Quicksand', sans-serif;
    height: 100%;
  }

  .scrolldiv {
    height: 10000px;
  }

  .logo {
    box-sizing: border-box;
    position: relative;
    width: 3%;
    z-index: 100;
    top: 10%;
    left: 5%;
    position: fixed;
  }

  #button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    position: absolute;
    width: 200px;
    bottom: 0%;
    left: 82%;
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    color: rgb(29, 29, 29);
    font-weight: 100;
  }

  .navbar {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 100;
    position: fixed;
  }

  .items {
    text-decoration: none;
    color: rgb(56, 56, 56);
    font-family: 'Quicksand', sans-serif;
    font-weight: 100;
    font-size: 1.5em;
    padding: 2em;
  }

  .hitems {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: 'Quicksand', sans-serif;
    font-weight: 100;
    font-size: 1.5em;
    padding: 2em;
  }

  .toggle-btn {
    position: absolute;
    top: 5%;
    left: 90%;
    margin: 1.4em;
    padding: 1em;
    width: 40px;
    z-index: 101;
    right: 0;
    cursor: pointer;
    position: fixed;
    display: none;
  }

  span.one {
    position: absolute;
    width: 40px;
    height: 2px;
    background: rgb(80, 79, 79);
  }

  span.two {
    position: absolute;
    width: 40px;
    height: 2px;
    background: rgb(80, 79, 79);
    margin-top: 6px;
  }

  .menu {
    z-index: 100;
    position: absolute;
    background: #5c5c5c;
    height: 91vh;
    width: 95.5vw;
    padding: 2em;
    margin: 3em;
    position: fixed;
  }

  .data {
    padding: 8em 0 0 2em;
    text-align: left;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 42px;
  }

  .bg {
    height: 91vh;
    width: 95.5vw;
    margin: 3em;
    padding: 2em;
    box-sizing: border-box;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 10px 10px 3px #535353b6;
    position: absolute;
  }

  .molla {
    position: fixed;
    background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.657), rgba(63, 63, 63, 0)), url('~assets/img/bg.jpg');
    z-index: 2;
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

  .heading {
    position: relative;
    font-family: 'Prata', serif;
    font-weight: 700;
    text-align: center;
    z-index: -3;
  }

  .intro {
    position: relative;
    box-sizing: border-box;
    padding: 2em;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    text-justify: center;

  }

  .holla {
    position: fixed;
    z-index: 1;
    background: white;
  }

  .h_vis {
    padding:0;
    margin:0;
    color: rgba(14, 14, 14, 0.158);
    font-size: 15em;
    top:35%;
  }

  .kolla {
    position: fixed;
    z-index: 0;
    background: rgb(255, 255, 255);
  }

</style>
