<template>
<div class="video">
  <div class="content">
<div class="one">
Want to Build Cheaper Houses?
</div>
<div class="two">
  <span>Get Started With..</span>
</div>
</div>
</div>
</template>
<style>
  .video{
    width:100%;
    height:100%;
    background-color: #ccc;
    position: absolute;
    z-index: 5;
    font-size:1em;
    font-weight: 100;
    animation: end 7s;
  }
  .content{
    position:relative;
    top:40%;
    left:40%;

  }
  .one{
    animation: showup 1s ease-out 3s;
  }
  .two {
  width:0px;
  animation: reveal 1s ease-out 3s;
}
.two span {
  margin-left:-355px;
  animation: slidein 1s ease-out 3s;
}
@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}
@keyframes end {
    0% {opacity:0;width:0%;}
    20% {opacity:1;width:0%;}
    30% {width:100%;}
    80% {opacity:1;}
    100% {opacity:0; width:100%; display:none;}
}
</style>

