<template>
<div class="cu">
<div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div>
    <div class="bg">
      <NavBar />
                   <div class="container">
	<div class="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3706929242016!2d77.64090841531865!3d13.012049890829324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e1d3e27bdf%3A0x2dda46016b0a4240!2sHASTHA+%E2%80%93+Alternate+Building+Technology+%26+Research+Pvt.Ltd%2C!5e0!3m2!1sen!2sin!4v1548059028459"  width="100%" height="650px" frameborder="0" style="border:0" allowfullscreen></iframe>
	</div>
	<div class="contact-form">
		<h1 class="title">Contact Us</h1>
		<h2 class="subtitle">We are here assist you.</h2>
		<form action="mailto:viju1997@gmail.com" method="post" enctype="text/plain">
			<input type="text" name="first_name" placeholder="Your Name" />
			<input type="email"  name="email_address" placeholder="Your E-mail Adress" />
			<input type="tel" name="phone" placeholder="Your Phone Number"/>
			<textarea  name="comments" id="" rows="8" placeholder="Your Message"></textarea>
			<button type="submit" class="btn-send">Get a Call Back</button>
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
.logo{
    padding:0;
    margin:0;
    box-sizing: border-box;
    position:absolute;
    z-index:1;
    top:5%;
    left:5%;
  }
  .bg {
    height: 90vh;
    margin: 3em;
    padding: 2em;
    box-sizing:border-box;
    background-image: url('~assets/img/bg.jpg');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    box-shadow: 0 10px 10px 3px  #535353b6;
  }
  body {
  background: #D9B280;
  font-family: "Roboto", sans-serif;
}

.container {
  background: #FFFFFF;
  width: 900px;
  height: 650px;
  margin: 5% auto;
  position: relative;
}
.container .map {
  width: 45%;
  float: left;
}
.container .contact-form {
  width: 53%;
  margin-left: 2%;
  float: left;
}
.container .contact-form .title {
  font-size: 2.5em;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #242424;
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
  background: #A383C9;
  width: 180px;
  height: 60px;
  color: #FFFFFF;
  font-weight: 700;
  margin: 2% 8%;
  border: none;
}

</style>

