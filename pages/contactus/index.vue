<template>
  <div class="cu">
	    <nuxt-link to='/'><div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div></nuxt-link>
    <div class="bg">
      <NavBar />
      <div class="container">
        <div class="map">
          <div id="googleMap" style="width:100%;height:400px;"></div>
          	<div id="googleMap" style="width:100%;height:400px;"></div>
            <script>
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(13.012388,77.643092),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiIdTusg83RkxiDCOqVG1z7W0MDBx-v_4&callback=myMap"></script>
        </div>
        <div class="contact-form">
          
          <h1 class="title">Contact Us</h1>
          <h2 class="subtitle">We are here assist you.</h2>
          <form action="mailto:viju1997@gmail.com" method="post" enctype="text/plain">
            <input type="text" name="first_name" placeholder="Your Name" />
            <input type="email" name="email_address" placeholder="Your E-mail Adress" />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea name="comments" id="" rows="8" placeholder="Your Message"></textarea>
            <button type="submit" class="btn-send ">Get a Call Back</button>
          </form>
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
<style scoped>
html {
  overflow: hidden;
}
  .cu {
    position: relative;
    font-weight: 100;
    font-family: 'Quicksand', sans-serif;
  }

  .logo {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 9%;
    left: 4.9%;
  }

  .bg {
    height: 93vh;
    margin: 3em;
    padding: 2em;
    box-sizing: border-box;
    background-image: linear-gradient(to right bottom, rgba(255, 255, 255, 0.657), rgba(63, 63, 63, 0)), url('~assets/img/bg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    box-shadow: 0 10px 10px 3px #535353b6;
  }

  .container {
    width: 900px;
    height:550px;
    margin: 5% auto;
    position: relative;
    bottom:10%;
  }

  .container .map {
    width: 45%;
    float: left;
  }

.contact-form {
    width: 53%;
    margin-left: 2%;
    float: left;

  }

  .container .contact-form .title {
    font-size: 2.5em;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #000000;
    margin: 5% 8%;
  }

  .container .contact-form .subtitle {
    font-size: 1.2em;
    font-weight: 400;
    margin: 0 4% 5% 8%;
  }

  .container .contact-form input,
  .container .contact-form textarea {
    width: 330px;
    padding: 3%;
    margin: 2% 8%;
    color: #242424;
    border: 1px solid #B7B7B7;
  }

  .container .contact-form input::placeholder,
  .container .contact-form textarea::placeholder {
    color: #242424;
  }

  .container .contact-form .btn-send {
    background-color:none;
    width: 180px;
    height: 60px;
    color: rgb(0, 153, 255);
    font-weight: 700;
    margin: 2% 8%;
    border: none;
  }

</style>
