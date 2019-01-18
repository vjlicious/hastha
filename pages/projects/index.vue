<template>
  <div class="home-page">
    <div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div>
    <div class="bg">
      <NavBar />
      <div class="content">
        <div class="blog-card1 spring-fever1 c1">
          <div class="photo photo1"></div>
        </div>
        <div class="blog-card2 spring-fever2 c2">
          <div class="photo photo2"></div>
        </div>
        <div class="blog-card3 1spring-fever3 c3">
          <div class="photo photo3"></div>
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
    },
  }
</script>


<style lang="scss" scoped>
  .home-page {
    position: relative;
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
    box-shadow: 0 10px 10px 3px  #535353b6;
  }

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
  @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic);

  // variables
  $card-width: 400px;
  $card-height: 600px;
  $h-color: #9CC9E3;
  $yellow: #D0BB57;
  $txt-color: #DCE3E7;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #323c41;
  }

  @mixin bgImg($url) {
    width:100%;
    height:100%;
    background: url($url) center no-repeat;
    background-size: cover;
  }

  @mixin con() {
    width: $card-width;
    height: $card-height;
    position: absolute;
    top: 45%;
    margin: -250px 0 0 -175px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    text-align: center;
    float: left;
  }

  .blog-card1 {
    @include con();
    left: 20%;
    .photo {
      height: 600px;
      position: relative;

      &.photo1 {
        @include bgImg("~assets/img/1.jpeg");

      }


    }
  }

  .blog-card2 {
    @include con();
    left:50%;

    .photo {
      height: 600px;
      position: relative;


      &.photo2 {
        @include bgImg("~assets/img/3.jpg");

      }


    }
  }

  .blog-card3 {
    @include con();
    left: 80%;

    .photo {
      height: 600px;
      position: relative;


      &.photo3 {
        @include bgImg("~assets/img/7.jpeg");
      }
    }
  }

  .blog-card4 {
    @include con();
    left: 70%;

    .photo {
      height: 600px;
      position: relative;


      &.photo4 {
        @include bgImg("~assets/img/8.jpeg");

      }


    }
  }
     .logo{
    padding:0;
    margin:0;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:4.5%;
    left:5%;
  }
</style>
