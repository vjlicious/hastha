<template>
  <div class="home-page">
	    <nuxt-link to='/'><div class="logo">
        <img src="~/assets/img/logo.png" width="100%" height="100%">
      </div></nuxt-link>
<div class="bg" ref="vir">
<NavBar />
<div class="content " ref="vis"> 
	<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6 col-lg-3">
      <div class="card">
      <img class="card-img-top" src="http://placehold.it/250x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title.</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
    <div class="col-xs-12 col-md-6 col-lg-3">
      <div class="card">
      <img class="card-img-top" src="http://placehold.it/250x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
    <!-- Add the extra clearfix for only the required viewport -->
    <div class="clearfix hidden-sm-down hidden-lg-up"></div>
    <div class="col-xs-12 col-md-6 col-lg-3">
      <div class="card">
      <img class="card-img-top" src="http://placehold.it/250x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
      </div></div>
    <div class="col-xs-12 col-md-6 col-lg-3">
      <div class="card">
      <img class="card-img-top" src="http://placehold.it/250x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div></div>
    <div class="col-xs-12 col-md-6 col-lg-3">
      <div class="card">
      <img class="card-img-top" src="http://placehold.it/250x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div></div>
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
  margin-top:15vh;
   display:table;
  flex-direction: row;
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
a {
 -webkit-transition: .25s all;
 transition: .25s all;
}
.card {
  padding-left:auto;
  padding-right:auto;
  min-height:300px;
  margin-top:15px;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 -webkit-transition: .25s box-shadow;
 transition: .25s box-shadow;
}
.card:focus, .card:hover {
 box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
.card-inverse .card-img-overlay {
 background-color: rgba(51, 51, 51, 0.85);
 border-color: rgba(51, 51, 51, 0.85);
}
.card-img-top{
  margin-top:10px;
}
.col-xs-12{
  text-align:center;
  margin-left:auto;
  margin-right:auto;
}
.row{
  margin-left:auto;
  margin-right:auto;
}
</style>
