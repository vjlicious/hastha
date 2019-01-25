<template>
  <div class="home-page">
	    <nuxt-link to='/'><div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div></nuxt-link>
    <div class="bg">
      <NavBar />
      <div class="content">
        <section class="wrapper">
          <div class="container-fostrap">
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p1.jpeg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href=""> MOHANDAS RESIDENCE
                          </a>
                        </h4>
                        <p class="">
                          A residence constructed using GFRG technology in 2013.This 2-storeyed residence has
                          5 bedrooms and parking provided on the ground floor.the wall panel erection was completed
                          in 30 days.
                        </p>
                      </div>
                      <div class="card-read-more">


                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center1>Read More</b-btn>

                        <b-modal id="modal-center1" centered title="MOHANDAS RESIDENCE">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="4000" img-width="600" img-height="400" @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd">

                              <!-- Text slides with image -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p1.1.jpg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->
                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p1.2.jpg"
                                  alt="image slot">
                              </b-carousel-slide>
                            </b-carousel>
                          </div>
                        </b-modal>
                      </div>
                    </div>
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p4.jpeg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href=""> DOCTOR'S RESIDENCE
                          </a>
                        </h4>
                        <p class="">
                          A two-storeyed,2980 sqft, 4 BHK residence using RapidWall was designed for Dr.Raghavendra who
                          is a neurologist in Bangalore.
                          The site is a 40'x60' located adjacent to Bangalore University.It slopes away from the road
                          which allowed us to use that space for parking and a clinic for private consultations.
                        </p>
                      </div>
                      <div class="card-read-more">
                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center4>Read More</b-btn>
                        <b-modal id="modal-center4" centered title="DOCTOR'S RESIDENCE">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="400" img-width="600" img-height="400" @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd">

                              <!-- Text slides with image -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p4.1.jpeg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->
                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p4.2.jpeg"
                                  alt="image slot">
                              </b-carousel-slide>


                            </b-carousel>



                          </div>
                        </b-modal>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p2.jpg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href=""> COURTYARD HOME
                          </a>
                        </h4>
                        <p class="">
                          A sustainble home amidst nature was what Dr.pratap Tharyan,the Director of Christian Medical
                          College,
                          when contacted us at hastha....
                          The result was beautiful 2300 sqft house which was built within 90 days.
                        </p>
                      </div>
                      <div class="card-read-more">
                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center2>Read More</b-btn>
                        <b-modal id="modal-center2" centered title="COURTYARD HOME">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="5000" img-width="600" img-height="400" @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd">


                              <!-- Text slides with image -->
                              <b-carousel-slide caption="" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p2.1.jpg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->
                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p2.2.jpg"
                                  alt="image slot">
                              </b-carousel-slide>

                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p2.3.jpeg"
                                  alt="image slot">
                              </b-carousel-slide>

                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p2.4.jpeg"
                                  alt="image slot">
                              </b-carousel-slide>
                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p2.5.jpeg"
                                  alt="image slot">
                              </b-carousel-slide>

                            </b-carousel>



                          </div>
                        </b-modal>
                      </div>
                    </div>
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p5.jpeg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href=""> THE RAO RESIDENCE
                          </a>
                        </h4>
                        <p class="">
                          A studio residence was constructed for Mr. Sathish Rao in Udupi using GFRG Technology
                          The shell and core of the building was completed in 30 days.
                          The finishes used in this project were of high quality to give a polished, upscale
                          look.Extra carpet area was obtained by using RapidWall panels for the walls they are thinner
                          in width.
                        </p>
                      </div>
                      <div class="card-read-more">
                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center5>Read More</b-btn>
                        <b-modal id="modal-center5" centered title="COURTYARD HOME">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="4000" img-width="600" img-height="400" @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd">

                              <!-- Text slides with image -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p5.1.jpeg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->
                              <b-carousel-slide img-src="">
                                <h1></h1>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="~assets/img/p5.2.jpeg"
                                  alt="image slot">
                              </b-carousel-slide>



                            </b-carousel>



                          </div>
                        </b-modal>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p3.jpeg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href="">K P ACHARYA
                          </a>
                        </h4>
                        <p class="">
                          This project marks the beginning of the journey being the first
                          public consignment of rapidwall for RCF Mumbai Plant.
                          It was the very first building to be constructed using GFRG Panels and so,
                          recevied ample attention by the press.

                        </p>
                      </div>
                      <div class="card-read-more">
                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center3>Read More</b-btn>
                        <b-modal id="modal-center3" centered title="KP ACHARYA">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="0" img-width="600" img-height="400">

                              <!-- Text slides with image -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p3.1.jpeg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->



                            </b-carousel>



                          </div>
                        </b-modal>
                      </div>
                    </div>
                    <div class="card">
                      <a class="img-card" href="">
                        <img src="~assets/img/p6.jpeg" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href="">SUJATHA HOME
                          </a>
                        </h4>
                        <p class="">
                          A residence made using GFRG(Glass Fibre ReinForced Gypsum) technology
                          was designed for Mr. Nagraj Narve. This 1700sqft, 2-storeyed residence has 2
                          bed-rooms and parking provided on the ground floor.the wall panel erection was completed in
                          30 days
                          and the finishes took about 6 months.

                        </p>
                      </div>
                      <div class="card-read-more">
                        <b-btn class="btn btn-link btn-block" v-b-modal.modal-center6>Read More</b-btn>
                        <b-modal id="modal-center6" centered title="KP ACHARYA">
                          <div>
                            <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
                              background="#ababab" :interval="4000" img-width="600" img-height="400" @sliding-start="onSlideStart"
                              @sliding-end="onSlideEnd">

                              <!-- Text slides with image -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p6.1.jpeg" alt="image slot"></b-carousel-slide>

                              <!-- Slides with custom text -->
                              <b-carousel-slide caption="First slide" text="" img-src=""> <img slot="img" class="d-block img-fluid w-100"
                                  width="1024" height="480" src="~assets/img/p6.2.jpeg" alt="image slot"></b-carousel-slide>


                            </b-carousel>



                          </div>
                        </b-modal>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'


  export default {
    components: {
      NavBar
    },
    data() {
      return {
        slide: 2,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = false
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>


<style lang="scss" scoped>
  .home-page {
    position: relative;
  }
  .bg {
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

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  .btn-block {
    background-color: #FFF;
    border: none;
    font-size: 15pt;
    text-decoration: none;
  }

  .wrapper {
    display: table;
    height: 100%;
    width: 100%;
    margin-top: 10%;
  }

  .container-fostrap {
    display: table-cell;
    padding: 1em;
    text-align: center;
    vertical-align: middle;
  }

  .fostrap-logo {
    width: 100px;
    margin-bottom: 15px
  }

  h1.heading {
    color: #fff;
    font-size: 1.15em;
    font-weight: 900;
    margin: 0 0 0.5em;
    color: #505050;
  }

  @media (min-width: 450px) {
    h1.heading {
      font-size: 3.55em;
    }
  }

  @media (min-width: 760px) {
    h1.heading {
      font-size: 3.05em;
    }
  }

  @media (min-width: 900px) {
    h1.heading {
      font-size: 3.25em;
      margin: 0 0 0.3em;
    }
  }

  .card {
    display: block;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: box-shadow .25s;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    text-align: center;
    font-size: 2em;
  }

  .card:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .img-card {
    width: 100%;
    height: 200px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    display: block;
    overflow: hidden;
  }

  .img-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all .25s ease;
  }

  .card-content {
    padding: 15px;
    text-align: left;
  }

  .card-title {
    margin-top: 0px;
    font-weight: 700;
    font-size: 1.65em;
    font-family: 'Montserrat', sans-serif;
    opacity: 0.6;
  }

  .card-title a {
    color: #000;
    text-decoration: none !important;
  }

  .card-read-more {
    border-top: 1px solid #D4D4D4;
  }

  .card-read-more a {
    text-decoration: none !important;
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase
  }


  .logo {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 4.5%;
    left: 5%;
  }
</style>
