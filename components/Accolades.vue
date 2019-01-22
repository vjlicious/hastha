<template>
        <div class="bg">
            hi
        </div>
</template>
<script>
export default {
    transition: {
        name:'allocade',
        mode: 'out-in'
    }
}
</script>

<style>
  .bg {
    position: relative;
    height: 93vh;
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
  
</style>
