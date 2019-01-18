<template>
  <div class="home-page">
	   <div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div>

<div class="bg" ref="vir">
<NavBar />
<div class="content" ref="vis">
   <div class="blog-card one">
	<div class="photo photo1"></div>
	<ul class="details">
		<li class="author">Get in touch with us today for your cost effective house/building.</li>
		
	
	</ul>
	<div class="description">
		<h1>ALTERNATE BUILDING SOLUTIONS</h1>
	
		<p class="summary">Our team at Hastha pioneers in designing and building structures using Alternate Building Technology Solutions to help reduces Cost. We are also collaborative partners with prestigious names like IIT Madras & RBS India  to ensure adaptation of latest research based solutions into the industry.</p>
		
	</div>
</div>
<div class="blog-card alt two">
	<div class="photo photo2"></div>
	<ul class="details">
		<li class="author">Get in touch with us today for your cost effective house/building</li>
		

	</ul>
	<div class="description">
		<h1>DESIGN AND PROJECT CONSULTATION</h1>
		<h2></h2>
		<p class="summary">We take pride in our strength to understand our Client's needs and desires and to arrive at a design based solution. Our Core Team comprises of experts in Rapid Wall (GFRG), Mud Block etc and with our strength of over 100 members we deliver the best to our clients.</p>
		
	</div>
</div>   
 <div class="blog-card three">
	<div class="photo photo3"></div>
	<ul class="details">
		<li class="author">Get in touch with us for independent assessments and evaluations.</li>

	</ul>
	<div class="description">
		<h1>THIRD PARTY AUDITING</h1>
		
		<p class="summary">Our team of Qualified Experts are frequently sought for assessing and auditing third party construction projects for quality and timeliness, Insurance Valuations, Immovable Property Valuation for Nationalised Banks & Financial Institutions on medium to large scale projects both nationally and internationally. Get in touch with us for independent assessments and evaluations.

​</p>
		
	</div>
 </div> 
</div>                     
</div>
</div>
</template>
<script>

  import NavBar from '@/components/NavBar.vue'

  import { TimelineLite } from 'gsap'
  export default {
    components: {
      NavBar
    },
    mounted(){
     const { vis,vir,stat } =this.$refs
     const timeline = new TimelineLite()
     timeline.from(vis,1,{
       x: -100,
       opacity: 0
     })
     timeline.to(vis, 1, {
       x: 0,
       opacity: 1
     })
  
   }
  }

</script>
<style lang="scss" scoped>


 .home-page {
    position: relative;
}
.content{
  margin-top:10vh;
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
  .bg {
    height: 100vh;
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
/*PEN STYLES*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700);
$green: #75D13B;
$grey: #e9e9e9;

@mixin transition($dur, $prop: all) {
	transition: $prop $dur ease;
	-webkit-transition: $prop $dur ease;
}

@mixin bgImg($url) {
	background: url($url) center no-repeat;
	background-size: cover;
}

.blog-card {
	@include transition(0.3s, height);
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
	margin: 0 auto 1.6%;
	overflow: hidden;
	position: relative;
	font-size: 14px;
	line-height: 1.45em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	&:hover {
		.details {
			left: 0;
		}

		&.alt {
			.details {
				right: 0;
			}
		}
	}

	&.alt {
		.details {
			right: -100%;
			left: inherit;
		}
	}

	.photo {
		height: 200px;
		position: relative;

		&.photo1 {
			@include bgImg("~assets/img/s1.jpg");
		}

		&.photo2 {
			@include bgImg("~assets/img/s2.jpg");
		}
    	&.photo3 {
			@include bgImg("http://i60.tinypic.com/xeiv79.jpg");
		}
	}

	.details {
		@include transition(0.3s);

		background: rgba(0, 0, 0, 0.6);
		box-sizing: border-box;
		color: #fff;
		font-family: "Open Sans";
		list-style: none;
		margin: 0;
		padding: 10px 15px;
		height: 200px;

		/*POSITION*/
		position: absolute;
		top: 0;
		left: -100%;

		> li {
			padding: 3px 0;
		}

		li:before, .tags ul:before {
			font-family: FontAwesome;
			margin-right: 10px;
			vertical-align: middle;
		}

		.author:before {
			content: "\f007";
		}

		.date:before {
			content: "\f133";
		}

		.tags {
			ul {
				&:before {
					content: "\f02b";
				}

				list-style: none;
				margin: 0;
				padding: 0;
			}

			li {
				display: inline-block;
				margin-right: 3px;
			}
		}

		a {
			color: inherit;
			border-bottom: 1px dotted;

			&:hover {
				color: $green;
			}
		}
	}

	.description {
		padding: 10px;
		box-sizing: border-box;
		position: relative;

		h1 {
			font-family: "Roboto";
			line-height: 0.8em;
			margin: 0 0 10px 0;
		}

		h2 {
			color: $grey / 1.5;
			font-family: "Open Sans";
			line-height: 1.0em;
			text-transform: uppercase;
			font-size: 1em;
			font-weight: 400;
			margin: 1.2% 0;
		}

		p {
			position: relative;
			margin: 0;
			padding-top: 20px;

			&:after {
				content: "";
				background: $green;
				height: 6px;
				width: 40px;

				/*POSITION*/
				position: absolute;
				top: 6px;
				left: 0;
			}
		}

		a {
			color: $green;
			margin-bottom: 10px;
			float: right;

			&:after {
				@include transition(0.3s);

				content: "\f061";
				font-family: FontAwesome;
				margin-left: -10px;
				opacity: 0;
				vertical-align: middle;
			}

			&:hover:after {
				margin-left: 5px;
				opacity: 1;
			}
		}
	}
}

@media screen and (min-width: 600px) {
	.blog-card {
		height: 200px;
		max-width: 600px;

		&:hover {
			.photo {
				transform: rotate(5deg) scale(1.3);
			}

			&.alt .photo {
				transform: rotate(-5deg) scale(1.3);
			}
		}

		&.alt {
			.details {
				padding-left: 30px;
			}

			.description {
				float: right;

				&:before {
					transform: skewX(5deg);
					right: -15px;
					left: inherit;
				}
			}

			.photo {
				float: right;
			}
		}

		.photo {
			@include transition(0.5s);

			float: left;
			height: 100%;
			width: 40%;
		}

		.details {
			width: 40%;
		}

		.description {
			float: left;
			width: 60%;
			z-index: 0;

			&:before {
				transform: skewX(-5deg);
				content: "";
				background: #fff;
				width: 100%;
				z-index: -1;

				/*POSITION*/
				position: absolute;
				left: -15px;
				top: 0;
				bottom: 0;
			}
		}
	}
}
.two{
	line-height: 1.8em;

}

</style>
